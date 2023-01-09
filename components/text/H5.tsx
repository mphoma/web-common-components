import React from 'react'
import { FontFamilies, FormFactorTypes } from '../../common/constants'
import { withFormFactor } from '../../hocs/withFormFactor'
import { Text } from './Text'
import { TextProps } from './TextProps'

const h5 = (props: TextProps) => (
  <Text
    as='h5'
    margin='0'
    fontWeight='normal'
    fontFamily={FontFamilies.VodafoneBoldEot}
    fontSize='18px'
    lineHeight='24px'
    letterSpacing='1px'
    {...props}
  >
    {props.text}
    {props.children}
  </Text>
)

export const H5 = withFormFactor(
  {
    [FormFactorTypes.Default]: h5,
  },
  {
    formFactorProps: {
      [FormFactorTypes.Mobi]: {
        fontSize: '16px',
        lineHeight: '18px',
        letterSpacing: '0.5px',
      },
      [FormFactorTypes.Feature]: {
        fontSize: '14px',
        lineHeight: '16px',
        letterSpacing: '0px',
      },
    },
  },
) as React.ElementType<TextProps>

const h5Light = (props: TextProps) => (
  <Text
    as='h5'
    margin='0'
    fontWeight='normal'
    fontFamily={FontFamilies.VodafoneLightEot}
    fontSize='18px'
    lineHeight='24px'
    letterSpacing='1px'
    {...props}
  >
    {props.text}
    {props.children}
  </Text>
)

export const H5Light = withFormFactor<TextProps>(
  {
    [FormFactorTypes.Default]: h5Light,
  },
  {
    formFactorProps: {
      [FormFactorTypes.Mobi]: {
        fontSize: '16px',
        lineHeight: '18px',
        letterSpacing: '0.5px',
      },
      [FormFactorTypes.Feature]: {
        fontSize: '14px',
        lineHeight: '16px',
        letterSpacing: '0px',
      },
    },
  },
) as React.ElementType<TextProps>

const h5Regular = (props: TextProps) => (
  <Text
    as='h5'
    margin='0'
    fontWeight='normal'
    fontFamily={FontFamilies.VodafoneRegularEot}
    fontSize='18px'
    lineHeight='24px'
    letterSpacing='1px'
    {...props}
  >
    {props.text}
    {props.children}
  </Text>
)

export const H5Regular = withFormFactor<TextProps>(
  {
    [FormFactorTypes.Default]: h5Regular,
  },
  {
    formFactorProps: {
      [FormFactorTypes.Mobi]: {
        fontSize: '16px',
        lineHeight: '18px',
        letterSpacing: '0.5px',
      },
      [FormFactorTypes.Feature]: {
        fontSize: '14px',
        lineHeight: '16px',
        letterSpacing: '0px',
      },
    },
  },
) as React.ElementType<TextProps>
