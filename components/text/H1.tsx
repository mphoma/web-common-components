import React from 'react'
import { FontFamilies, FormFactorTypes } from '../common/constants'
import { withFormFactor } from '../hocs/withFormFactor'
import { Text } from './Text'
import { TextProps } from './TextProps'

const h1 = (props: TextProps) => (
  <Text
    margin='0'
    fontWeight='normal'
    fontFamily={FontFamilies.ExtraBold}
    fontSize='50px'
    lineHeight='60px'
    letterSpacing='2px'
    as='h1'
    {...props}
  >
    {props.text}
    {props.children}
  </Text>
)

export const H1 = withFormFactor<TextProps>(
  {
    [FormFactorTypes.Default]: h1,
  },
  {
    formFactorProps: {
      [FormFactorTypes.Tablet]: {
        fontSize: '32px',
        lineHeight: '40px',
        letterSpacing: '1.5px',
      },
      [FormFactorTypes.Mobi]: {
        fontSize: '28px',
        lineHeight: '30px',
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

const h1Regular = (props: TextProps) => (
  <Text
    as='h1'
    margin='0'
    fontWeight='normal'
    fontFamily={FontFamilies.Regular}
    fontSize='50px'
    lineHeight='60px'
    letterSpacing='2px'
    {...props}
  >
    {props.text}
    {props.children}
  </Text>
)

export const H1Regular = withFormFactor<TextProps>(
  {
    [FormFactorTypes.Default]: h1Regular,
  },
  {
    formFactorProps: {
      [FormFactorTypes.Tablet]: {
        fontSize: '32px',
        lineHeight: '40px',
        letterSpacing: '1.5px',
      },
      [FormFactorTypes.Mobi]: {
        fontSize: '28px',
        lineHeight: '30px',
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

const h1Light = (props: TextProps) => (
  <Text
    as='h1'
    margin='0'
    fontWeight='normal'
    fontFamily={FontFamilies.Light}
    fontSize='50px'
    lineHeight='60px'
    letterSpacing='2px'
    {...props}
  >
    {props.text}
    {props.children}
  </Text>
)

export const H1Light = withFormFactor<TextProps>(
  {
    [FormFactorTypes.Default]: h1Light,
  },
  {
    formFactorProps: {
      [FormFactorTypes.Tablet]: {
        fontSize: '32px',
        lineHeight: '40px',
        letterSpacing: '1.5px',
      },
      [FormFactorTypes.Mobi]: {
        fontSize: '28px',
        lineHeight: '30px',
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
