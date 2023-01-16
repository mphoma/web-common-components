import
  styled
from 'styled-components';

import
  PropTypes
from 'prop-types';

import { ContainerProps } from './ContainerProps';

export const Base = styled.div<ContainerProps>`
  ${props => props.display && `display: ${props.display};`}
  ${props => props.boxSizing && `box-sizing: ${props.boxSizing};`}
  ${props => props.width && `width: ${props.width};`}
  ${props => props.height && `height: ${props.height};`}
  ${props => props.minHeight && `min-height: ${props.minHeight};`}
  ${props => props.minWidth && `min-width: ${props.minWidth};`}
  ${props => props.maxHeight && `max-height: ${props.maxHeight};`}
  ${props => props.maxWidth && `max-width: ${props.maxWidth};`}
  ${props => props.flex && `flex: ${props.flex};`}
  ${props => props.flexWrap && `flex-wrap: ${props.flexWrap};`}
  ${props => props.flexDirection && `flex-direction: ${props.flexDirection};`}
  ${props => props.padding && `padding: ${props.padding};`}
  ${props => props.margin && `margin: ${props.margin};`}
  ${props => props.backgroundImage && `background-image: ${props.backgroundImage};`}
  ${props => props.backgroundColor && `background-color: ${props.backgroundColor};`}
  ${props => props.background && `background: ${props.background};`}
  ${props => props.color && `color: ${props.color};`}
  ${props => props.border && `border: ${props.border};`}
  ${props => props.borderTop && `border-top: ${props.borderTop};`}
  ${props => props.borderBottom && `border-bottom: ${props.borderBottom};`}
  ${props => props.borderLeft && `border-left: ${props.borderLeft};`}
  ${props => props.borderRight && `border-right: ${props.borderRight};`}
  ${props => props.borderRadius && `border-radius: ${props.borderRadius};`}
  ${props => props.overflow && `overflow: ${props.overflow};`}
  ${props => props.boxShadow && `box-shadow: ${props.boxShadow};`}
  ${props => props.justifyContent && `justify-content: ${props.justifyContent};`}
  ${props => props.alignItems && `align-items: ${props.alignItems};`}
  ${props => props.alignContent && `align-content: ${props.alignContent};`}
  ${props => props.cursor && `cursor: ${props.cursor};`}
  ${props => props.transition && `transition: ${props.transition};`}
  ${props => props.transform && `transform: ${props.transform};`}
  ${props => props.outline && `outline: ${props.outline};`}
  ${props => props.position && `position: ${props.position};`}
  ${props => props.opacity && `opacity: ${props.opacity};`}
  ${props => props.top && `top: ${props.top};`}
  ${props => props.bottom && `bottom: ${props.bottom};`}
  ${props => props.left && `left: ${props.left};`}
  ${props => props.right && `right: ${props.right};`}
  ${props => props.float && `float: ${props.float};`}
  ${props => props.verticalAlign && `vertical-align: ${props.verticalAlign};`}
  ${props => props.alignmentBaseline && `alignment-baseline: ${props.alignmentBaseline};`}
  ${props => props.visibility && `visibility: ${props.visibility};`}
  ${props => props.zIndex && `z-index: ${props.zIndex};`}

  :hover {
    ${props => props.hoverWidth && `width: ${props.hoverWidth};`}
    ${props => props.hoverHeight && `height: ${props.hoverHeight};`}
    ${props => props.hoverFlex && `flex: ${props.hoverFlex};`}
    ${props => props.hoverFlexDirection && `flex-direction: ${props.hoverFlexDirection};`}
    ${props => props.hoverPadding && `padding: ${props.hoverPadding};`}
    ${props => props.hoverMargin && `margin: ${props.hoverMargin};`}
    ${props => props.hoverBackgroundImage && `background-image: ${props.hoverBackgroundImage};`}
    ${props => props.hoverBackgroundColor && `background-color: ${props.hoverBackgroundColor};`}
    ${props => props.hoverBackground && `background: ${props.hoverBackground};`}
    ${props => props.hoverColor && `color: ${props.hoverColor};`}
    ${props => props.hoverBorder && `border: ${props.hoverBorder};`}
    ${props => props.hoverBorderRadius && `border-radius: ${props.hoverBorderRadius};`}
    ${props => props.hoverOverflow && `overflow: ${props.hoverOverflow};`}
    ${props => props.hoverBoxShadow && `box-shadow: ${props.hoverBoxShadow};`}
    ${props => props.hoverJustifyContent && `justify-content: ${props.hoverJustifyContent};`}
    ${props => props.hoverAlignItems && `align-items: ${props.hoverAlignItems};`}
    ${props => props.hoverCursor && `cursor: ${props.hoverCursor};`}
    ${props => props.hoverTransform && `transform: ${props.hoverTransform};`}
  }
  `

  Base.propTypes = {
    display: PropTypes.string.isRequired,
    flex: PropTypes.string.isRequired,
    justifyContent: PropTypes.string.isRequired,
    margin: PropTypes.string.isRequired,
    alignItems: PropTypes.string.isRequired,
    padding: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    minHeight: PropTypes.string.isRequired,
    minWidth: PropTypes.string.isRequired,
    maxHeight: PropTypes.string.isRequired,
    maxWidth: PropTypes.string.isRequired,
    hoverBackgroundColor: PropTypes.string.isRequired,
    cursor:PropTypes.string.isRequired,
    borderRadius: PropTypes.string.isRequired,
    flexWrap: PropTypes.string.isRequired,
    flexDirection: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    border: PropTypes.string.isRequired,
    overflow: PropTypes.string.isRequired,
    boxShadow: PropTypes.string.isRequired,
    alignContent: PropTypes.string.isRequired,
    transition: PropTypes.string.isRequired,
    transform: PropTypes.string.isRequired,
    hoverWidth: PropTypes.string.isRequired,
    hoverHeight: PropTypes.string.isRequired,
    hoverFlex: PropTypes.string.isRequired,
    hoverFlexDirection: PropTypes.string.isRequired,
    hoverPadding: PropTypes.string.isRequired,
    hoverMargin: PropTypes.string.isRequired,
    hoverBackgroundImage: PropTypes.string.isRequired,
    hoverBackground: PropTypes.string.isRequired,
    hoverColor: PropTypes.string.isRequired,
    hoverBorder: PropTypes.string.isRequired,
    hoverBorderRadius: PropTypes.string.isRequired,
    hoverOverflow: PropTypes.string.isRequired,
    hoverBoxShadow: PropTypes.string.isRequired,
    hoverJustifyContent: PropTypes.string.isRequired,
    hoverAlignItems: PropTypes.string.isRequired,
    hoverCursor: PropTypes.string.isRequired,
    hoverTransform: PropTypes.string.isRequired,
    outline: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    opacity: PropTypes.string.isRequired,
    top: PropTypes.string.isRequired,
    bottom: PropTypes.string.isRequired,
    left: PropTypes.string.isRequired,
    right: PropTypes.string.isRequired,
    borderTop: PropTypes.string.isRequired,
    borderBottom: PropTypes.string.isRequired,
    borderLeft: PropTypes.string.isRequired,
    borderRight: PropTypes.string.isRequired,
    visibility: PropTypes.string.isRequired,
    zIndex: PropTypes.string.isRequired,
  }
  
  Base.defaultProps = {
    display: null,
    width: null,
    height: null,
    minHeight: null,
    minWidth: null,
    maxHeight: null,
    maxWidth: null,
    flex: null,
    flexWrap: null,
    flexDirection: null,
    padding: null,
    margin: null,
    backgroundImage: null,
    backgroundColor: null,
    background: null,
    color: null,
    border: null,
    borderRadius: null,
    overflow: null,
    boxShadow: null,
    justifyContent: null,
    alignItems: null,
    alignContent: null,
    cursor: null,
    transition: null,
    transform: null,
    hoverWidth: null,
    hoverHeight: null,
    hoverFlex: null,
    hoverFlexDirection: null,
    hoverPadding: null,
    hoverMargin: null,
    hoverBackgroundImage: null,
    hoverBackgroundColor: null,
    hoverBackground: null,
    hoverColor: null,
    hoverBorder: null,
    hoverBorderRadius: null,
    hoverOverflow: null,
    hoverBoxShadow: null,
    hoverJustifyContent: null,
    hoverAlignItems: null,
    hoverCursor: null,
    hoverTransform: null,
    outline: null,
    position: null,
    opacity: null,
    top: null,
    bottom: null,
    left: null,
    right: null,
    borderTop: null,
    borderBottom: null,
    borderLeft: null,
    borderRight: null,
    visibility: null,
    zIndex: null,
  }


  export const HContainer = styled(Base)`
  display: flex;
`;

export const HContainerV = styled(HContainer)`
  align-items: center;
`;

export const HContainerH = styled(HContainer)`
  justify-content: center;
`;

export const HContainerVH = styled(HContainer)`
  align-items: center;
  justify-content: center;
`;

export const HFillContainer = styled(HContainer)`
  flex: ${props => props.flex || '1 0 auto'};
`;

export const HFillContainerV = styled(HFillContainer)`
  align-items: center;
`;

export const HFillContainerH = styled(HFillContainer)`
  justify-content: center;
`;

export const HFillContainerVH = styled(HFillContainer)`
  align-items: center;
  justify-content: center;
`;

export const VContainer = styled(Base)`
  display: flex;
  flex-direction: column;
`;

export const VContainerV = styled(VContainer)`
  justify-content: center;
`;

export const VContainerH = styled(VContainer)`
  align-items: center;
`;

export const VContainerVH = styled(VContainer)`
  align-items: center;
  justify-content: center;
`;

export const VFillContainer = styled(VContainer)`
  flex: ${props => props.flex || '1 0 auto'};
`;

export const VFillContainerV = styled(VFillContainer)`
  justify-content: center;
`;

export const VFillContainerH = styled(VFillContainer)`
  align-items: center;
`;

export const VFillContainerVH = styled(VFillContainer)`
  align-items: center;
  justify-content: center;
`;