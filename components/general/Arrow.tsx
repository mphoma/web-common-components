import React from 'react'
import styled from 'styled-components'
import
  PropTypes
from 'prop-types';
import { Images } from '../../common/constants';
import { Base } from '../container/Containers';
import { GeneralProps } from './GeneralProps';
import { ColorSvg } from './ColorSvg';
import { ContainerProps } from '../container/ContainerProps';

const ArrowContainer = styled(Base)<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${props => props.transition && `transition: ${props.transition};`}
  ${props => props.rotate && `transform: rotate(${props.rotate}deg);`}
  ${props => props.rotateX && `transform: rotateX(${props.rotateX}deg);`}
`;

export const Arrow = (props: GeneralProps) => (

    <ArrowContainer
      rotate={props.rotate}
      padding={props.padding}
      margin={props.margin}
      transition={props.transition}
      rotateX={props.rotateX}>
  
        {/* <ColorSvg
          id={props.id}
          automationId={props.automationId}
          src={Images.Icons.Chevron}
          height={props.size}
          width={props.size}
          minHeight={props.minHeight}
          minWidth={props.minWidth}
          maxHeight={props.maxHeight}
          maxWidth={props.maxWidth}
          onClick={props.onClick}
          color={props.color}
          hoverColor={props.hoverColor}/> */}
  
    </ArrowContainer>
  );
  
  Arrow.propTypes = {
    ...Base.propTypes,
    id: PropTypes.string,
    automationId: PropTypes.string,
    rotate: PropTypes.string,
    size: PropTypes.string,
    onClick: PropTypes.func,
    rotateX: PropTypes.string,
    transition: PropTypes.string,
  };
  
  Arrow.defaultProps = {
    ...Base.defaultProps,
    id: 'unknown-arrow',
    automationId: 'unknown-arrow',
    rotate: '0',
    size: '1.5vmin',
    padding: '0',
    onClick: null,
    rotateX: null,
    transition: null,
    color: null,
    hoverColor: null,
  };
  
  export const UpArrow = (props: GeneralProps) => (
  
    <Arrow
      {...props}
      rotate={'180'}/>
  );
  
  UpArrow.propTypes = {
    ...Arrow.propTypes,
  };
  
  UpArrow.defaultProps = {
    ...Arrow.defaultProps,
  };
  
  export const RightArrow = (props : GeneralProps) => (
  
    <Arrow
      {...props}
      rotate={'-90'}
    />
  );
  
  RightArrow.propTypes = {
    ...Arrow.propTypes,
  };
  
  RightArrow.defaultProps = {
    ...Arrow.defaultProps,
  };
  
  export const DownArrow = (props : GeneralProps) => (
    <Arrow {...props}/>
  );
  
  DownArrow.propTypes = {
    ...Arrow.propTypes,
  };
  
  DownArrow.defaultProps = {
    ...Arrow.defaultProps,
  };
  
  export const LeftArrow = (props : GeneralProps) => (
  
    <Arrow
      {...props}
      rotate={'90'}/>
  );
  
  LeftArrow.propTypes = {
    ...Arrow.propTypes,
  };
  
  LeftArrow.defaultProps = {
    ...Arrow.defaultProps,
  };