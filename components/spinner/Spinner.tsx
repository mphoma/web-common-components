import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { ColorCodes} from '../../common/constants'

interface SpinnerProps  {
  size?: string,
  dashOffsetStart?: string | number |undefined ,
  duration?: string | number |undefined,
  dashOffsetEnd?: string| number |undefined,
  padding?: string| number |undefined,
  margin?: string| number |undefined,
  minWidth?: string| number |undefined,
  width?: string,
  height?: string,
  color?: string,
  xmlns?: string,
  viewBox?: string,
  strokeWidth?: string
  pathLength?: string| number |undefined,
}

const Svg = styled.svg<SpinnerProps>`
  height: ${props => props.height};
  width: ${props => props.width};

  .logo {
    display: inline;
    fill: none;
    stroke: ${props => props.color};
    stroke-opacity: 1;
    stroke-linecap: round;
    stroke-linejoin: miter;
    stroke-miterlimit: 8;
    stroke-width: 0;
    stroke-dasharray: 0 ${props => props.pathLength};
    stroke-dashoffset: ${props => props.dashOffsetStart};
    animation: logo-in-out infinite ${props => props.duration}s linear;
  }

  @keyframes logo-in-out {
    0.0000% {
      stroke-width: 0;
      stroke-dasharray: 0 ${props => props.pathLength};
      stroke-dashoffset: ${props => props.dashOffsetStart};
    }
    19.2308% {
      stroke-width: ${props => props.strokeWidth};
    }
    38.4615% {
      stroke-width: ${props => props.strokeWidth};
      stroke-dasharray: ${props => props.pathLength} 0;
      stroke-dashoffset: ${props => props.dashOffsetEnd};
    }
    50.0000% {
      stroke-width: ${props => props.strokeWidth};
      stroke-dasharray: ${props => props.pathLength} 0;
      stroke-dashoffset: ${props => props.dashOffsetEnd};
    }
    69.2308% {
      stroke-width: ${props => props.strokeWidth};
    }
    88.4615% {
      stroke-width: 0;
      stroke-dasharray: 0 ${props => props.pathLength};
      stroke-dashoffset: ${props => props.dashOffsetStart};
    }
    100.0000% {
      stroke-width: 0;
      stroke-dasharray: 0 ${props => props.pathLength};
      stroke-dashoffset: ${props => props.dashOffsetStart};
    }
  }
`;

export const Spinner = (props:SpinnerProps) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 107.5746 139.46466'
    height={props.size}
    width={props.size}
    color={props.color}
    duration={props.duration}
    strokeWidth={props.strokeWidth}
    pathLength={363.2}
    dashOffsetStart={136}
    dashOffsetEnd={-153}>

    <path className='logo'
          d='M 54.905115,132.35142 C 31.540631,132.43081 7.2228082,112.48768 7.1134112,80.449521 7.0351572,59.272919 18.29711,37.927634 32.894056,25.831256 39.749224,19.848593 47.40975,15.290181 56.250131,11.931897 66.240971,8.1365757 75.189927,7.5451867 75.189927,7.5451867 c 0,0 -7.006647,5.7075343 -10.21816,13.2429223 -2.693219,6.31928 -4.191522,13.570697 -3.781418,22.174712 26.668321,5.720034 39.252321,21.467249 39.271081,43.912704 0.0624,21.629775 -16.706781,45.381775 -45.556847,45.475565' />
  </Svg>
);

Spinner.propTypes = {
  size: PropTypes.string.isRequired,
  duration: PropTypes.number,
  color: PropTypes.string,
  strokeWidth: PropTypes.number,
};

Spinner.defaultProps = {
  size: '70%',
  duration: 2.6,
  color: ColorCodes.Red1,
  strokeWidth: 5,
};