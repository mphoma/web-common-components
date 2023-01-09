import styled from 'styled-components'
import { TextProps } from './TextProps'

export const Text = styled.div<TextProps>`
  color: ${(props) => props.color || 'inherit'};
  display: ${(props) => props.display || 'block'};
  font-family: ${(props) => props.fontFamily || 'inherit'};
  font-size: ${(props) => props.fontSize || 'inherit'};

  ${(props) => props.fontWeight && `font-weight: ${props.fontWeight};`}
  ${(props) => props.fontStyle && `font-style: ${props.fontStyle};`}
  ${(props) => props.lineHeight && `line-height: ${props.lineHeight};`}
  ${(props) => props.letterSpacing && `letter-spacing: ${props.letterSpacing};`}
  ${(props) => props.padding && `padding: ${props.padding};`}
  ${(props) => props.margin && `margin: ${props.margin};`}
  ${(props) => props.textAlign && `text-align: ${props.textAlign};`}
  ${(props) => props.onClick && `cursor: pointer;`}
  ${(props) => props.transform && `text-transform: ${props.transform};`}
  ${(props) => props.textDecoration && `text-decoration: ${props.textDecoration};`}
  ${(props) => props.position && `position: ${props.position};`}
  ${(props) => props.flex && `flex: ${props.flex};`}
  ${(props) => props.alignSelf && `align-self: ${props.alignSelf};`}
  ${(props) => props.justifyContent && `justify-content: ${props.justifyContent};`}
  ${(props) => props.top && `top: ${props.top};`}
  ${(props) => props.bottom && `bottom: ${props.bottom};`}
  ${(props) => props.left && `left: ${props.left};`}
  ${(props) => props.right && `right: ${props.right};`}
  ${(props) => props.whiteSpace && `white-space: ${props.whiteSpace};`}
  ${(props) => props.textOverflow && `text-overflow: ${props.textOverflow};`}
  ${(props) => props.overflow && `overflow: ${props.overflow};`}
  ${(props) => props.width && `width: ${props.width};`}
  ${(props) => props.hyphens && `hyphens: ${props.hyphens};`}
  ${(props) => props.wordBreak && `word-break: ${props.wordBreak};`}
  ${(props) => props.wordWrap && `word-wrap: ${props.wordWrap};`}
`     
