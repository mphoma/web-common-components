import React from 'react'
import styled from 'styled-components'
import { ColorCodes } from '../../common/constants'
import PropTypes from 'prop-types'
import { Text } from '../text/Text'
import { Image } from '../general/Image'
import Button from '../button/Button'
import { VContainer, VFillContainerH } from '../container/Containers'
import { CardProps } from './CardProps'

const CardStyled = styled(VContainer)<CardProps>`
  text-align: ${props => props.textAlign};
  border-radius: ${props => props.borderRadius};
  border: ${props => props.border};
  margin: ${props => props.cardMargin};
  padding: ${props => props.cardPadding};
  display: ${props => props.display};
  flex-grow: ${props => props.flexGrow};
  width: ${props => props.cardWidth};
`;

const SubtitleStyled = styled(Text)<CardProps>`
  margin: ${props => props.subtitleMargin};
`;

const TitleStyled = styled(Text)<CardProps>`
  margin: ${props => props.titleMargin};
  font-weight: ${props => props.titleWeight};
  font-size: ${props => props.titleSize};
`;

const TextStyled = styled(Text)<CardProps>`
  margin: ${props => props.textMargin};
`;

export const TileCard = ( props:CardProps ) => {

  return (

    <CardStyled
      textAlign={props.textAlign}
      borderRadius={props.borderRadius}
      border={props.border}
      cardMargin={props.cardMargin}
      cardPadding={props.cardPadding}
      display={props.display}
      flex={props.flex}
      cardWidth={props.cardWidth}>

      <Image
        src={props.image}
        // alt={'...'}
        width={props.imageWidth}
        height={props.imageHeight}
        objectFit={props.imageObjectFit}/>

      <VContainer>

        <SubtitleStyled
          subtitleMargin={props.subtitleMargin}>

          {props.subtitle}
        </SubtitleStyled>

        <TitleStyled
          titleMargin={props.titleMargin}
          titleWeight={props.titleWeight}
          titleSize={props.titleSize}>

          {props.title}
        </TitleStyled>

        {
          !props.isTextHTML
            ? <TextStyled
                textMargin={props.textMargin}>

                {props.text}
              </TextStyled>
            : <TextStyled
                textMargin={props.textMargin}
                // dangerouslySetInnerHTML={{
                //   __html: props.text
                // }}
                 />
        }
      </VContainer>

      {props.children}

      { props.buttonText &&

        <VFillContainerH
          justifyContent={'flex-end'}>

          <Button
            id={props.buttonId}
            automationId={props.buttonAutomationId}
            activeBackgroundColor={props.activeBackgroundColor}
            activeBorderColor={props.activeBorderColor}
            activeColor={props.activeColor}
            height={props.buttonHeight}
            minWidth={props.buttonMinWidth}
            fontSize={props.buttonFontSize}
            margin={props.buttonMargin}
            onClick={props.onClick}
            border={props.buttonBorder}
            activeOpacity={props.buttonActiveOpacity}>

            <Text
              fontSize={props.buttonFontSize}
              fontWeight={props.buttonFontWeight}
              fontFamily={props.buttonFontFamily}>

              {props.buttonText}
            </Text>
          </Button>
        </VFillContainerH>
      }

    </CardStyled>
  );
};

TileCard.propTypes = {
  textAlign: PropTypes.string,
  borderRadius: PropTypes.string,
  border: PropTypes.string,
  cardMargin: PropTypes.string,
  cardPadding: PropTypes.string,
  cardWidth: PropTypes.string,
  display: PropTypes.string,
  flex: PropTypes.string,
  subtitle: PropTypes.string.isRequired,
  subtitleMargin: PropTypes.string,
  title: PropTypes.string.isRequired,
  titleMargin: PropTypes.string,
  titleWeight: PropTypes.string,
  titleSize: PropTypes.string,
  image: PropTypes.string.isRequired,
  imageWidth: PropTypes.string,
  imageHeight: PropTypes.string,
  imageObjectFit: PropTypes.string,
  text: PropTypes.string,
  textMargin: PropTypes.string,
  isTextHTML: PropTypes.bool,
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  activeBackgroundColor: PropTypes.string,
  activeBorderColor: PropTypes.string,
  activeColor: PropTypes.string,
  buttonId: PropTypes.string,
  buttonAutomationId: PropTypes.string,
  buttonHeight: PropTypes.string,
  buttonMinWidth: PropTypes.string,
  buttonFontSize: PropTypes.string,
  buttonFontWeight: PropTypes.string,
  buttonFontFamily: PropTypes.string,
  buttonMargin: PropTypes.string,
  buttonBorder: PropTypes.string,
  buttonActiveOpacity: PropTypes.string
};

TileCard.defaultProps = {
  textAlign: 'left',
  borderRadius: '4px',
  border: `solid 0.6px ${ColorCodes.Grey5}`,
  cardMargin: '0 0 16px',
  cardPadding: '0 0 25px',
  display: 'flex',
  flex: '1 0 auto',
  cardWidth: '100%',
  subtitle: '',
  subtitleMargin: '0.5em 0 0 1em',
  title: '',
  titleMargin: '0.5em 1em 0 0.8em',
  titleWeight: 'bold',
  titleSize: '20px',
  image: null,
  imageWidth: '100%',
  imageHeight: 'auto',
  imageObjectFit: 'fill',
  text: '',
  textMargin: '1em 1em 0 1em',
  isTextHTML: false,
  buttonText: '',
  onClick: null,
  activeBackgroundColor: ColorCodes.White,
  activeBorderColor: ColorCodes.Grey9,
  activeColor: ColorCodes.Grey9,
  buttonId: 'unknown-button',
  buttonAutomationId: 'unknown-button',
  buttonHeight: '50px',
  buttonMinWidth: '200px',
  buttonFontSize: '16px',
  buttonFontWeight: 'bold',
  buttonFontFamily: 'Roboto',
  buttonMargin: '1.5rem 1rem 0',
  buttonBorder: '1px solid',
  buttonActiveOpacity: null
};