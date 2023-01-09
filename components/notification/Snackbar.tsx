import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { ColorCodes, Images } from '../../common/constants'
import { HContainer, HFillContainerV, VFillContainer, } from '../container/Containers'
import { Image } from '../general/Image'
import { BodyText } from '../text/BodyText'
import { H5 } from '../text/H5'
import { NotificationProps } from './NotificationProps'

const Container = styled(HContainer)<NotificationProps>`
  display: flex;

  position: ${props => props.position || 'absolute'};
  ${props => props.left && `left: ${props.left}`};
  ${props => props.top && `top: ${props.top}`};
  ${props => props.right && `right: ${props.right}`};
  ${props => props.bottom && `bottom: ${props.bottom}`};

  box-sizing: border-box;
  pointer-events: none;
  padding: ${props => props.padding || '0 0 4.44vh 2.77vw'};
  min-width: ${props => props.minWidth || '23.95vw'};
  min-height: 58px;
  ${props => props.width && `width: ${props.width};`}
`;

const SnackbarContainer = styled(HFillContainerV)<NotificationProps>`
  pointer-events: auto;
  padding: ${props => props.snackbarPadding || '2.22vh 1.38vw'};
  background-color: ${props => props.backgroundColor || ColorCodes.Green2};
  border-radius: 4px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.15);
`;

const CloseImage = styled(Image)<NotificationProps>`
  min-height: 30px;
  min-width: 30px;
  width: 1.5vmin;
  height: 1.5vmin;
  padding-left: 2.22vh;
`;

export const Snackbar = (props: NotificationProps) => {

  const parseText = (text:string) => {

    let textLines: string[] = [];

    if (typeof text !== 'string') {

      return textLines;
    }

    let i = 0;

    for (const line of text.split('\n')) {

      textLines.push(

        // <BodyText
        //   key={`snackbar-line-${i++}`}
        //   color={props.color}
        //   text={line}/> 
      );
    }

    return textLines;
  };

  const textLines = parseText(props.text!);

  return (

    <Container
      id={props.id}
      automationId={props.automationId}
      position={props.position}
      left={props.left}
      top={props.top}
      right={props.right}
      bottom={props.bottom}
      align={props.align}
      padding={props.padding}
      margin={props.margin}
      minWidth={props.minWidth}
      maxWidth={props.maxWidth}
      minHeight={props.minHeight}
      maxHeight={props.maxHeight}
      width={props.width}
      height={props.height}>

      <SnackbarContainer
        backgroundColor={props.backgroundColor}
        snackbarPadding={props.snackbarPadding}>

        <VFillContainer>

          { props.heading &&

            <H5
              padding={'0 0 1vh 0'}
              color={props.color}
              text={props.heading}/>
          }

          {textLines}

        </VFillContainer>

        { props.onCloseClick &&

          <CloseImage
            id={`${props.id}-button`}
            automationId={`${props.automationId}-button`}
            src={Images.Icons.CloseWhite}
            onClick={props.onCloseClick}/>
        }

      </SnackbarContainer>

    </Container>
  );
};

Snackbar.propTypes = {
  id: PropTypes.string,
  automationId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  position: PropTypes.string,
  left: PropTypes.string,
  top: PropTypes.string,
  right: PropTypes.string,
  bottom: PropTypes.string,
  backgroundColor: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  minWidth: PropTypes.string,
  maxWidth: PropTypes.string,
  minHeight: PropTypes.string,
  maxHeight: PropTypes.string,
  height: PropTypes.string,
  snackbarPadding: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.string,
  heading: PropTypes.string,
  onCloseClick: PropTypes.func,
};

Snackbar.defaultProps = {
  id: 'unknown-snackbar',
  automationId: 'unknown-snackbar',
  text: 'Unfortunately we are having problems with this functionality at the moment.',
  position: 'absolute',
  left: undefined,
  top: undefined,
  right: '0',
  bottom: '0',
  backgroundColor: ColorCodes.Green3,
  padding: '0 0 4.44vh 2.77vw',
  margin: null,
  minWidth: '23.95vw',
  maxWidth: null,
  minHeight: null,
  maxHeight: null,
  height: null,
  snackbarPadding: '2.22vh 1.38vw',
  color: ColorCodes.White,
  width: null,
  heading: null,
  onCloseClick: null,
};
