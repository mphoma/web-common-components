import React from 'react'
import { FontFamilies, FormFactorTypes } from '../common/constants'
import { withFormFactor } from '../hocs/withFormFactor'
import { Text } from './Text'
import { TextProps } from './TextProps'

const smallPrint = (props: TextProps) => (
  <Text fontFamily={FontFamilies.Regular} fontSize='14px' lineHeight='20px' letterSpacing='0.5px' {...props}>
    {props.text}
    {props.children}
  </Text>
)

export const SmallPrint = withFormFactor<TextProps>(
  {
    [FormFactorTypes.Default]: smallPrint,
  },
  {
    formFactorProps: {
      [FormFactorTypes.Mobi]: {
        fontSize: '14px',
        lineHeight: '16px',
      },
      [FormFactorTypes.Feature]: {
        fontSize: '12px',
        lineHeight: '14px',
        letterSpacing: '0px',
      },
    },
  },
) as React.ElementType<TextProps>
