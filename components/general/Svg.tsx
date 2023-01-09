import React from 'react'
import
  PropTypes
from 'prop-types';

import
  styled
from 'styled-components';

export const Svg = styled.svg`
  height: ${props => props.height || '10vh'};
  width: ${props => props.width || '10vh'};
`;

Svg.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
};