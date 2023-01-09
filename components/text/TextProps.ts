import React from 'react'

export type TextProps = {
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void // to handle onClick functions
  text?: string
  display?: string
  fontFamily?: string // make the component able to receive children elements
  fontSize?: string // two styling options (you can create as many as you want)
  fontWeight?: string
  fontStyle?: string
  lineHeight?: string
  letterSpacing?: string
  padding?: string
  margin?: string
  textAlign?: string
  transform?: string
  textDecoration?: string
  position?: string
  flex?: string
  alignSelf?: string
  justifyContent?: string
  top?: string
  bottom?: string
  left?: string
  right?: string
  whiteSpace?: string
  textOverflow?: string
  overflow?: string
  width?: string
  hyphens?: string
  wordBreak?: string
  wordWrap?: string,
  key?:string,
  children?: React.ReactNode
}
