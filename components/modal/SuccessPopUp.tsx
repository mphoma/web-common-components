import React from 'react'
import { Images } from '../../common/constants'
import { PopUp } from './PopUp'
import { PopUpProps } from './PopUpProps';

export const SuccessPopUp = ( props:PopUpProps ) => <PopUp {...props}/>;

SuccessPopUp.defaultProps = {
  icon: Images.Icons.SuccessCircle,
};
