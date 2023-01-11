import React from 'react'
import styled from 'styled-components'
import PropTypes  from 'prop-types'
import TextButton from '../button/TextButton'
import { ColorCodes, Images,FontSizes } from '../../common/constants'
import { VFillContainer, HContainerV } from '../container/Containers'
import { Image } from '../general/Image'
import { BodyText } from '../text/BodyText'
import { NotificationProps } from './NotificationProps'

const Container = styled(HContainerV)`
  display: flex;
  padding: ${props => props.padding || '0 6.9vw'};
  min-height: ${props => props.height || '6.6vh'};
  background-color: ${props => props.backgroundColor || ColorCodes.Blue2};
`;

const IconImage = styled(Image)`
  min-height: 30px;
  min-width: 30px;
  width: 3.3vmin;
  height: 3.3vmin;
`;

const CloseImage = styled(Image)`
  min-height: 30px;
  min-width: 30px;
  width: 1.5vmin;
  height: 1.5vmin;
`;


export const Banner = (props:NotificationProps) => {

  const parseText = (text:NotificationProps) => {

    let textLines : string[] = []
    const TextComponent = (props.textLine || BodyText) as React.ElementType

    if (typeof text !== 'string') {

      return textLines;
    }

    let i = 0;

    for (const line of text.split('\n')) {

      textLines.push(
       <TextComponent
          key={`banner-line-${i++}`}
          color={props.color}
          fontSize={props.fontSize}
          text={line}/>
      );
    }

    return <React.Fragment>{textLines}</React.Fragment>;
  };

  const textLines = parseText(props.text);

  return (

    <Container
      id={props.id}
    //   automationId={props.automationId}
      height={props.height}
      width={props.width}
      flex={props.flex}
      padding={props.padding}
      margin={props.margin}
      minHeight={props.minHeight}
      minWidth={props.minWidth}
      maxHeight={props.maxHeight}
      maxWidth={props.maxWidth}
      backgroundColor={props.backgroundColor}>

        <IconImage
          src={props.imageUrl}
          />

        <VFillContainer
          padding={'1vh 1.59vw'}>

          {textLines}
        </VFillContainer>

        { props.onCloseClick &&

          <React.Fragment>

           { props.closeImageUrl &&

              <CloseImage
                id={`${props.id}-button`}
                automationId={`${props.automationId}-button`}
                src={props.closeImageUrl}
                onClick={props.onCloseClick}/>
            }

            { !props.closeImageUrl &&

              <TextButton
                id={`${props.id}-button`}
                automationId={`${props.automationId}-button`}
                activeColor={props.color}
                activeBackgroundColor={props.backgroundColor}
                text={props.closeText}
                fontSize={props.fontSize}
                onClick={props.onCloseClick}/>
            }

          </React.Fragment>
        }

    </Container>
  )
};

Banner.propTypes = {
  id: PropTypes.string,
  automationId: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  width: PropTypes.string,
  flex: PropTypes.string,
  margin: PropTypes.string,
  minHeight: PropTypes.string,
  minWidth: PropTypes.string,
  maxHeight: PropTypes.string,
  maxWidth: PropTypes.string,
  padding: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  onCloseClick: PropTypes.func,
  closeImageUrl: PropTypes.string,
  closeText: PropTypes.string,
};

Banner.defaultProps = {
  id: 'unknown-banner',
  automationId: 'unknown-banner',
  backgroundColor: ColorCodes.Blue2,
  imageUrl: Images.Icons.Info,
  text: '',
  width: null,
  flex: null,
  margin: null,
  minHeight: null,
  minWidth: null,
  maxHeight: null,
  maxWidth: null,
  color: ColorCodes.White,
  padding: '0 6.9vw',
  height: '6.6vh',
  fontSize: FontSizes.Small,
  onCloseClick: null,
  closeImageUrl: null,
  closeText: 'DISMISS',
};
