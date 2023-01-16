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
import { BodyText
 } from '../text/BodyText'

    const Container = styled(HContainer)`
  ${props => props.padding && `padding: ${props.padding};`}
  ${props => props.height && `height: ${props.height};`}
`;

const BackgroundBar = styled(HFillContainer)`
  overflow: hidden;
  background-color: ${props => props.backgroundColor || ColorCodes.Grey5};

  ${props => props.height && `height: 100%;`}
  ${props => props.borderRadius && `border-radius: ${props.borderRadius};`}
`;

const FillBar = styled(HContainerV)`
  justify-content: flex-end;
  width: ${props => `${props.width}%` || '50%'};
  background-color: ${props => props.backgroundColor || ColorCodes.Red1};

  ${props => props.height && `height: 100%;`}
  ${props => props.borderRadius && `border-radius: ${props.borderRadius};`}
  ${props => props.transition && `transition: ${props.transition};`}
`;

const Label = styled(HContainer)`
  ${props => props.padding && `padding: ${props.padding};`}
`;

const ProgressBarDesktop = (props : GeneralProps) => {

  const newFillWidth = Math.round(((props.now - props.min) / (props.max - props.min)) * 100);

  return (

    <Container
      id={props.id}
      automationId={props.automationId}
      height={props.height}
      width={props.width}
      minHeight={props.minHeight}
      minWidth={props.minWidth}
      maxHeight={props.maxHeight}
      maxWidth={props.maxWidth}
      padding={props.padding}
      margin={props.margin}>

        <BackgroundBar
          backgroundColor={props.backgroundColor}
          borderRadius={props.borderRadius}
          height={props.height}>

            <FillBar
              width={newFillWidth}
              backgroundColor={props.fillColor}
              transition={props.fillTransition}
              borderRadius={props.borderRadius}
              height={props.height}>

                { props.hasLabel &&

                  <Label
                    padding={props.labelPadding}>

                      <BodyText
                        text={props.text || `${newFillWidth}%`}
                        color={props.textColor || ColorCodes.White}/>

                  </Label>
                }

            </FillBar>

        </BackgroundBar>

    </Container>
  );
};

ProgressBarDesktop.propTypes = {
  id: PropTypes.string.isRequired,
  automationId: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  now: PropTypes.number.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
  minHeight: PropTypes.string,
  minWidth: PropTypes.string,
  maxHeight: PropTypes.string,
  maxWidth: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  borderRadius: PropTypes.string,
  backgroundColor: PropTypes.string,
  fillColor: PropTypes.string,
  fillTransition: PropTypes.string,
  text: PropTypes.string,
  textColor: PropTypes.string,
  labelPadding: PropTypes.string,
  hasLabel: PropTypes.bool,
};

ProgressBarDesktop.defaultProps = {
  id: 'unknown-progressbar',
  automationId: 'unknown-progressbar',
  min: 0,
  max: 100,
  now: 0,
  height: null,
  width: null,
  minHeight: null,
  minWidth: null,
  maxHeight: null,
  maxWidth: null,
  margin: null,
  padding: null,
  borderRadius: null,
  backgroundColor: ColorCodes.Grey5,
  fillColor: ColorCodes.Red1,
  fillTransition: '0.2s',
  text: null,
  textColor: ColorCodes.White,
  labelPadding: '0 2vw 0 0',
  hasLabel: true,
};

export const ProgressBar = withFormFactor({
  [FormFactorTypes.Default]: ProgressBarDesktop
}, {
  formFactorProps: {
    [FormFactorTypes.Feature]: {
      fillTransition: null,
    },
  },
})as React.ElementType<GeneralProps>;