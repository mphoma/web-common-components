import React from 'react'
import { Images } from '../../common/constants'
import { PopUp } from './PopUp'
import { PopUpProps } from './PopUpProps';

export const SuccessPopUp = ( props:PopUpProps ) => <PopUp {...props}/>;

SuccessPopUp.propTypes = {
  ...PopUp.propTypes
};

SuccessPopUp.defaultProps = {
  ...PopUp.defaultProps,
  icon: Images.Icons.SuccessCircle,
};
