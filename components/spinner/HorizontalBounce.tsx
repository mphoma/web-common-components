import React from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import { ColorCodes} from '../../common/constants'

interface BounceProps {
    size?: string,
    dashOffsetStart?: string | number |undefined ,
    duration?: any,
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
    pathLength?: any,
    delay?:any | undefined | string,
    strokeWidths?: any | undefined | string
    bigBounceDistanceBetweenLogos?: any | undefined | bigint,
    smallBounceDistanceBetweenLogos?: any | undefined | bigint,

}

const Svg = styled.svg<BounceProps>`
  height: ${props => props.height};
  width: ${props => props.width};

  .logo {
    display: inline;
    fill: none;
    stroke: ${props => props.color};
    stroke-opacity: 1;
    stroke-linecap: round;
  }

  .logo--main {
    stroke-width: 0;
    stroke-dasharray: 0 ${props => props.pathLength};
    stroke-dashoffset: ${props => props.dashOffsetStart};
    animation: main infinite ${props => props.duration}s linear;
  }

  .logo--sub-1 {
    opacity: 0.9;
    stroke-width: ${props => props.strokeWidths[1]};
    visibility: hidden;
    transform: translateX(0);
    animation: sub-1 infinite ${props => props.duration}s linear;
  }

  .logo--sub-2 {
    opacity: 0.8;
    stroke-width: ${props => props.strokeWidths[2]};
    visibility: hidden;
    animation: sub-2 infinite ${props => props.duration}s linear;
  }

  .logo--sub-3 {
    opacity: 0.7;
    stroke-width: ${props => props.strokeWidths[3]};
    visibility: hidden;
    transform: translateX(0);
    animation: sub-3 infinite ${props => props.duration}s linear;
  }

  .logo--sub-4 {
    opacity: 0.6;
    stroke-width: ${props => props.strokeWidths[4]};
    visibility: hidden;
    transform: translateX(0);
    animation: sub-4 infinite ${props => props.duration}s linear;
  }

  .logo--sub-5 {
    opacity: 0.5;
    stroke-width: ${props => props.strokeWidths[5]};
    visibility: hidden;
    transform: translateX(0);
    animation: sub-5 infinite ${props => props.duration}s linear;
  }

  @keyframes main {
    0.0000% {
      stroke-width: 0;
      stroke-dasharray: 0 ${props => props.pathLength};
      stroke-dashoffset: ${props => props.dashOffsetStart};
    }
    11.9048% {
      stroke-width: ${props => props.strokeWidths[0]};
    }
    23.8095% {
      stroke-width: ${props => props.strokeWidths[0]};
      stroke-dasharray: ${props => props.pathLength} 0;
      stroke-dashoffset: ${props => props.dashOffsetEnd};
    }
    69.0476% {
      stroke-width: ${props => props.strokeWidths[0]};
      stroke-dasharray: ${props => props.pathLength} 0;
      stroke-dashoffset: ${props => props.dashOffsetEnd};
    }
    80.9524% {
      stroke-width: ${props => props.strokeWidths[0]};
    }
    92.8571% {
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

  @keyframes sub-1 {
    0% {
      visibility: hidden;
    }
    23.8094% {
      visibility: hidden;
    }
    23.8095% {
      transform: translateX(0);
      visibility: visible;
    }
    35.7143% {
      transform: translateX(-${props => props.bigBounceDistanceBetweenLogos}px);
    }
    39.2857% {
      transform: translateX(0);
    }
    42.8571% {
      transform: translateX(${props => props.smallBounceDistanceBetweenLogos}px);
    }
    46.4286% {
      transform: translateX(0);
    }
    58.3333% {
      transform: translateX(${props => props.bigBounceDistanceBetweenLogos}px);
    }
    61.9048% {
      transform: translateX(0px);
    }
    65.4762% {
      transform: translateX(-${props => props.smallBounceDistanceBetweenLogos}px);
    }
    69.0476% {
      transform: translateX(0);
      visibility: hidden;
    }
  }

  @keyframes sub-2 {
    0% {
      visibility: hidden;
    }
    23.8094% {
      visibility: hidden;
    }
    23.8095% {
      transform: translateX(0);
      visibility: visible;
    }
    35.7143% {
      transform: translateX(-${props => 2 * props.bigBounceDistanceBetweenLogos}px);
    }
    39.2857% {
      transform: translateX(0);
    }
    42.8571% {
      transform: translateX(${props => 2 * props.smallBounceDistanceBetweenLogos}px);
    }
    46.4286% {
      transform: translateX(0);
    }
    58.3333% {
      transform: translateX(${props => 2 * props.bigBounceDistanceBetweenLogos}px);
    }
    61.9048% {
      transform: translateX(0px);
    }
    65.4762% {
      transform: translateX(-${props => 2 * props.smallBounceDistanceBetweenLogos}px);
    }
    69.0476% {
      transform: translateX(0);
      visibility: hidden;
    }
  }

  @keyframes sub-3 {
    0% {
      visibility: hidden;
    }
    23.8094% {
      visibility: hidden;
    }
    23.8095% {
      transform: translateX(0);
      visibility: visible;
    }
    35.7143% {
      transform: translateX(-${props => 3 * props.bigBounceDistanceBetweenLogos}px);
    }
    39.2857% {
      transform: translateX(0);
    }
    42.8571% {
      transform: translateX(${props => 3 * props.smallBounceDistanceBetweenLogos}px);
    }
    46.4286% {
      transform: translateX(0);
    }
    58.3333% {
      transform: translateX(${props => 3 * props.bigBounceDistanceBetweenLogos}px);
    }
    61.9048% {
      transform: translateX(0px);
    }
    65.4762% {
      transform: translateX(-${props => 3 * props.smallBounceDistanceBetweenLogos}px);
    }
    69.0476% {
      transform: translateX(0);
      visibility: hidden;
    }
  }

  @keyframes sub-4 {
    0% {
      visibility: hidden;
    }
    23.8094% {
      visibility: hidden;
    }
    23.8095% {
      transform: translateX(0);
      visibility: visible;
    }
    35.7143% {
      transform: translateX(-${props => 4 * props.bigBounceDistanceBetweenLogos}px);
    }
    39.2857% {
      transform: translateX(0);
    }
    42.8571% {
      transform: translateX(${props => 4 * props.smallBounceDistanceBetweenLogos}px);
    }
    46.4286% {
      transform: translateX(0);
    }
    58.3333% {
      transform: translateX(${props => 4 * props.bigBounceDistanceBetweenLogos}px);
    }
    61.9048% {
      transform: translateX(0px);
    }
    65.4762% {
      transform: translateX(-${props => 4 * props.smallBounceDistanceBetweenLogos}px);
    }
    69.0476% {
      transform: translateX(0);
      visibility: hidden;
    }
  }

  @keyframes sub-5 {
    0% {
      visibility: hidden;
    }
    23.8094% {
      visibility: hidden;
    }
    23.8095% {
      transform: translateX(0);
      visibility: visible;
    }
    35.7143% {
      transform: translateX(-${props => 5 * props.bigBounceDistanceBetweenLogos}px);
    }
    39.2857% {
      transform: translateX(0);
    }
    42.8571% {
      transform: translateX(${props => 5 * props.smallBounceDistanceBetweenLogos}px);
    }
    46.4286% {
      transform: translateX(0);
    }
    58.3333% {
      transform: translateX(${props => 5 * props.bigBounceDistanceBetweenLogos}px);
    }
    61.9048% {
      transform: translateX(0px);
    }
    65.4762% {
      transform: translateX(-${props => 5 * props.smallBounceDistanceBetweenLogos}px);
    }
    69.0476% {
      transform: translateX(0);
      visibility: hidden;
    }
  }
`;

export const HorizontalBounce = (props:BounceProps) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 107.5746 276.2630'
    height={props.size}
    width={props.size}
    color={props.color}
    duration={props.duration}
    strokeWidths={props.strokeWidths}
    bigBounceDistanceBetweenLogos={props.bigBounceDistanceBetweenLogos}
    smallBounceDistanceBetweenLogos={props.smallBounceDistanceBetweenLogos}
    pathLength={363.2}
    dashOffsetStart={136}
    dashOffsetEnd={-153}>

    <path className='logo logo--sub-5'
          d='M 54.905115,132.35142 C 31.540631,132.43081 7.2228082,112.48768 7.1134112,80.449521 7.0351572,59.272919 18.29711,37.927634 32.894056,25.831256 39.749224,19.848593 47.40975,15.290181 56.250131,11.931897 66.240971,8.1365757 75.189927,7.5451867 75.189927,7.5451867 c 0,0 -7.006647,5.7075343 -10.21816,13.2429223 -2.693219,6.31928 -4.191522,13.570697 -3.781418,22.174712 26.668321,5.720034 39.252321,21.467249 39.271081,43.912704 0.0624,21.629775 -16.706781,45.381775 -45.556847,45.475565' />
    <path className='logo logo--sub-4'
          d='M 54.905115,132.35142 C 31.540631,132.43081 7.2228082,112.48768 7.1134112,80.449521 7.0351572,59.272919 18.29711,37.927634 32.894056,25.831256 39.749224,19.848593 47.40975,15.290181 56.250131,11.931897 66.240971,8.1365757 75.189927,7.5451867 75.189927,7.5451867 c 0,0 -7.006647,5.7075343 -10.21816,13.2429223 -2.693219,6.31928 -4.191522,13.570697 -3.781418,22.174712 26.668321,5.720034 39.252321,21.467249 39.271081,43.912704 0.0624,21.629775 -16.706781,45.381775 -45.556847,45.475565' />
    <path className='logo logo--sub-3'
          d='M 54.905115,132.35142 C 31.540631,132.43081 7.2228082,112.48768 7.1134112,80.449521 7.0351572,59.272919 18.29711,37.927634 32.894056,25.831256 39.749224,19.848593 47.40975,15.290181 56.250131,11.931897 66.240971,8.1365757 75.189927,7.5451867 75.189927,7.5451867 c 0,0 -7.006647,5.7075343 -10.21816,13.2429223 -2.693219,6.31928 -4.191522,13.570697 -3.781418,22.174712 26.668321,5.720034 39.252321,21.467249 39.271081,43.912704 0.0624,21.629775 -16.706781,45.381775 -45.556847,45.475565' />
    <path className='logo logo--sub-2'
          d='M 54.905115,132.35142 C 31.540631,132.43081 7.2228082,112.48768 7.1134112,80.449521 7.0351572,59.272919 18.29711,37.927634 32.894056,25.831256 39.749224,19.848593 47.40975,15.290181 56.250131,11.931897 66.240971,8.1365757 75.189927,7.5451867 75.189927,7.5451867 c 0,0 -7.006647,5.7075343 -10.21816,13.2429223 -2.693219,6.31928 -4.191522,13.570697 -3.781418,22.174712 26.668321,5.720034 39.252321,21.467249 39.271081,43.912704 0.0624,21.629775 -16.706781,45.381775 -45.556847,45.475565' />
    <path className='logo logo--sub-1'
          d='M 54.905115,132.35142 C 31.540631,132.43081 7.2228082,112.48768 7.1134112,80.449521 7.0351572,59.272919 18.29711,37.927634 32.894056,25.831256 39.749224,19.848593 47.40975,15.290181 56.250131,11.931897 66.240971,8.1365757 75.189927,7.5451867 75.189927,7.5451867 c 0,0 -7.006647,5.7075343 -10.21816,13.2429223 -2.693219,6.31928 -4.191522,13.570697 -3.781418,22.174712 26.668321,5.720034 39.252321,21.467249 39.271081,43.912704 0.0624,21.629775 -16.706781,45.381775 -45.556847,45.475565' />
    <path className='logo logo--main'
          d='M 54.905115,132.35142 C 31.540631,132.43081 7.2228082,112.48768 7.1134112,80.449521 7.0351572,59.272919 18.29711,37.927634 32.894056,25.831256 39.749224,19.848593 47.40975,15.290181 56.250131,11.931897 66.240971,8.1365757 75.189927,7.5451867 75.189927,7.5451867 c 0,0 -7.006647,5.7075343 -10.21816,13.2429223 -2.693219,6.31928 -4.191522,13.570697 -3.781418,22.174712 26.668321,5.720034 39.252321,21.467249 39.271081,43.912704 0.0624,21.629775 -16.706781,45.381775 -45.556847,45.475565' />
  </Svg>
);

HorizontalBounce.propTypes = {
  size: PropTypes.string.isRequired,
  duration: PropTypes.number,
  color: PropTypes.string,
  strokeWidths: PropTypes.arrayOf(PropTypes.number),
  bigBounceDistanceBetweenLogos: PropTypes.number,
  smallBounceDistanceBetweenLogos: PropTypes.number,
};

HorizontalBounce.defaultProps = {
  size: '70%',
  duration: 4,
  color: ColorCodes.Red1,
  strokeWidths: [5, 4, 3.5, 3, 2.5, 2],
  bigBounceDistanceBetweenLogos: 17.13,
  smallBounceDistanceBetweenLogos: 3.43,
};