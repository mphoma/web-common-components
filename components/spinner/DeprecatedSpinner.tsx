import React from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import { ColorCodes} from '../../common/constants'
import { Svg } from '../general/Svg'

interface SpinnerProps {
    duration?: string,
    size?: string
    color?: string
}

const AnimatedPath = styled.path<SpinnerProps>`
  animation: spinnerAnimation infinite ${props => props.duration}s linear;
  fill: transparent;
  stroke: ${props => props.color};
  stroke-width: 2.5;
  stroke-dasharray: 378;
  stroke-dashoffset: 378;

  @keyframes spinnerAnimation {
    from {
      stroke-dashoffset: 0;
    }
    to {
      stroke-dashoffset: 756;
    }
  }
`;

/**
 * @deprecated This spinner has been deprecated in favour of {@link Spinner}.
 * @param props
 * @returns {JSX.Element}
 */
export const DeprecatedSpinner = (props:SpinnerProps) => (
  <Svg
    viewBox='0 0 99 132'
    xmlns="http://www.w3.org/2000/svg"
    height={props.size}
    width={props.size}>

    <AnimatedPath
      duration={props.duration}
      color={props.color}
      d="M80.51,3.46 C74.7121353,5.84169503 69.5934464,9.62059285 65.61,14.46 C60.1337728,20.9777733 57.1123256,29.2071485 57.07,37.72 C57.056821,37.9564832 57.056821,38.1935168 57.07,38.43 L57.24,40.15 L58.91,40.57 C71.24,43.65 80.59,49 86.75,56.34 C92.75,63.54 95.82,72.75 95.86,83.73 C95.7682791,95.0953824 91.4721836,106.024421 83.8,114.41 C79.7733619,118.85022 74.8838075,122.422963 69.43,124.91 C63.3626797,127.63631 56.7816301,129.030947 50.13,129 L50,129 C38.28,129 26.47,123.94 17.62,115.11 C12.931208,110.436495 9.2161647,104.879225 6.69,98.76 C3.8632821,91.8832391 2.42565677,84.5149845 2.46,77.08 C2.55906334,66.4929723 5.141652,56.0769881 10,46.67 C14.5259967,37.6202606 20.8558082,29.59229 28.6,23.08 C35.9985949,17.0245956 44.330018,12.2087831 53.27,8.82 C61.9591424,5.42812379 71.1835539,3.61304135 80.51,3.46 Z"
    />
  </Svg>
);

DeprecatedSpinner.propTypes = {
  size: PropTypes.string.isRequired,
  duration: PropTypes.number,
  color: PropTypes.string,
};

DeprecatedSpinner.defaultProps = {
  size: '70%',
  duration: 2.5,
  color: ColorCodes.Red1
};