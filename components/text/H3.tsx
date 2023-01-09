import React from 'react'
import { FontFamilies, FormFactorTypes } from '../../common/constants'
import { withFormFactor } from '../../hocs/withFormFactor'
import { Text } from './Text'
import { TextProps } from './TextProps'

const h3Bold = (props: TextProps) => (
  <Text
    as='h3'
    margin='0'
    fontWeight='normal'
    fontFamily={FontFamilies.VodafoneBoldEot}
    fontSize='24px'
    lineHeight='30px'
    letterSpacing='1.2px'
    {...props}
  >
    {props.text}
    {props.children}
  </Text>
)

export const H3 = withFormFactor<TextProps>(
  {
    [FormFactorTypes.Default]: h3Bold,
  },
  {
    formFactorProps: {
      [FormFactorTypes.Mobi]: {
        fontSize: '20px',
        lineHeight: '22px',
        letterSpacing: '0.5px',
      },
      [FormFactorTypes.Feature]: {
        fontSize: '16px',
        lineHeight: '18px',
        letterSpacing: '0px',
      },
    },
  },
)

const h3Regular = (props: TextProps) => (
  <Text
    as='h3'
    margin='0'
    fontWeight='normal'
    fontFamily={FontFamilies.VodafoneRegularEot}
    fontSize='24px'
    lineHeight='30px'
    letterSpacing='1.2px'
    {...props}
  >
    {props.text}
    {props.children}
  </Text>
)

export const H3Regular = withFormFactor<TextProps>(
  {
    [FormFactorTypes.Default]: h3Regular,
  },
  {
    formFactorProps: {
      [FormFactorTypes.Mobi]: {
        fontSize: '20px',
        lineHeight: '22px',
        letterSpacing: '0.5px',
      },
      [FormFactorTypes.Feature]: {
        fontSize: '16px',
        lineHeight: '18px',
        letterSpacing: '0px',
      },
    },
  },
) as React.ElementType<TextProps>

const h3Light = (props: TextProps) => (
  <Text
    as='h3'
    margin='0'
    fontWeight='normal'
    fontFamily={FontFamilies.VodafoneLightEot}
    fontSize='24px'
    lineHeight='30px'
    letterSpacing='1.2px'
    {...props}
  >
    {props.text}
    {props.children}
  </Text>
)

export const H3Light = withFormFactor<TextProps>(
  {
    [FormFactorTypes.Default]: h3Light,
  },
  {
    formFactorProps: {
      [FormFactorTypes.Mobi]: {
        fontSize: '20px',
        lineHeight: '22px',
        letterSpacing: '0.5px',
      },
      [FormFactorTypes.Feature]: {
        fontSize: '16px',
        lineHeight: '18px',
        letterSpacing: '0px',
      },
    },
  },
) as React.ElementType<TextProps>
