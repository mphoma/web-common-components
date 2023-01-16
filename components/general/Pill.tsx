import React, { Fragment} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withFormFactor } from '../../hocs/withFormFactor'
import { ColorCodes, Images, FormFactorTypes, FontFamilies } from '../../common/constants'
import { H4Regular } from '../text/H4'
import { GeneralProps } from './GeneralProps'

const Container = styled.div<GeneralProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  flex: ${props => props.flex || '1 0 auto'};
  ${props => props.padding && `padding: ${props.padding};`}
  ${props => props.margin && `margin: ${props.margin};`}
  ${props => props.border && `border: ${props.border};`}
  ${props => props.backgroundColor && `background-color: ${props.backgroundColor};`}
  ${props => props.borderRadius && `border-radius: ${props.borderRadius};`}
`;

export const Pill = (props : GeneralProps) => {

  const pillRef = React.useRef<null | HTMLDivElement>(null);
  const backgroundColor = props.active && props.activeColor || props.inActiveColor;
  const fontColor = props.active && props.activeFontColor || props.inActiveFontColor;

  if (props.active && pillRef.current) {

    pillRef.current.scrollIntoView();
  }

  const onPillClick = () => {

    props.onPillClicked && props.onPillClicked({
      id: props.id,
      name: props.name,
      value: props.value,
      label: props.label,
    });
  };

  return (

    <Container
      id={props.id}
      automationId={props.automationId}
      ref={pillRef}
      onClick={onPillClick}
      backgroundColor={backgroundColor}
      active={props.active}
      padding={props.padding}
      margin={props.margin}
      border={props.border}
      borderRadius={props.borderRadius}
      flex={props.flex}>

      <H4Regular
        text={props.label}
        color={fontColor}
        padding={props.textPadding}
        fontSize={props.fontSize}
        fontFamily={props.fontFamily}
        fontWeight={props.fontWeight}
      />

    </Container>
  )
};

Pill.propTypes = {
  automationId: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  active: PropTypes.bool,
  onPillClicked: PropTypes.func,
  textPadding: PropTypes.string,
  inActiveColor: PropTypes.string,
  activeColor: PropTypes.string,
  inActiveFontColor: PropTypes.string,
  activeFontColor: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  border: PropTypes.string,
  borderRadius: PropTypes.string,
  flex: PropTypes.string,
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.string
};

Pill.defaultProps = {
  id: 'unknown-pill',
  automationId: 'unknown-pill',
  name: null,
  value: '',
  label: '',
  active: false,
  onPillClicked: () => {},
  textPadding: '1vmin',
  inActiveColor: ColorCodes.Transparent,
  activeColor: ColorCodes.Grey6,
  inActiveFontColor: ColorCodes.Grey6,
  activeFontColor: ColorCodes.White,
  padding: undefined,
  margin: '15px 10px',
  border: `1px solid ${ColorCodes.Grey7}`,
  borderRadius: '20px',
  flex: undefined,
  fontFamily: FontFamilies.VodafoneRegularEotIeFix,
  fontWeight: undefined
};