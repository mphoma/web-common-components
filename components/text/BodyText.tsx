import React from 'react'
import { FontFamilies, FormFactorTypes } from '../../common/constants'
import { withFormFactor } from '../../hocs/withFormFactor'
import { Text } from './Text'
import { TextProps } from './TextProps'

const bodyText = (props: TextProps) => (
  <Text fontFamily={FontFamilies.VodafoneRegularEot} fontSize={'16px'} lineHeight={'22px'} letterSpacing={'0.5px'} {...props}>
    {props.text}
    {props.children}
  </Text>
)

export const BodyText = withFormFactor<TextProps>(
  {
    [FormFactorTypes.Default]: bodyText,
  },
  {
    formFactorProps: {
      [FormFactorTypes.Mobi]: {
        fontSize: '14px',
        lineHeight: '16px',
      },
      [FormFactorTypes.Feature]: {
        fontSize: '14px',
        lineHeight: '14px',
        letterSpacing: '0px',
      },
    },
  },
) as React.ElementType<TextProps>
