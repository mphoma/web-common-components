import React from 'react'
import { Images } from '../../common/constants'
import { PopUp } from './PopUp'
import { PopUpProps } from './PopUpProps';

export const InfoPopUp = ( props: PopUpProps) => <PopUp {...props}/>;

InfoPopUp.defaultProps = {
  icon: Images.Icons.InfoCircle,
};