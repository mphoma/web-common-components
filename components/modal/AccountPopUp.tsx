import React from 'react'
import { Images } from '../../common/constants'
import { PopUp } from './PopUp'
import { PopUpProps } from './PopUpProps';

export const AccountPopUp = (props:PopUpProps) => <PopUp {...props}/>;

AccountPopUp.propTypes = {
  ...PopUp.propTypes
};

AccountPopUp.defaultProps = {
  ...PopUp.defaultProps,
  icon: Images.Icons.User,
};
