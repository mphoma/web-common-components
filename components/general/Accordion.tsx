import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import { ColorCodes, FormFactorTypes } from '../../common/constants';
import { withFormFactor } from '../../hocs/withFormFactor';
import { Base as BaseContainer, VContainer, HFillContainerV, VFillContainerVH } from '../container/Containers';
import { Spinner } from '../spinner/Spinner';
import { GeneralProps } from './GeneralProps';
import { ContainerProps } from '../container/ContainerProps';
import { Arrow } from './Arrow';

const Container = styled(VContainer)`
  ${props => props.border && `border: ${props.border};`}
  ${props => props.boxShadow && `box-shadow: ${props.boxShadow};`}
  ${props => (props.width && `width: ${props.width};`)}
  ${props => (props.flex && `flex: ${props.flex};`)}
  ${props => props.padding && `padding: ${props.padding};`}
`;

const Header = styled(HFillContainerV)<ContainerProps>`
  justify-content: space-between;
  cursor: pointer;

  ${props => props.color && `color: ${props.color};`}
  ${props => props.backgroundColor && `background-color: ${props.backgroundColor};`}
  ${props => props.border && `border: ${props.border};`}
  ${props => props.borderBottom && `border-bottom: ${props.borderBottom};`}
  ${props => props.padding && `padding: ${props.padding};`}

  ${props => props.headerHoverColor && `
    &:hover {
      color: ${props.headerHoverColor};
    }
  `}
`;

const VFillPaddedContainerVH = styled(VFillContainerVH)`
  padding: ${props => props.padding || '9vmin'};
`;

const ContentContainer = styled(VContainer)`
  padding: ${props => props.padding};
`;

const VAnimatedContainerDesktop = (props : GeneralProps) => {

  const contentContainerRef = React.useRef();

  return (

    <BaseContainer
      id={props.id}
      automationId={props.automationId}
      display={props.display}
      overflow={props.overflow}
      flex={props.flex}
      flexDirection={props.flexDirection}
      margin={props.margin}
      border={props.border}
      boxShadow={props.boxShadow}
      transition={props.panelTransition}
      width={props.width}
      height={props.isOpen && `${contentContainerRef.current && contentContainerRef.current.scrollHeight}px` || '0'}
      minHeight={props.minHeight}
      minWidth={props.minWidth}
      maxHeight={props.maxHeight}
      maxWidth={props.maxWidth}
      backgroundColor={props.backgroundColor}>

      <ContentContainer
        ref={contentContainerRef}
        padding={props.contentContainerPadding}>

        { props.children ||

          <VFillPaddedContainerVH
            padding={props.spinnerContainerPadding}>

            <Spinner
              size={props.spinnerSize}/>

          </VFillPaddedContainerVH>
        }

      </ContentContainer>

    </BaseContainer>
  );
};

VAnimatedContainerDesktop.propTypes = {
  ...Container.propTypes,
  id: PropTypes.string,
  automationId: PropTypes.string.isRequired,
  panelTransition: PropTypes.string,
  contentContainerPadding: PropTypes.string,
  spinnerContainerPadding: PropTypes.string,
  spinnerSize: PropTypes.string,
  isOpen: PropTypes.bool,
};

VAnimatedContainerDesktop.defaultProps = {
  ...Container.defaultProps,
  id: 'unknown-v-animated-container',
  automationId: 'unknown-v-animated-container',
  display: 'flex',
  overflow: 'hidden',
  flexDirection: 'column',
  backgroundColor: ColorCodes.White,
  width: '100%',
  panelTransition: 'height 0.5s linear',
  contentContainerPadding: '0',
  spinnerContainerPadding: '5vh',
  boxShadow: null,
  spinnerSize: '5vh',
  border: null,
  isOpen: false,
};

const VAnimatedContainer = withFormFactor({
  [FormFactorTypes.Default]: VAnimatedContainerDesktop
}, {
  formFactorProps: {
    [FormFactorTypes.Feature]: {
      panelTransition: null,
    },
  },
})as unknown as React.ElementType<GeneralProps>;

const AccordionDesktop = (props:GeneralProps) => {

  return (

    <Container
      id={props.id}
      automationId={props.automationId}
      border={props.border}
      boxShadow={props.boxShadow}
      width={props.width}
      height={props.height}
      minHeight={props.minHeight}
      minWidth={props.minWidth}
      maxHeight={props.maxHeight}
      maxWidth={props.maxWidth}
      flex={props.flex}
      padding={props.padding}
      margin={props.margin}>

        <Header
          onClick={props.onHeaderClick}
          color={props.headerColor}
          border={props.headerBorder}
          borderBottom={props.headerBorderBottom}
          backgroundColor={props.headerBackgroundColor}
          padding={props.headerPadding}>

            {props.headerComponent}

            <Arrow
              id={`${props.id}-arrow`}
              automationId={`${props.automationId}-arrow`}
              transition={props.arrowTransition}
              rotateX={props.isOpen && '180' || '0'}
              size={props.arrowSize}
              color={props.arrowColor}
              hoverColor={props.arrowHoverColor}/>

        </Header>

        <VAnimatedContainer
          id={`${props.id}-v-animated-container`}
          automationId={`${props.automationId}-v-animated-container`}
          isOpen={props.isOpen}
          width={'100%'}
          backgroundColor={props.dropDownBackgroundColor}
          panelTransition={props.dropDownTransition}
          contentContainerPadding={props.dropDownPadding}
          spinnerContainerPadding={props.dropDownSpinnerPadding}
          spinnerSize={props.dropDownSpinnerSize}>

            {props.children}

        </VAnimatedContainer>

    </Container>
  )
}

AccordionDesktop.propTypes = {
  id: PropTypes.string,
  automationId: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  padding: PropTypes.string,
  margin: PropTypes.string,
  border: PropTypes.string,
  boxShadow: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  minHeight: PropTypes.string,
  minWidth: PropTypes.string,
  maxHeight: PropTypes.string,
  maxWidth: PropTypes.string,
  flex: PropTypes.string,
  headerComponent: PropTypes.element,
  onHeaderClick: PropTypes.func,
  headerBorder: PropTypes.string,
  headerBorderBottom: PropTypes.string,
  headerColor: PropTypes.string,
  headerBackgroundColor: PropTypes.string,
  headerPadding: PropTypes.string,
  headerHoverColor: PropTypes.string,
  arrowTransition: PropTypes.string,
  arrowSize: PropTypes.string,
  arrowColor: PropTypes.string,
  dropDownBackgroundColor: PropTypes.string,
  dropDownTransition: PropTypes.string,
  dropDownPadding: PropTypes.string,
  dropDownSpinnerPadding: PropTypes.string,
  dropDownSpinnerSize: PropTypes.string,
}

AccordionDesktop.defaultProps = {
  id: 'unknown-accordion',
  automationId: 'unknown-accordion',
  isOpen: false,
  padding: null,
  margin: null,
  border: null,
  boxShadow: null,
  width: '100%',
  height: null,
  minHeight: null,
  minWidth: null,
  maxHeight: null,
  maxWidth: null,
  flex: null,
  headerComponent: null,
  onHeaderClick: () => {},
  headerBorder: null,
  headerBorderBottom: null,
  headerColor: null,
  headerBackgroundColor: null,
  headerPadding: null,
  headerHoverColor: null,
  arrowTransition: 'transform 0.3s linear',
  arrowSize: '5vmax',
  arrowColor: null,
  dropDownBackgroundColor: null,
  dropDownTransition: 'height 0.5s linear',
  dropDownPadding: null,
  dropDownSpinnerPadding: '5vh',
  dropDownSpinnerSize: '5vh'
}

export const Accordion = withFormFactor({
  [FormFactorTypes.Default]: AccordionDesktop
}, {
  formFactorProps: {
    [FormFactorTypes.Feature]: {
      dropDownTransition: null,
      arrowTransition: null,
    },
  },
});