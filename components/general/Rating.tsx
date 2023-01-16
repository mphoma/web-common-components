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

    export const Rating = (props : GeneralProps) => {

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