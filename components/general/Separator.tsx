import React from 'react'
import styled from 'styled-components'
import { ColorCodes } from '../../common/constants'

interface SeparatorProps {
    width?: string,
    margin?: string,
    height?: string
}

export const HSeparator = styled.div<SeparatorProps>`
  height: 1px;
  width: ${props => props.width || '100%'};
  background-color: ${props => props.color || ColorCodes.Grey4};
  margin: ${props => props.margin || '0'};
`;

export const VSeparator = styled.div<SeparatorProps>`
  width: 1px;
  height: ${props => props.height || '100%'};
  background-color: ${props => props.color || ColorCodes.Grey4};
  margin: ${props => props.margin || '0'};
`;