import React, {
    useState,
    useEffect,} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withFormFactor } from '../../hocs/withFormFactor'
import { ColorCodes, Images, FormFactorTypes } from '../../common/constants'
import { H4Regular } from '../text/H4'
import { GeneralProps } from './GeneralProps'
import { Pill } from './Pill'
import { HContainer,
    HContainerV,
    HFillContainer, } from '../container/Containers'
    
    const Container = styled(HContainerV)`
  ${props => props.minHeight && `min-height: ${props.minHeight};`}
  ${props => props.padding && `padding: ${props.padding};`}
`;

const Slide = styled(HFillContainerV)`
  position: relative;
  cursor: pointer;

  ${props => props.width && `width: ${props.width};`}
`;

const SliderBar = styled.div`
  position: absolute;
  width: 100%;

  height: ${props => props.height || '16px'};
  background-color: ${props => props.color || ColorCodes.Grey5};

  ${props => props.borderRadius && `border-radius: ${props.borderRadius};`}
  ${props => props.border && `border: ${props.border};`}
  ${props => props.boxShadow && `box-shadow: ${props.boxShadow};`}
`;

const SliderFill = styled.div`
  position: absolute;
  pointer-events: none;

  height: ${props => props.height || '16px'};
  background-color: ${props => props.color || ColorCodes.Red1};

  ${props => props.borderRadius && `border-radius: ${props.borderRadius};`}
  ${props => props.border && `border: ${props.border};`}
`;

const SliderThumb = styled.div`
  position: absolute;
  cursor: pointer;

  border-radius: ${props => props.borderRadius || '50%'};
  background-color: ${props => props.color || ColorCodes.Red1};
  width: ${props => props.width || props.height || '16'}px;
  height: ${props => props.height || props.width || '16'}px;

  ${props => props.border && `border: ${props.border};`}
  ${props => props.boxShadow && `box-shadow: ${props.boxShadow};`}
  ${props => props.borderRadius && `border-radius: ${props.borderRadius};`}
`;

export class Slider extends Component {

  sentry = Sentry.with('Common', 'Slider');

  ready = false;
  valid = this.props.range && this.props.thumbWidth;

  container = React.createRef();
  bar = React.createRef();
  fill = React.createRef();

  maxThumb = {
    step: null,
    center: 0,
    value: null,
    ref: React.createRef(),
    next: null,
    prev: null
  };

  minThumb = {
    step: null,
    center: 0,
    value: null,
    ref: React.createRef(),
    next: null,
    prev: null
  };

  barColor = this.props.invertColor && this.props.barColor || this.props.fillColor;
  fillColor = this.props.invertColor && this.props.fillColor || this.props.barColor;
  thumbRadius = this.props.thumbWidth && this.props.thumbWidth / 2;

  constructor(props) {

    super(props);

    if (props.range && (props.range.max - props.range.min) % props.stepSize !== 0) {
      this.sentry.warn('Step size does not divide evenly into range, this can cause unpredictable results.');
    }

    this.state = {
      range: props.range,
      stepCount: Math.floor(props.range && (props.range.max - props.range.min) / props.stepSize)
    };
  }

  static getDerivedStateFromProps(props, state) {

    if (
      !props ||
      !props.range ||
      typeof props.range.min !== 'number' ||
      typeof props.range.max !== 'number' || (
        props.range.min === state.range.min &&
        props.range.max === state.range.max
    )) {
      return null;
    }

    if (props.range && (props.range.max - props.range.min) % props.stepSize !== 0) {
      this.sentry.warn('Step size does not divide evenly into range, this can cause unpredictable results.');
    }

    return {
      range: props.range,
      stepCount: Math.floor(props.range && (props.range.max - props.range.min) / props.stepSize)
    };
  }

  componentDidUpdate(prevProps) {

    if (
      prevProps === this.props || (
      prevProps.range &&
      prevProps.range.min === this.state.range.min &&
      prevProps.range.max === this.state.range.max
    )) {
      return;
    }

    this.calcStepSizeInPx();
    this.setupThumbs();
  }

  componentDidMount = () => {

    if (!this.valid) {
      return;
    }

    this.containerRect = this.container.current.getBoundingClientRect();
    this.calcStepSizeInPx();
    this.setupThumbs();

    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('mouseup', this.onMouseUp);
    window.addEventListener('resize', this.onResize);
    window.addEventListener('touchmove', this.onMouseMove);
    window.addEventListener('touchend', this.onMouseUp);

    this.ready = true;
  };

  setupThumbs = () => {

    if (this.props.invert) {
      this.minThumb.prev = this.maxThumb;
      this.maxThumb.next = this.minThumb;
    }

    if (!this.props.invert) {
      this.minThumb.next = this.maxThumb;
      this.maxThumb.prev = this.minThumb;
    }

    let initialMin = (this.props.initial && this.props.initial.min) || (this.state.range && this.state.range.min);
    let initialMax = (this.props.initial && this.props.initial.max) || (this.state.range && this.state.range.max);

    this.setThumbStep(this.minThumb, this.valueToStep(initialMin));
    this.updateThumbPos(this.minThumb);
    this.setThumbStep(this.maxThumb, this.valueToStep(initialMax));
    this.updateThumbPos(this.maxThumb);
  };

  componentWillUnmount = () => {

    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('mouseup', this.onMouseUp);
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('touchmove', this.onMouseMove);
    window.removeEventListener('touchend', this.onMouseUp);
  };

  componentDidCatch = (
    e,
    info
  ) => {
    this.sentry.error(e, info);
  };

  onResize = () => {

    this.calcStepSizeInPx();
    this.containerRect = this.container.current.getBoundingClientRect();
    this.updateThumbPos(this.minThumb);
    this.updateThumbPos(this.maxThumb);
  };

  onBarMouseDown = (e) => {

    this.drag = true;

    if (e.type === 'touchstart'){

      this.focusThumb = this.getClosestThumb(e?.changedTouches?.[0].pageX);
      this.moveThumb(this.focusThumb, e?.changedTouches?.[0].pageX);
      return;
    }

    this.focusThumb = this.getClosestThumb(e.pageX);
    this.moveThumb(this.focusThumb, e.pageX);
  };

  onThumbMouseDown = (thumb, e) => {

    this.drag = true;
    this.focusThumb = thumb;

    if (e.type === 'touchstart'){

      this.moveThumb(this.focusThumb, e?.changedTouches?.[0].pageX);
      return;
    }

    this.moveThumb(this.focusThumb, e.pageX);
  };

  onMouseUp = () => {

    this.drag = false;
    this.focusThumb = null;
  };

  onMouseMove = (e) => {

    if (!this.drag || !this.focusThumb) {
      return;
    }

    if (e.type === 'touchmove'){

      this.moveThumb(this.focusThumb, e?.changedTouches?.[0]?.pageX);
      return;
    }

    this.moveThumb(this.focusThumb, e.pageX);
  };

  calcStepSizeInPx = () => {
    this.stepSizeInPx = (this.bar.current.scrollWidth - this.props.thumbWidth + 2) / this.state.stepCount;
  };

  stepToPx = (step) => {
    return (step * this.stepSizeInPx + (this.thumbRadius)) + this.containerRect.left;
  };

  pxToStep = (px) => {

    let slidePx = px - this.containerRect.left;
    return Math.round((slidePx - (this.thumbRadius)) / this.stepSizeInPx);
  };

  stepToValue = (step) => {

    let stepValue = step * this.props.stepSize + (this.state.range && this.state.range.min);

    if (this.props.invert) {
      stepValue = (this.state.range && this.state.range.max) - stepValue;
    }

    return stepValue;
  };

  valueToStep = (value) => {

    let step = Math.floor((value - (this.state.range && this.state.range.min)) / this.props.stepSize);

    if (this.props.invert) {
      step = this.state.stepCount - step;
    }

    return step
  };

  getClosestThumb = (px) => {

    if (this.props.direction === 'right') {
      return this.maxThumb;
    }

    if (this.props.direction === 'left') {
      return this.minThumb;
    }

    if (px - this.minThumb.center < this.maxThumb.center - px) {
      return this.minThumb;
    }

    return this.maxThumb;
  };

  getThumbValues = () => {

    if (this.props.invert) {
      return {
        min: this.maxThumb.value,
        max: this.minThumb.value
      }
    }

    return {
      min: this.minThumb.value,
      max: this.maxThumb.value
    }
  };

  updateThumbValue = (thumb) => {

    thumb.value = this.stepToValue(thumb.step);

    if (!this.ready) {
      return;
    }

    this.props.onChange && this.props.onChange(this.getThumbValues());
  };

  moveThumb = (thumb, px) => {

    let step = this.pxToStep(px - this.thumbRadius);

    if (!thumb || step === thumb.step) {
      return;
    }

    this.setThumbStep(thumb, step);
    this.updateThumbPos(thumb);
  };

  setThumbStep = (thumb, step) => {

    if (step > this.state.stepCount) {
      step = this.state.stepCount;
    }

    if (step < 0) {
      step = 0;
    }

    if (
      step === thumb.step ||
      (thumb.next && thumb.next.ref.current && thumb.next.step != null && step >= thumb.next.step) ||
      (thumb.prev && thumb.prev.ref.current && thumb.prev.step != null && step <= thumb.prev.step)
    ) {
      return;
    }

    thumb.step = step;
    this.updateThumbValue(thumb);
  };

  updateThumbPos = (thumb) => {

    thumb.center = this.stepToPx(thumb.step);
    this.updateFill();

    if (!thumb.ref.current) {
      return;
    }

    thumb.ref.current.style.left = `${thumb.step * this.stepSizeInPx}px`;
  };

  updateFill = () => {

    if (!this.fill.current) {
      return;
    }

    let left = this.props.direction === 'right'
      ? 0
      : this.minThumb.center - this.containerRect.left;

    this.fill.current.style.left = left + 'px';

    let right = this.props.direction === 'left'
      ? 0
      : (this.bar.current.scrollWidth + this.containerRect.left) - this.maxThumb.center;

    this.fill.current.style.right = right + 'px';
  };

  render = () => {

    return (

      <Container
        id={this.props.id}
        automationId={this.props.automationId}
        ref={this.container}
        thumbHeight={this.props.thumbHeight}
        flex={this.props.flex}
        padding={this.props.padding}
        margin={this.props.margin}
        minHeight={this.props.minHeight}
        minWidth={this.props.minWidth}
        maxHeight={this.props.maxHeight}
        maxWidth={this.props.maxWidth}>

        { this.valid &&

          <Slide
            width={this.props.width}>

              <SliderBar
                ref={this.bar}
                color={this.barColor}
                onMouseDown={this.onBarMouseDown}
                onTouchStart={this.onBarMouseDown}
                height={this.props.height}
                borderRadius={this.props.borderRadius}
                border={this.props.border}
                boxShadow={this.props.boxShadow}/>

            { this.props.showFill &&

              <SliderFill
                ref={this.fill}
                color={this.fillColor}
                height={this.props.height}
                borderRadius={this.props.borderRadius}
                border={this.props.border}/>
            }

            { this.props.direction !== 'right' &&

              <SliderThumb
                ref={this.minThumb.ref}
                width={this.props.thumbWidth}
                height={this.props.thumbHeight}
                onMouseDown={this.onThumbMouseDown.bind(this, this.minThumb)}
                onTouchStart={this.onThumbMouseDown.bind(this, this.minThumb)}
                borderRadius={this.props.thumbBorderRadius}
                boxShadow={this.props.thumbBoxShadow}
                color={this.props.thumbColor}
                border={this.props.thumbBorder}/>
            }

            { this.props.direction !== 'left' &&

              <SliderThumb
                ref={this.maxThumb.ref}
                width={this.props.thumbWidth}
                height={this.props.thumbHeight}
                onMouseDown={this.onThumbMouseDown.bind(this, this.maxThumb)}
                onTouchStart={this.onThumbMouseDown.bind(this, this.maxThumb)}
                borderRadius={this.props.thumbBorderRadius}
                boxShadow={this.props.thumbBoxShadow}
                color={this.props.thumbColor}
                border={this.props.thumbBorder}/>
            }

          </Slide>
        }

      </Container>
    );
  }
}

Slider.propTypes = {
  id: PropTypes.string.isRequired,
  automationId: PropTypes.string.isRequired,
  range: PropTypes.shape({
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired
  }).isRequired,
  initial: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number
  }),
  padding: PropTypes.string,
  margin: PropTypes.string,
  flex: PropTypes.string,
  minHeight: PropTypes.string,
  minWidth: PropTypes.string,
  maxHeight: PropTypes.string,
  maxWidth: PropTypes.string,
  height: PropTypes.string,
  border: PropTypes.string,
  boxShadow: PropTypes.string,
  borderRadius: PropTypes.string,
  thumbWidth: PropTypes.number.isRequired,
  thumbHeight: PropTypes.number,
  thumbColor: PropTypes.string,
  thumbBorder: PropTypes.string,
  thumbBoxShadow: PropTypes.string,
  thumbBorderRadius: PropTypes.string,
  width: PropTypes.string,
  stepSize: PropTypes.number,
  barColor: PropTypes.string,
  fillColor: PropTypes.string,
  invertColor: PropTypes.bool,
  invert: PropTypes.bool,
  showFill: PropTypes.bool,
  direction: PropTypes.oneOf([
    'left',
    'right',
    'both',
  ]),
  onChange: PropTypes.func,
};

Slider.defaultProps = {
  id: 'unknown-slider',
  automationId: 'unknown-slider',
  range: {
    min: 0,
    max: 100
  },
  initial: null,
  padding: '2vh',
  margin: null,
  flex: null,
  minHeight: null,
  minWidth: null,
  maxHeight: null,
  maxWidth: null,
  height: '16px',
  border: null,
  boxShadow: null,
  borderRadius: '8px',
  thumbHeight: 32,
  thumbWidth: 32,
  thumbColor: ColorCodes.Red1,
  thumbBorder: null,
  thumbBoxShadow: null,
  thumbBorderRadius: '50%',
  width: '100%',
  stepSize: 1,
  barColor: ColorCodes.Red1,
  fillColor: ColorCodes.Grey5,
  invertColor: false,
  invert: false,
  showFill: true,
  direction: 'right',
  onChange: () => {},
};