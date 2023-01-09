import React, { useState, useEffect } from 'react'
import { HContainer } from '../container/Containers'
import { FontFamilies } from '../common/constants'
import { BodyText } from './BodyText'

class MarkdownParser {
  public text: string
  public currentPos: number
  public key: number
  public color: string
  public fontSize?: string
  public textComponent?: any
  public currentChar?: any
  constructor(text?: string, color?: string, fontSize?: string, textComponent?: any) {
    this.text = (text && text) || ''
    this.currentPos = 0
    this.key = 0
    this.color = (color && color) || ''
    this.fontSize = (fontSize && fontSize) || '12px'
    this.textComponent = textComponent
  }

  parse(endChar?: any): any {
    let elements = []
    this.currentChar = this.text && this.text.length > 0 ? this.text[this.currentPos] : null

    while (this.currentChar !== null && this.currentChar !== endChar) {
      elements.push(this.paragraph())
    }

    // Wrap all consumed text and elements in a text
    // component with the default styling. So that
    // plain text still has some style.
    return this.createText(elements, {
      color: this.color,
      fontSize: this.fontSize,
    })
  }

  paragraph(endChar?: any): any {
    let elements = []
    let text = ''

    while (this.currentChar !== null && this.currentChar !== endChar) {
      // Check for escape characters so reserved chars can
      // be used in the text.
      if (this.currentChar === '\\') {
        this.goToNextChar()
        text += this.currentChar
        this.goToNextChar()
        continue
      }

      // If we are not on a special character consume
      // and go to next char without running all the
      // conditional logic below.
      if ('*_{'.indexOf(this.currentChar) < 0) {
        text += this.currentChar
        this.goToNextChar()
        continue
      }

      // If we have hit a special char, commit all consumed
      // text as an element and clear so we can process
      // the styled sections.
      elements.push(text)
      text = ''

      // Deal with bold section
      if (this.currentChar === '*') {
        this.goToNextChar()
        elements.push(this.bold())
      }

      // Deal with italic section
      if (this.currentChar === '_') {
        this.goToNextChar()
        elements.push(this.italic())
      }

      // Deal with parametarized section
      if (this.currentChar === '{') {
        this.goToNextChar()
        elements.push(this.params())
      }
    }

    // Commit remaining text after reaching end of text.
    if (text.length > 0) {
      elements.push(text)
    }

    return elements
  }

  bold() {
    let elements = this.paragraph('*')

    if (this.currentChar !== '*') {
      this.syntaxError('*')
    }

    this.goToNextChar()

    return this.createText(elements, {
      fontFamily: FontFamilies.Bold,
    })
  }

  italic() {
    let elements = this.paragraph('_')

    if (this.currentChar !== '_') {
      this.syntaxError('_')
    }

    this.goToNextChar()

    return this.createText(elements, {
      fontStyle: 'italic',
    })
  }

  params() {
    let props: any = {}
    let key = ''
    let val = ''

    while (this.currentChar !== null && this.currentChar !== '|') {
      key = this.paramKey()
      val = this.paramValue()
      props[key] = val
    }

    if (this.currentChar !== '|') {
      this.syntaxError('|')
    }

    this.goToNextChar()

    let elements = this.paragraph('}')

    if (this.currentChar !== '}') {
      this.syntaxError('}')
    }

    this.goToNextChar()

    return this.createText(elements, props)
  }

  paramKey() {
    let key = ''

    // Ignore white space
    while (this.currentChar === ' ') {
      this.goToNextChar()
    }

    while (this.currentChar !== null && ':;|'.indexOf(this.currentChar) < 0) {
      if (this.currentChar === ' ') {
        this.syntaxError('no spaces', this.currentChar)
      }

      key += this.currentChar
      this.goToNextChar()
    }

    if (key.length === 0) {
      this.syntaxError('<key>', 'null')
    }

    if (this.currentChar !== ':') {
      this.syntaxError(':')
    }

    this.goToNextChar()

    return key
  }

  paramValue() {
    let val = ''

    // Ignore white space
    while (this.currentChar === ' ') {
      this.goToNextChar()
    }

    while (this.currentChar !== null && this.currentChar !== ';' && this.currentChar !== '|') {
      val += this.currentChar
      this.goToNextChar()
    }

    if (val.length === 0) {
      this.syntaxError('<value>', 'null')
    }

    if (this.currentChar !== ';' && this.currentChar !== '|') {
      this.syntaxError('; or |')
    }

    // You don't have to end on a ';' if the next char is '|'
    // this is just minor syntax convenience.
    if (this.currentChar === ';') {
      this.goToNextChar()
    }

    return val
  }

  createText(text: any, props: any) {
    if (!props) {
      props = {}
    }

    return React.createElement(
      this.textComponent,
      {
        display: 'inline',
        key: this.key++,
        fontSize: props.fontSize || 'inherit',
        color: props.color || 'inherit',
        fontFamily: props.fontFamily,
        fontStyle: props.fontStyle,
        text: text,
      },
      text,
    )
  }

  goToNextChar() {
    this.currentPos++

    if (this.currentPos < this.text.length) {
      this.currentChar = this.text[this.currentPos]
      return
    }

    this.currentChar = null
  }

  syntaxError(expected?: any, got?: any) {
    console.log(expected + ' ' + got)
    // this.sentry.warn(`Syntax error at char ${this.currentPos}: Expected '${expected}' got '${got || this.currentChar}'`)
  }
}

interface MarkdownProps {
  id: string
  automationId: string
  color: string
  fontSize: string
  text: string
  textComponent: Object | Function
}

export const Markdown = (props: MarkdownProps) => {
  const _props: any = (props && props) || {
    id: 'unknown-markdown',
    automationId: 'unknown-markdown',
    color: 'inherit',
    fontSize: 'inherit',
    text: null,
    textComponent: <BodyText />,
  }

  const [elements, setStateElements] = useState([])

  useEffect(() => {
    const markdownParser = new MarkdownParser(_props)

    setStateElements(markdownParser.parse())
  }, [props.text])

  return (
    <HContainer id={props.id} automationId={props.automationId}>
      {elements}
    </HContainer>
  )
}
