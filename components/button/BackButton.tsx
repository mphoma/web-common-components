import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ButtonProps } from './ButtonProps'
import { Text } from '../text/Text'
import { FontFamilies } from '../../common/constants'
import { ColorCodes, Images } from '../../common/constants'
import { ColorSvg } from '../general/ColorSvg'

const Container = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: start;
  cursor: pointer;
  outline: none;

  ${props => props.width && `width: ${props.width};`}
  ${props => props.height && `height: ${props.height};`}
  background-color: ${ColorCodes.Transparent};
  border: 0;

  ${props => props.flex && `flex: ${props.flex};`}
  ${props => props.padding && `padding: ${props.padding};`}
  ${props => props.margin && `margin: ${props.margin};`}
  ${props => props.minHeight && `min-height: ${props.minHeight};`}
  ${props => props.minWidth && `min-width: ${props.minWidth};`}
  ${props => props.maxHeight && `max-height: ${props.maxHeight};`}
  ${props => props.maxWidth && `max-width: ${props.maxWidth};`}
`;

export const BackButton = (props: ButtonProps) =>

  <Container
    height={props.height}
    width={props.width}
    flex={props.flex}
    padding={props.padding}
    margin={props.margin}
    minHeight={props.minHeight}
    minWidth={props.minWidth}
    maxHeight={props.maxHeight}
    maxWidth={props.maxWidth}
    onClick={() => props.isEnabled && ((props.onClick && props.onClick()) || (props.history && props.history.goBack && props.history.goBack()))}>

    <ColorSvg
      src={Images.Icons.BackArrow}
      color={props.isEnabled && props.activeColor || props.disabledColor}
      height={`calc(${props.height} * 0.9)`}
      width={`calc(${props.height} * 0.9)`} />

    <Text
      fontFamily={FontFamilies.VodafoneRegularEot}
      fontSize={props.height}
      color={props.isEnabled && props.activeColor || props.disabledColor}
      padding={props.textPadding}>

      {props.text}
    </Text>

  </Container>
  ;

BackButton.propTypes = {
  text: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  isEnabled: PropTypes.bool,
  activeColor: PropTypes.string,
  disabledColor: PropTypes.string,
  history: PropTypes.object,
  onClick: PropTypes.func,
  flex: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  textPadding: PropTypes.string,
  minHeight: PropTypes.string,
  minWidth: PropTypes.string,
  maxHeight: PropTypes.string,
  maxWidth: PropTypes.string,
};

BackButton.defaultProps = {
  text: 'Back',
  height: '1.5vh',
  width: 'auto',
  isEnabled: true,
  activeColor: ColorCodes.Grey9,
  disabledColor: ColorCodes.Grey5,
  history: undefined,
  onClick: undefined,
  flex: null,
  padding: null,
  margin: null,
  textPadding: '0 0 0 0.3vw',
  minHeight: null,
  minWidth: null,
  maxHeight: null,
  maxWidth: null,
};