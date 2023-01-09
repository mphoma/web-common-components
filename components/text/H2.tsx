import React from 'react'
import { FontFamilies, FormFactorTypes } from '../../common/constants'
import { withFormFactor } from '../../hocs/withFormFactor'
import { Text } from './Text'
import { TextProps } from './TextProps'

const h2 = (props: TextProps) => (
  <Text
    as='h2'
    margin='0'
    fontWeight='normal'
    fontFamily={FontFamilies.VodafoneBoldEot}
    fontSize='28px'
    lineHeight='34px'
    letterSpacing='1.5px'
    {...props}
  >
    {props.text}
    {props.children}
  </Text>
)

export const H2 = withFormFactor<TextProps>(
  {
    [FormFactorTypes.Default]: h2,
  },
  {
    formFactorProps: {
      [FormFactorTypes.Mobi]: {
        fontSize: '22px',
        lineHeight: '24px',
        letterSpacing: '0.5px',
      },
      [FormFactorTypes.Feature]: {
        fontSize: '20px',
        lineHeight: '22px',
        letterSpacing: '0px',
      },
    },
  },
) as React.ElementType<TextProps>

const h2Regular = (props: TextProps) => (
  <Text
    as='h2'
    margin='0'
    fontWeight='normal'
    fontFamily={FontFamilies.VodafoneRegularEot}
    fontSize='28px'
    lineHeight='34px'
    letterSpacing='1.5px'
    {...props}
  >
    {props.text}
    {props.children}
  </Text>
)

export const H2Regular = withFormFactor<TextProps>(
  {
    [FormFactorTypes.Default]: h2Regular,
  },
  {
    formFactorProps: {
      [FormFactorTypes.Mobi]: {
        fontSize: '22px',
        lineHeight: '24px',
        letterSpacing: '0.5px',
      },
      [FormFactorTypes.Feature]: {
        fontSize: '20px',
        lineHeight: '22px',
        letterSpacing: '0px',
      },
    },
  },
) as React.ElementType<TextProps>

const h2Light = (props: TextProps) => (
  <Text
    as='h2'
    margin='0'
    fontWeight='normal'
    fontFamily={FontFamilies.VodafoneLightEot}
    fontSize='28px'
    lineHeight='34px'
    letterSpacing='1.5px'
    {...props}
  >
    {props.text}
    {props.children}
  </Text>
)

export const H2Light = withFormFactor<TextProps>(
  {
    [FormFactorTypes.Default]: h2Light,
  },
  {
    formFactorProps: {
      [FormFactorTypes.Mobi]: {
        fontSize: '22px',
        lineHeight: '24px',
        letterSpacing: '0.5px',
      },
      [FormFactorTypes.Feature]: {
        fontSize: '20px',
        lineHeight: '22px',
        letterSpacing: '0px',
      },
    },
  },
) as React.ElementType<TextProps>
