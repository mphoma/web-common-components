import React from 'react'
import PropTypes from 'prop-types'
import { ColorCodes, Images } from '../../common/constants'
import { Text } from '../text/Text'
import { ColorSvg } from '../general/ColorSvg'
import { VContainer } from '../container/Containers'
import { CardProps } from './CardProps'

export const ServiceCard = ( props : CardProps) => {
    return (
      <VContainer
        color={props.color}
        backgroundColor={props.backgroundColor}
        background={`url(${props.backgroundImageUrl}) center/100% 100% no-repeat`}
        width={props.width}
        height={props.height}
        boxSizing={props.boxSizing}
        padding={props.padding}
        margin={props.margin}
        alignItems={props.alignItems}
        justifyContent={props.justifyContent}
        borderRadius={props.borderRadius}
        onClick={props.onClick}>
  
        <ColorSvg
          src={props.iconUrl}
          color={props.color}
          width={props.iconWidth}
          height={props.iconHeight} />
  
        <Text
          textAlign={props.headingAlign}
          fontSize={props.headingSize}
          fontWeight={props.headingWeight}>
          {props.heading?.toUpperCase?.() || props.heading}
        </Text>
  
        <Text
          textAlign={props.bodyAlign}
          fontSize={props.bodySize}>
          {props.body}
        </Text>
  
      </VContainer>
    );
  
  };
  
  ServiceCard.propTypes = {
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    backgroundImageUrl: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    boxSizing: PropTypes.string,
    padding: PropTypes.string,
    margin: PropTypes.string,
    alignItems: PropTypes.string,
    justifyContent: PropTypes.string,
    borderRadius: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    iconUrl: PropTypes.string.isRequired,
    iconWidth: PropTypes.string,
    iconHeight: PropTypes.string,
    heading: PropTypes.string.isRequired,
    headingAlign: PropTypes.string,
    headingSize: PropTypes.string,
    headingWeight: PropTypes.string,
    body: PropTypes.string.isRequired,
    bodyAlign: PropTypes.string,
    bodySize: PropTypes.string
  };
  
  ServiceCard.defaultProps = {
    color: ColorCodes.White,
    backgroundColor: ColorCodes.Black,
    backgroundImageUrl: Images.Icons.BackArrow,
    width: '100%',
    height: '180px',
    boxSizing: 'border-box',
    padding: '60px 25px 25px 25px',
    margin: '0 20px',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    borderRadius: '4px',
    onClick: null,
    iconUrl: Images.Icons.BackArrow,
    iconWidth: '24px',
    iconHeight: '24px',
    heading: '',
    headingAlign: 'left',
    headingSize: '12px',
    headingWeight: 'bold',
    body: '',
    bodyAlign: 'left',
    bodySize: '16px'
  };