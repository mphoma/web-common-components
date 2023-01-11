import React from 'react'
import { FormFactorTypes } from '../../common/constants'
import { Snackbar } from './Snackbar'
import { withFormFactor } from '../../hocs/withFormFactor'
import { NotificationProps } from './NotificationProps'

const successSnackbar = (props:NotificationProps) => <Snackbar {...props}/>;

successSnackbar.propTypes = {
  ...Snackbar.propTypes,
};

successSnackbar.defaultProps = Object.assign(
  {...Snackbar.defaultProps},
);

export const SuccessSnackbar = withFormFactor({
  [FormFactorTypes.Default]: successSnackbar
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
})as unknown as React.ElementType<NotificationProps>;
