import
  styled
from 'styled-components';
import { GeneralProps } from './GeneralProps';

export const Space = styled.div<GeneralProps>`
  height: ${props => props.height};
  width: ${props => props.width};
  `
  ;