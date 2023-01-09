import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Image } from '../general/Image'
import { Images, ColorCodes } from '../../common/constants'

interface TooltipButtonProps {
  position?: string,
  tooltipPadding?: string,
  tooltipFontSize?: string,
  tooltipWidth?: string,
  tooltipHeight?: string,
  textColor?: string,
  tooltipTextHeader?: string,
  tooltipText?: string,
  showTooltip?: string
}

const Container = styled.div<TooltipButtonProps>`
  position: ${props => props.position};
  z-index: 1;
`

const ToolTip = styled.div<TooltipButtonProps>`
padding: ${props => props.tooltipPadding || '0.5vw'};
position: absolute;
border-radius: 4px;
color: white;
text-align: left;
right: -1vh;
white-space:pre-wrap;
font-size: ${props => props.tooltipFontSize || '14px'};
${props => props.tooltipWidth && `width: ${props.tooltipWidth};`}
${props => props.tooltipHeight && `height: ${props.tooltipHeight};`}
`

const ToolTipTriangle = styled.div`
position: aboslute;
width: 0;
height: 0;
border-style: solid;
border-width: 0 1vh 1.3vh 1vh;
`

const ToolTipHeader = styled.div`
  font-weight: bold;
`;


export default function TooltipButton(props: TooltipButtonProps) {
  return (
    <Container position={'relative'}>

      <Image
        {...props}
        src={Images.Icons.Tooltip} />

      {props.showTooltip &&

        <Container position={'absolute'}>
          <ToolTipTriangle />
          <ToolTip
            tooltipPadding={props.tooltipPadding}
            tooltipWidth={props.tooltipWidth}
            tooltipHeight={props.tooltipHeight}
            textColor={props.textColor}
            tooltipFontSize={props.tooltipFontSize}>

            <ToolTipHeader>
              {props.tooltipTextHeader}
            </ToolTipHeader>

            {props.tooltipText}

          </ToolTip>
        </Container>
      }

    </Container>
  )
}

TooltipButton.propTypes = {
  ...Image.propTypes,
  textColor: PropTypes.string,
  tooltipText: PropTypes.string,
  tooltipWidth: PropTypes.string,
  tooltipHeight: PropTypes.string,
  tooltipPadding: PropTypes.string,
};

TooltipButton.defaultProps = {
  ...Image.defaultProps,
  tooltipTextHeader: 'Tooltip Text Header',
  tooltipText: 'Tooltip Text',
  textColor: '#FFFFFF',
  width: '2vmin',
  height: '2vmin',
  tooltipPadding: '0.5vw',
  tooltipFontSize: '14px',
};