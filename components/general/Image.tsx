import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { GeneralProps } from './GeneralProps'

const Img = styled.img<GeneralProps>`
  width: ${props => props.width || '5vh'};
  height: ${props => props.height || '5vh'};

  ${props => props.padding && `padding: ${props.padding};`}
  ${props => props.margin && `margin: ${props.margin};`}
  ${props => props.flex && `flex: ${props.flex}`};
  ${props => props.minWidth && `min-width: ${props.minWidth}`};
  ${props => props.minHeight && `min-height: ${props.minHeight}`};
  ${props => props.objectFit && `object-fit: ${props.objectFit};`}
  ${props => props.onClick && `cursor: pointer;`}
  ${props => props.alignSelf && `align-self: ${props.alignSelf};`}
`

export const Image = (props:GeneralProps) => {

  const [
    shouldFallback,
    setShouldFallback
  ] = React.useState(true);

  const { fallback, onError, ...containerProps } = props;

  const fallbackHandler = (e:any ) => {

    if (shouldFallback) {
      setShouldFallback(false);
      e.target.src = fallback;
    }
  };

  const onErrorHandler = typeof onError === 'function'
    ? onError
    : (fallback?.length && fallbackHandler) || undefined;

  return (
    <Img
      {...containerProps}
      onError={onErrorHandler}/>
  );
};


Image.propTypes = {
  src: PropTypes.string.isRequired,
  flex: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  minWidth: PropTypes.string,
  minHeight: PropTypes.string,
  objectFit: PropTypes.string,
  onClick: PropTypes.func,
  onError: PropTypes.func,
  alignSelf: PropTypes.string,
  fallback: PropTypes.string,
};

Image.defaultProps = {
  src: undefined,
  flex: undefined,
  width: '5vh',
  height: '5vh',
  minWidth: undefined,
  minHeight: undefined,
  objectFit: undefined,
  onClick: undefined,
  onError: undefined,
  alignSelf: undefined,
  fallback: undefined,
};