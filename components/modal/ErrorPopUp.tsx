import React from 'react'
import { Images } from '../../common/constants'
import { PopUp } from './PopUp'
import { PopUpProps } from './PopUpProps';

export const ErrorPopUp = ( props:PopUpProps ) => <PopUp {...props}/>;

ErrorPopUp.defaultProps = {
  icon: Images.Icons.ErrorCircle,
};