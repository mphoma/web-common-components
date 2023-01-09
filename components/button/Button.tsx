import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ButtonProps } from './ButtonProps'
import { H3Regular } from '../text/H3'
import { Spinner } from '../spinner/Spinner'
import { ColorCodes } from '../../common/constants'
import { ColorSvg } from '../general/ColorSvg'

const Container = styled.button<ButtonProps>`
  cursor: pointer;
  display: flex;
  background-size: contain;
  background-image: none;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  outline: none;

  color: ${props => props.isEnabled && props.activeColor || props.disabledColor};
  background-color: ${props => props.isEnabled && props.activeBackgroundColor || props.disabledBackgroundColor};
  ${props => props.fontSize && `font-size: ${props.fontSize};`}
  border-radius: ${props => props.borderRadius || '10px'};
  border: ${props => props.border || `2px solid`};
  ${props => props.borderTop && `border-top: ${props.borderTop};`}
  ${props => props.borderBottom && `border-bottom: ${props.borderBottom};`}
  ${props => props.borderLeft && `border-left: ${props.borderLeft};`}
  ${props => props.borderRight && `border-right: ${props.borderRight};`}
  border-color: ${props => props.isEnabled && props.activeBorderColor || props.disabledBorderColor};

  ${props => props.position && `position: ${props.position};`}
  ${props => props.flex && `flex: ${props.flex};`}
  ${props => props.margin && `margin: ${props.margin};`}
  ${props => props.padding && `padding: ${props.padding};`}
  ${props => props.width && `width: ${props.width};`}
  ${props => props.height && `height: ${props.height};`}
  ${props => props.backgroundImageUrl && `background: url(${props.backgroundImageUrl}) center no-repeat;`}
  ${props => props.maxWidth && `max-width: ${props.maxWidth};`}
  ${props => props.minWidth && `min-width: ${props.minWidth};`}
  ${props => props.maxHeight && `max-height: ${props.maxHeight};`}
  ${props => props.minHeight && `min-height: ${props.minHeight};`}
  ${props => props.boxShadow && `box-shadow: ${props.boxShadow};`}

  :focus {
    ${props => props.focusWidth && `width: ${props.focusWidth};`}
    ${props => props.focusHeight && `height: ${props.focusHeight};`}
    ${props => props.focusFlex && `flex: ${props.focusFlex};`}
    ${props => props.focusPadding && `padding: ${props.focusPadding};`}
    ${props => props.focusMargin && `margin: ${props.focusMargin};`}
    ${props => props.focusBackgroundColor && `background-color: ${props.focusBackgroundColor};`}
    ${props => props.focusColor && `color: ${props.focusColor};`}
    ${props => props.focusBorderColor && `border-color: ${props.focusBorderColor};`}
    ${props => props.focusBorderRadius && `border-radius: ${props.focusBorderRadius};`}
    ${props => props.focusCursor && `cursor: ${props.focusCursor};`}
    ${props => props.focusBoxShadow && `box-shadow: ${props.focusBoxShadow};`}
  }

  :active {
    ${props => props.activeOpacity && `opacity: ${props.activeOpacity};`}
  }
 `

 const IconContainer = styled.div`
  flex: 1 0 auto;
`;

const TextContainer = styled.div`
  flex: 4 0 auto;
  padding: 0 1vw;
`;

export const Button = React.forwardRef((props: ButtonProps, ref:any) => {

  const buttonRef = React.useRef();
  React.useImperativeHandle(ref, () => buttonRef.current);

  const onClick = () => {

    if (!props.isEnabled || props.showSpinner || !props.onClick) {
      return;
    }

    // props.onClick(props.onClickArgs);

    // Button.insights.tag({
    //   event: `click:${props.name||props.id}`,
    // });
  };

  return (

    <Container
      id={props.id || props.name || props.text}
      // ref={props.buttonRef}
      name={props.name || props.id || props.text}
      delay={props.delay}
      automationId={props.automationId}
      flex={props.flex}
      isEnabled={props.isEnabled}
      tabIndex={props.isEnabled ? 0 : -1}
      width={props.width}
      maxWidth={props.maxWidth}
      minWidth={props.minWidth}
      maxHeight={props.maxHeight}
      minHeight={props.minHeight}
      fontSize={props.fontSize}
      height={props.height}
      padding={props.padding}
      margin={props.margin}
      backgroundImageUrl={props.backgroundImageUrl}
      activeColor={props.activeColor}
      disabledColor={props.disabledColor}
      activeBackgroundColor={props.activeBackgroundColor}
      disabledBackgroundColor={props.disabledBackgroundColor}
      borderRadius={props.borderRadius}
      border={props.border}
      borderTop={props.borderTop}
      borderBottom={props.borderBottom}
      borderLeft={props.borderLeft}
      borderRight={props.borderRight}
      activeBorderColor={props.activeBorderColor}
      disabledBorderColor={props.disabledBorderColor}
      position={props.position}
      boxShadow={props.boxShadow}
      onClick={() => setTimeout(() => onClick(), props.delay)}
      focusWidth={props.focusWidth}
      focusHeight={props.focusHeight}
      focusFlex={props.focusFlex}
      focusPadding={props.focusPadding}
      focusMargin={props.focusMargin}
      focusBackgroundColor={props.focusBackgroundColor}
      focusColor={props.focusColor}
      focusBorderColor={props.focusBorderColor}
      focusBorderRadius={props.focusBorderRadius}
      focusCursor={props.focusCursor}
      focusBoxShadow={props.focusBoxShadow}
      activeOpacity={(props.isEnabled && props.activeOpacity) || undefined}
      autoFocus={props.autoFocus}>

      { props.iconUrl &&

        <IconContainer>
          <ColorSvg
            src={props.iconUrl}
            color={ColorCodes.CurrentColor}
            height={`calc(${props.height} * ${props.iconScale})`}
            width={`calc(${props.height} * ${props.iconScale})`} />
        </IconContainer>
      }

      { props.showSpinner &&

        <Spinner
          size={props.spinnerSize}
          color={ColorCodes.CurrentColor} />
      }

      { !props.showSpinner && props.text &&

        <TextContainer>

          <H3Regular
            fontWeight={props.fontWeight}
            fontSize={props.fontSize || undefined}
            text={props.text} />
        </TextContainer>
      }

      { !props.showSpinner && props.children }
        
    </Container>
  )
});

Button.displayName = 'Button';
export default Button;

Button.propTypes = {
  automationId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  delay: PropTypes.number,
  text: PropTypes.string,
  iconUrl: PropTypes.string,
  iconScale: PropTypes.string,
  fontSize: PropTypes.string,
  isEnabled: PropTypes.bool,
  maxWidth: PropTypes.string,
  minWidth: PropTypes.string,
  maxHeight: PropTypes.string,
  minHeight: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  padding: PropTypes.string,
  showSpinner: PropTypes.bool,
  backgroundImageUrl: PropTypes.string,
  disabledColor: PropTypes.string,
  disabledBackgroundColor: PropTypes.string,
  disabledBorderColor: PropTypes.string,
  activeColor: PropTypes.string,
  activeBackgroundColor: PropTypes.string,
  activeBorderColor: PropTypes.string,
  border: PropTypes.string,
  borderRadius: PropTypes.string,
  borderTop: PropTypes.string,
  borderBottom: PropTypes.string,
  borderLeft: PropTypes.string,
  borderRight: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  onClickArgs: PropTypes.any,
  flex: PropTypes.string,
  margin: PropTypes.string,
  spinnerSize: PropTypes.string,
  position: PropTypes.string,
  boxShadow: PropTypes.string,
  focusWidth: PropTypes.string,
  focusHeight: PropTypes.string,
  focusFlex: PropTypes.string,
  focusPadding: PropTypes.string,
  focusMargin: PropTypes.string,
  focusBackgroundColor: PropTypes.string,
  focusBackground: PropTypes.string,
  focusColor: PropTypes.string,
  focusBorderColor: PropTypes.string,
  focusBorderRadius: PropTypes.string,
  focusCursor: PropTypes.string,
  focusBoxShadow: PropTypes.string,
  activeOpacity: PropTypes.string,
  fontWeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  autoFocus: PropTypes.bool,
};

Button.defaultProps = {
  id: 'unknown-button',
  automationId: 'unknown-button',
  delay: 100,
  name: 'unknown-button',
  text: undefined,
  iconUrl: undefined,
  iconScale: '0.75',
  fontSize: undefined,
  isEnabled: true,
  maxWidth: undefined,
  minWidth: undefined,
  maxHeight: undefined,
  minHeight: undefined,
  width: 'auto',
  height: '4.4vh',
  padding: undefined,
  backgroundImageUrl: undefined,
  showSpinner: false,
  disabledColor: '#999999',
  disabledBackgroundColor: '#CCCCCC',
  disabledBorderColor: '#CCCCCC',
  activeColor: '#FFFFFF',
  activeBackgroundColor: '#E60000',
  activeBorderColor:'#E60000',
  border: undefined,
  borderRadius: '6px',
  borderTop: undefined,
  borderBottom: undefined,
  borderLeft: undefined,
  borderRight: undefined,
  onClick: () => {},
  onClickArgs: undefined,
  flex: undefined,
  margin: undefined,
  spinnerSize: '90%',
  position: undefined,
  boxShadow: undefined,
  fontWeight: 'normal',
  focusWidth: undefined,
  focusHeight: undefined,
  focusFlex: undefined,
  focusPadding: undefined,
  focusMargin: undefined,
  focusBackgroundColor: undefined,
  focusBackground: undefined,
  focusColor: undefined,
  focusBorderColor: undefined,
  focusBorderRadius: undefined,
  focusCursor: undefined,
  focusBoxShadow: undefined,
  activeOpacity: undefined,
  autoFocus: false,
};
