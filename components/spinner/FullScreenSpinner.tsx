import React from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import { ColorCodes, FormFactorTypes} from '../../common/constants'
import { withFormFactor } from '../../hocs/withFormFactor'
import { Svg } from '../general/Svg'

interface ScreenSpinnerProps {
    animationDuration?: string,
    animationStartTime?: any,
    dashOffsetStart?: string,
    pathLength?: string,
    maxStrokeWidth?: string,
    rayWidth?: any,
    spacePerRay?: any,
    whiteSpaceBefore?: any,
    minStrokeWidth?: string,
    waveDuration?: any,
    delay?: string,
    maxStroke?: number,
    minStroke?: any,
}

export const WaveDirections = {
    Clockwise: 'clockwise',
    Anticlockwise: 'anticlockwise',
  };
  
  const Logo = styled('use')<ScreenSpinnerProps>`
    fill: none;
    stroke: ${props => props.color};
    stroke-linejoin: miter;
    stroke-miterlimit: 8;
    stroke-width: ${props => props.strokeWidth};
    stroke-linecap: round;
    animation-duration: ${props => props.animationDuration}s;
    animation-delay: ${props => -props.animationStartTime}s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-name: ${props => logoInOut(props.pathLength, props.strokeWidth, props.dashOffsetStart, props.dashOffsetEnd)};
  `;
  
  const logoInOut = (pathLength: any, strokeWidth:any, dashOffsetStart:any, dashOffsetEnd:any) => keyframes`
    0.0000% {
      stroke-width: 0;
      stroke-dasharray: 0 ${pathLength};
      stroke-dashoffset: ${dashOffsetStart};
    }
    6.4103% {
      stroke-width: ${strokeWidth};
    }
    12.8205% {
      stroke-width: ${strokeWidth};
      stroke-dasharray: ${pathLength} 0;
      stroke-dashoffset: ${dashOffsetEnd};
    }
    74.3590% {
      stroke-width: ${strokeWidth};
      stroke-dasharray: ${pathLength} 0;
      stroke-dashoffset: ${dashOffsetEnd};
    }
    80.7692% {
      stroke-width: ${strokeWidth};
    }
    87.1795% {
      stroke-width: 0;
      stroke-dasharray: 0 ${pathLength};
      stroke-dashoffset: ${dashOffsetStart};
    }
    100.0000% {
      stroke-width: 0;
      stroke-dasharray: 0 ${pathLength};
      stroke-dashoffset: ${dashOffsetStart};
    }
  `;
  
  const BorderMask = styled('use')`
    fill: #000000;
    stroke: none;
  `;
  
  const Border = styled('use')<ScreenSpinnerProps>`
    fill: none;
    mask: url(#border-mask);
    stroke: ${props => props.color};
    stroke-width: ${props => props.maxStrokeWidth};
    stroke-dasharray: ${props => {
  
      const whiteSpaceWidth = (props.spacePerRay - props.rayWidth) / 2;
      return `0 ${whiteSpaceWidth + props.whiteSpaceBefore} ${props.rayWidth} ${whiteSpaceWidth + props.whiteSpaceAfter}`;
    }};
    animation-name:
      ${props => borderWave(props.minStrokeWidth, props.maxStrokeWidth)},
      ${() => showHideBorder};
    animation-duration:
      ${props => props.waveDuration / 2}s,
      ${props => props.animationDuration}s;
    animation-delay:
      ${props => props.delay}s,
      ${props => -props.animationStartTime}s;
    animation-timing-function: ease-in-out, linear;
    animation-iteration-count: infinite;
    animation-direction: alternate, normal;
  `;
  
  const borderWave = (minStroke, maxStroke) => keyframes`
    0% {
      stroke-width: ${minStroke};
    }
    100% {
      stroke-width: ${maxStroke};
    }
  `;
  
  const showHideBorder = keyframes`
    0% {
      stroke-opacity: 0;
    }
    12.8205% {
      stroke-opacity: 0;
    }
    17.9487% {
      stroke-opacity: 1;
    }
    69.2308% {
      stroke-opacity: 1;
    }
    74.3590% {
      stroke-opacity: 0;
    }
    100% {
      stroke-opacity: 0;
    }
  `;
  
  const FullScreenSpinnerUI = (props:ScreenSpinnerProps) => {
  
    const borderPathLength = 307.39;
  
    const borders = [];
  
    const spacePerRay = borderPathLength / props.raysPerBorder;
    const rayMaxWidth = spacePerRay * props.rayDensity;
  
    const durations = [...Array(props.numberOfBorders)];
  
    for (let index = 0; index < durations.length; index++) {
      const minDuration = props.wavePeriod - props.wavePeriod * props.borderWaveSpeedDifference;
      durations[index] = minDuration + (props.wavePeriod - minDuration) / props.numberOfBorders * (index + 1);
    }
  
    const availableStrokeSpace = props.maxBorderHeight;
    let previousMaxStrokeWidth = 0;
    let rayWidth = rayMaxWidth;
  
    for (let borderIndex = 0; borderIndex < props.numberOfBorders; borderIndex++) {
  
      const currentDuration = durations[borderIndex];
      const maxStrokeWidth = availableStrokeSpace / props.numberOfBorders * (borderIndex + 1);
      const minStrokeWidth = previousMaxStrokeWidth + (maxStrokeWidth - previousMaxStrokeWidth) * (1 - props.waveRelativeHeight);
      const waveRayDelays = [...Array(props.raysPerWave)];
  
      for (let delayIndex = 0; delayIndex < waveRayDelays.length; delayIndex++) {
        const index = props.waveDirection === WaveDirections.Anticlockwise
          ? delayIndex
          : waveRayDelays.length - 1 - delayIndex;
  
        waveRayDelays[index] = -currentDuration / props.raysPerWave * delayIndex;
      }
  
      for (let rayIndex = 0; rayIndex < props.raysPerWave; rayIndex++) {
  
        borders.push(
          <Border
            ref={ref => {
              if (!ref) {
                return;
              }
  
              // This is a hack specifically for KaiOS. The SVG mask bugs out at the strangest of
              // times, which causes the borders to render on both the inside and outside of the logo.
              // Manually adding the mask as an inline style after the element is rendered fixes the
              // issue.
              //
              // I tired multiple alternate "React friendly" solutions, but none of them worked
              // reliably. This is the best solution so far.
              ref.style.mask = 'url(#border-mask)';
            }}
            key={`border-${borderIndex}-${rayIndex}`}
            xlinkHref="#border"
            color={props.color}
            minStrokeWidth={minStrokeWidth}
            maxStrokeWidth={maxStrokeWidth}
            spacePerRay={spacePerRay}
            rayWidth={rayWidth}
            waveDuration={currentDuration}
            animationDuration={props.animationDuration}
            delay={waveRayDelays[rayIndex]}
            whiteSpaceBefore={rayIndex * spacePerRay}
            whiteSpaceAfter={(props.raysPerWave - rayIndex - 1) * spacePerRay}
            animationStartTime={props.animationStartTime} />
        );
      }
  
      previousMaxStrokeWidth = maxStrokeWidth;
      rayWidth *= props.rayWidthBase;
    }
  
    return (
  
      // Note that the `key` prop in the SVG below is used to force remount the SVG each time the
      // props change. If this is not done then the animation will go out of sync; which is highly
      // undesirable.
      <Svg
        key={Math.random()}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="https://www.w3.org/1999/xlink"
        viewBox="0 0 160.34866 192.25357"
        height={props.size}
        width={props.size}>
  
        <defs>
          <path
            d="M 81.2922,158.75334 C 57.927716,158.83273 33.609893,138.8896 33.500496,106.85144 33.422242,85.674837 44.684195,64.329552 59.281141,52.233174 66.136309,46.250511 73.796835,41.692099 82.637216,38.333815 c 9.99084,-3.795321 18.939794,-4.38671 18.939794,-4.38671 0,0 -7.006645,5.707534 -10.218158,13.242922 -2.693219,6.31928 -4.191522,13.570697 -3.781418,22.174712 26.668316,5.720034 39.252316,21.467249 39.271076,43.912701 0.0624,21.62978 -16.70678,45.38178 -45.556842,45.47557"
            id="logo" />
  
          <path
            d="m 94.730655,71.11257 c 20.851795,5.855302 32.099095,19.719418 32.117855,42.16487 0.0624,21.62978 -16.70678,45.38178 -45.556842,45.47557 -23.363952,0.0797 -47.681775,-19.86341 -47.791172,-51.90157 -0.07825,-21.176603 11.183699,-42.521888 25.780645,-54.618266 8.048613,-7.043503 22.710792,-15.796 33.017817,-16.849404"
            id="border" />
  
          <path
            d="m 94.730655,71.11257 c 20.851795,5.855302 32.099095,19.719418 32.117855,42.16487 0.0624,21.62978 -16.70678,45.38178 -45.556842,45.47557 C 57.927716,158.83271 33.609893,138.8896 33.500496,106.85144 33.422246,85.674837 44.684195,64.329552 59.281141,52.233174 67.329754,45.189671 82.120237,35.133114 101.57701,33.947105"
            id="mask" />
        </defs>
  
        <mask id="border-mask" maskUnits="userSpaceOnUse">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <BorderMask xlinkHref="#mask" />
        </mask>
  
        {borders}
  
        <Logo xlinkHref="#logo"
              pathLength={363.2}
              color={props.color}
              strokeWidth={props.logoWidth}
              dashOffsetStart={136}
              dashOffsetEnd={-153}
              animationDuration={props.animationDuration}
              animationStartTime={props.animationStartTime} />
      </Svg>
    );
  };
  
  FullScreenSpinnerUI.propTypes = {
    size: PropTypes.string.isRequired,
    animationDuration: PropTypes.number,
    animationStartTime: PropTypes.number,
    wavePeriod: PropTypes.number,
    color: PropTypes.string,
    logoWidth: PropTypes.number,
    raysPerBorder: PropTypes.number,
    rayDensity: PropTypes.number,
    raysPerWave: PropTypes.number,
    numberOfBorders: PropTypes.number,
    borderWaveSpeedDifference: PropTypes.number,
    waveRelativeHeight: PropTypes.number,
    maxBorderHeight: PropTypes.number,
    waveDirection: PropTypes.oneOf([WaveDirections.Clockwise, WaveDirections.Anticlockwise]),
  };
  
  FullScreenSpinnerUI.defaultProps = {
    size: '70%',
    animationDuration: 7,
    animationStartTime: 0,
    wavePeriod: 1.1,
    color: ColorCodes.Red1,
    logoWidth: 4.226,
    raysPerBorder: 60,
    rayDensity: 0.7,
    raysPerWave: 6,
    rayWidthBase: 0.45,
    numberOfBorders: 3,
    borderWaveSpeedDifference: 0.6,
    waveRelativeHeight: 0.75,
    maxBorderHeight: 57,
    waveDirection: WaveDirections.Clockwise,
  };
  
  export const FullScreenSpinner = withFormFactor({
    [FormFactorTypes.Default]: FullScreenSpinnerUI,
  }, {
    formFactorProps: {
      [FormFactorTypes.Mobi]: {
        rayDensity: 0.7,
        rayWidthBase: 0.4,
        numberOfBorders: 2,
        waveRelativeHeight: 0.6,
      },
      [FormFactorTypes.Feature]: {
        rayDensity: 0.6,
        raysPerWave: 9,
        numberOfBorders: 1,
        waveRelativeHeight: 0.5,
        maxBorderHeight: 47,
      },
    },
  });