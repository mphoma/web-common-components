import
  styled
from 'styled-components';

import { Themes } from '../../common/theme';
import 
  PropTypes
from 'prop-types';

export const ThemedStyle = styled.div``;

ThemedStyle.propTypes = {
  theme: PropTypes.object.isRequired,
};

ThemedStyle.defaultProps = {
  theme: Themes.PreLogin,
};