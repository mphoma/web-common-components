import React from 'react'
import
  PropTypes
from 'prop-types';
import
  styled
from 'styled-components';
import { ColorCodes, FontSizes, FontFamilies } from '../../common/constants';
import { GeneralProps } from './GeneralProps';

const LinkUI = styled.div<GeneralProps>`
  display: inline;
  text-decoration: underline;
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  font-family: ${props => props.fontFamily};
  padding: ${props => props.padding};
  cursor: pointer;

  :focus {
    ${props => props.focusOutline && `outline: ${props.focusOutline};`}
    ${props => props.focusColor && `color: ${props.focusColor};`}
    ${props => props.focusFontFamily && `font-family: ${props.focusFontFamily};`}
    ${props => props.focusFontSize && `font-size: ${props.focusFontSize};`}
    ${props => props.focusPadding && `padding: ${props.padding};`}
    ${props => props.focusFocusCursor && `cursor: ${props.focusCursor};`}
  }

  :active {
    ${props => props.activeOpacity && `opacity: ${props.activeOpacity};`}
  }
`;

export const Link = (props : GeneralProps ) => {

  const {
    autoFocus,
    onClick,
    ...containerProps
  } = props;

  const [
    state,
    setState
  ] = React.useState({
    ref: null,
  });

  const setRef = ref => {

    if (!ref || state.ref) {
      return;
    }

    setState(prevState => ({
      ...prevState,
      ref,
    }));
  };

  React.useEffect(() => {

    autoFocus && state.ref && state.ref.focus();
  }, [
    state.ref,
  ]);

  return (
    <LinkUI
      {...containerProps}
      onClick={() => setTimeout(() => onClick(), props.delay)}
      ref={setRef}>

      {props.children}
    </LinkUI>
  );
};

Link.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontFamily: PropTypes.string,
  padding: PropTypes.string,
  focusOutline: PropTypes.string,
  focusColor: PropTypes.string,
  focusFontFamily: PropTypes.string,
  focusFontSize: PropTypes.string,
  focusPadding: PropTypes.string,
  focusFocusCursor: PropTypes.string,
  autoFocus: PropTypes.bool,
  activeOpacity: PropTypes.string,
  delay: PropTypes.number,
};

Link.defaultProps = {
  color: ColorCodes.Black,
  fontSize: FontSizes.Normal,
  fontFamily: FontFamilies.VodafoneRegularEot,
  padding: null,
  focusOutline: null,
  focusColor: null,
  focusFontFamily: null,
  focusFontSize: null,
  focusPadding: null,
  focusFocusCursor: null,
  autoFocus: false,
  activeOpacity: null,
  delay: 100,
};