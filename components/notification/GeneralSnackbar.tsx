import React from 'react'
import { ColorCodes, FormFactorTypes } from '../../common/constants'
import { withFormFactor } from '../../hocs/withFormFactor'
import { Snackbar } from './Snackbar'
import { NotificationProps } from './NotificationProps'


const generalSnackbar = (props:NotificationProps) => <Snackbar {...props}/>;

generalSnackbar.propTypes = {
  ...Snackbar.propTypes,
};

generalSnackbar.defaultProps = Object.assign(
  {...Snackbar.defaultProps}, {
    backgroundColor: ColorCodes.Black,
  }
);

export const GeneralSnackbar = withFormFactor({
  [FormFactorTypes.Default]: generalSnackbar
}, {
  formFactorProps: {
    [FormFactorTypes.Mobi]: {
      width: '100vw',
      padding: '0 10.6vw 6.26vh',
    },
    [FormFactorTypes.Tablet]: {
      padding: '0 0 4.44vh 5.20vw',
    },
  },
});