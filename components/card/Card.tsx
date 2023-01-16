import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { ColorCodes } from '../../common/constants'
import { Base as Container } from '../container/Containers'
import { CardProps } from './CardProps'

const CardContainer = styled.div<CardProps>`
  box-sizing: border-box;
  background-color: ${props => props.backgroundColor || ColorCodes.White};
  display: ${props => props.display || 'flex'};
  position: relative;
  outline: none;
  flex-direction: ${props => props.flexDirection || 'column'};
  padding: ${props => props.padding || '0.5vmin'};
  border-radius: ${props => props.borderRadius || '4px'};

  ${props => props.flex && `flex: ${props.flex};`}
  ${props => props.justifyContent && `justify-content: ${props.justifyContent};`}
  ${props => props.alignItems && `align-items: ${props.alignItems};`}
  ${props => props.overflow && `overflow: ${props.overflow};`}
  ${props => props.width && `width: ${props.width};`}
  ${props => props.height && `height: ${props.height};`}
  ${props => props.minHeight && `min-height: ${props.minHeight};`}
  ${props => props.minWidth && `min-width: ${props.minWidth};`}
  ${props => props.maxHeight && `max-height: ${props.maxHeight};`}
  ${props => props.maxWidth && `max-width: ${props.maxWidth};`}
  ${props => props.border && `border: ${props.border};`}
  ${props => props.boxShadow && `box-shadow: ${props.boxShadow};`}
  ${props => props.color && `color: ${props.color};`}

  :hover {
    ${props => props.hoverBorder && `border: ${props.hoverBorder};`}
    ${props => props.hoverBoxShadow && `box-shadow: ${props.hoverBoxShadow};`}
    ${props => props.hoverColor && `color: ${props.hoverColor};`}
  }

  :focus {
    ${props => props.focusBorder && `border: ${props.focusBorder};`}
    ${props => props.focusBoxShadow && `box-shadow: ${props.focusBoxShadow};`}
    ${props => props.focusColor && `color: ${props.focusColor};`}
  }

  :active {
    ${props => props.activeOpacity && `opacity: ${props.activeOpacity};`}
    ${props => props.activeBoxShadow && `box-shadow: ${props.activeBoxShadow};`}
  }
`;

export const Card = (props: CardProps) => {

  const CardContainerRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {

    if (CardContainerRef.current) {
      CardContainerRef.current.focus();
    }
  }, []);

  const [
    state,
    setState,
  ] = React.useState({
    isFocused: false,
  });

  const setFocus = (isFocused : any) => {

    setState(prevState => ({
      ...prevState,
      isFocused,
    }));
  };

  const onClick = () => {

    if (!props.isEnabled && !props.onClick) {
      return;
    }

    // props.onClick(props.onClickArgs);

    // Card.insights.tag({
    //   event: `click:${props.name||props.id}`,
    // });
  };

  return (

    <Container
      display={props.display}
      height={props.containerHeight}
      width={props.containerWidth}
      boxSizing={'border-box'}
      flex={props.flex}
      padding={props.margin}
      cursor={props.onClick && 'pointer'}>

        <CardContainer
          id={props.id}
          display={props.cardDisplay}
          automationId={props.automationId}
          ref={CardContainerRef}
          padding={props.padding}
          overflow={props.overflow}
          backgroundColor={props.backgroundColor}
          flex={props.flex}
          justifyContent={props.justifyContent}
          alignItems={props.alignItems}
          flexDirection={props.flexDirection}
          width={props.width}
          height={props.height}
          maxWidth={props.maxWidth}
          minWidth={props.minWidth}
          maxHeight={props.maxHeight}
          minHeight={props.minHeight}
          border={props.border}
          hoverBorder={props.hoverBorder}
          focusBorder={props.focusBorder}
          boxShadow={props.boxShadow}
          hoverBoxShadow={props.hoverBoxShadow}
          focusBoxShadow={props.focusBoxShadow}
          activeBoxShadow={props.activeBoxShadow}
          color={props.color}
          hoverColor={props.hoverColor}
          focusColor={props.focusColor}
          activeOpacity={props.activeOpacity}
          borderRadius={props.borderRadius}
          tabIndex={props.tabIndex}
          role={props.role}
          onClick={onClick}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          >
          {props.children}

        </CardContainer>

    </Container>
  );
};

Card.propTypes = {
  ...Container.propTypes,
  automationId: PropTypes.string.isRequired,
  name: PropTypes.string,
  isEnabled: PropTypes.bool,
  boxShadow: PropTypes.string,
  hoverBoxShadow: PropTypes.string,
  focusBoxShadow: PropTypes.string,
  activeOpacity: PropTypes.string,
  activeBoxShadow: PropTypes.string,
  border: PropTypes.string,
  hoverBorder: PropTypes.string,
  focusBorder: PropTypes.string,
  borderRadius: PropTypes.string,
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  focusColor: PropTypes.string,
  onClick: PropTypes.func,
  onClickArgs: PropTypes.any,
  tabIndex: PropTypes.string,
  role: PropTypes.string,
  autoFocus: PropTypes.bool,
  containerHeight: PropTypes.string,
  containerWidth: PropTypes.string,
  cardDisplay: PropTypes.string,
};

Card.defaultProps = {
  ...Container.defaultProps,
  id: 'unknown-card',
  automationId: 'unknown-card',
  name: null,
  display: 'flex',
  flex: null,
  justifyContent: null,
  alignItems: null,
  flexDirection: null,
  width: null,
  height: null,
  overflow: null,
  backgroundColor: ColorCodes.White,
  padding: '0.5vmin',
  margin: '0.5vmin',
  isEnabled: false,
  boxShadow: '0 5px 15px 0 rgba(0, 0, 0, 0.15)',
  hoverBoxShadow: null,
  focusBoxShadow: null,
  activeOpacity: null,
  activeBoxShadow: null,
  border: '1px solid transparent',
  hoverBorder: null,
  focusBorder: `1px solid ${ColorCodes.Red1}`,
  borderRadius: '4px',
  color: null,
  hoverColor: null,
  focusColor: null,
  onClick: null,
  onClickArgs: null,
  tabIndex: null,
  role: null,
  autoFocus: false,
  containerHeight: null,
  containerWidth: null,
  cardDisplay: 'flex',
};

// Card.insights = Insights.with();