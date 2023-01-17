import React  from 'react'
import PropTypes from 'prop-types'
import { ColorSvg } from './ColorSvg'
import { ColorCodes, Images } from '../../common/constants'
import { GeneralProps } from './GeneralProps'


    export const Rating = (props : GeneralProps) : JSX.Element[] => {

        if (props.maxRating < props.rating) {
          return [];
        }
      
        const stars = [];
      
        for (let i = 0; i < props.maxRating; i++) {
      
          stars.push(
      
            <ColorSvg
              key={`${props.id}-${i}`}
              id={`${props.id}-${i}`}
              automationId={`${props.automationId}-${i}`}
              height={props.starSize}
              width={props.starSize}
              src={i < props.rating ? Images.Icons.Star : Images.Icons.StarOutline}
              color={props.starColor}
              padding={i < props.maxRating - 1 && props.padding || null}/>
          );
        }
      
        return stars;
      };
      
      Rating.propTypes = {
        id: PropTypes.string,
        automationId: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        maxRating: PropTypes.number,
        starSize: PropTypes.string,
        starColor: PropTypes.string,
        padding: PropTypes.string,
      };
      
      Rating.defaultProps = {
        id: 'unknown-rating',
        automationId: 'unknown-rating',
        rating: 0,
        maxRating: 5,
        starSize: '2vh',
        starColor: ColorCodes.Yellow1,
        padding: '0 0.5vw 0 0',
      };