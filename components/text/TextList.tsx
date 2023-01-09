import React from 'react'
import { ColorCodes } from '../../common/constants'
import { BodyText } from './BodyText'

interface TextListProps {
  component?: React.ReactNode
  text: any
  color?: string
}
export const TextList = (props: TextListProps) => {
  let components = []
  const TextComponent = (props.component || BodyText) as React.ElementType
  let text

  if (props.text) {
    for (let i = 0; i < props.text.length; i++) {
      text = props.text[i]

      if (!text) {
        continue
      }

      components.push(
        <TextComponent
          key={i + 1}
          text={text}
          color={(props.color && props.color) || ColorCodes.Black}
          padding={'0 0 0.5vh 0'}
        />,
      )
    }
  }

  return <React.Fragment>{components}</React.Fragment>
}
