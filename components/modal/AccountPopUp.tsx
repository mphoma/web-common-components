import
  React
  from 'react';
import { Images } from '../../common/constants';
import { PopUp } from './PopUp';
import { PopUpProps } from './PopUpProps';

export const AccountPopUp = (props :PopUpProps) => <PopUp {...props}/>;

AccountPopUp.defaultProps = {
  icon: Images.Icons.User,
};