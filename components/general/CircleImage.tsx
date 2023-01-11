import React from 'react'
import styled from 'styled-components'
import { ColorCodes } from '../../common/constants'

interface CircleImageProps {
    imageUrl?: string,
    imageWidth?: string,
    imageHeight?: string,
    backgroundColor?: string,
    height?: string,
    width?: string,
}

export const CircleImage = styled.div<CircleImageProps>`
  background-image: url(${props => props.imageUrl});
  background-repeat: no-repeat;
  background-size: 
      ${props => props.imageWidth || '10vh'}
      ${props => props.imageHeight || '10vh'};
  background-color: ${props => props.backgroundColor || transparent(ColorCodes.Grey5, 0.6)};
  background-position: center;
  border-radius: 50%;
  height: ${props => props.height || props.width || '20vh'};
  width: ${props => props.width || props.height || '20vh'};
`;
