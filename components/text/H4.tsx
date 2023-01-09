import React from 'react'
import { FontFamilies, FormFactorTypes } from '../../common/constants'
import { withFormFactor } from '../../hocs/withFormFactor'
import { Text } from './Text'
import { TextProps } from './TextProps'

const h4Bold = (props: TextProps) => (
  <Text
    as='h4'
    margin='0'
    fontWeight='normal'
    fontFamily={FontFamilies.VodafoneBoldEot}
    fontSize='20px'
    lineHeight='26px'
    letterSpacing='1px'
    {...props}
  >
    {props.text}
    {props.children}
  </Text>
)

export const H4 = withFormFactor<TextProps>(
  {
    [FormFactorTypes.Default]: h4Bold,
  },
  {
    formFactorProps: {
      [FormFactorTypes.Mobi]: {
        fontSize: '18px',
        lineHeight: '20px',
        letterSpacing: '0.5px',
      },
      [FormFactorTypes.Feature]: {
        fontSize: '15px',
        lineHeight: '15px',
        letterSpacing: '0px',
      },
    },
  },
) as React.ElementType<TextProps>

const h4Regular = (props: TextProps) => (
  <Text
    as='h4'
    margin='0'
    fontWeight='normal'
    fontFamily={FontFamilies.VodafoneRegularEot}
    fontSize='20px'
    lineHeight='26px'
    letterSpacing='1px'
    {...props}
  >
    {props.text}
    {props.children}
  </Text>
)
export const H4Regular = withFormFactor<TextProps>(
  {
    [FormFactorTypes.Default]: h4Regular,
  },
  {
    formFactorProps: {
      [FormFactorTypes.Mobi]: {
        fontSize: '18px',
        lineHeight: '20px',
        letterSpacing: '0.5px',
      },
      [FormFactorTypes.Feature]: {
        fontSize: '15px',
        lineHeight: '15px',
        letterSpacing: '0px',
      },
    },
  },
) as React.ElementType<TextProps>

const h4Light = (props: TextProps) => (
  <Text
    as='h4'
    margin='0'
    fontWeight='normal'
    fontFamily={FontFamilies.VodafoneLightEot}
    fontSize='20px'
    lineHeight='26px'
    letterSpacing='1px'
    {...props}
  >
    {props.text}
    {props.children}
  </Text>
)
export const H4Light = withFormFactor<TextProps>(
  {
    [FormFactorTypes.Default]: h4Light,
  },
  {
    formFactorProps: {
      [FormFactorTypes.Mobi]: {
        fontSize: '18px',
        lineHeight: '20px',
        letterSpacing: '0.5px',
      },
      [FormFactorTypes.Feature]: {
        fontSize: '15px',
        lineHeight: '15px',
        letterSpacing: '0px',
      },
    },
  },
) as React.ElementType<TextProps>
