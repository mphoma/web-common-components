import PropTypes from 'prop-types'
import React from 'react'
import { Images } from '../../common/constants'
import { PopUp } from './PopUp'
import { PopUpProps } from './PopUpProps';

export const InfoPopUp = ( props: PopUpProps) => <PopUp {...props}/>;

InfoPopUp.propTypes = {
  ...PopUp.propTypes
};

InfoPopUp.defaultProps = {
  ...PopUp.defaultProps,
  icon: Images.Icons.InfoCircle,
};