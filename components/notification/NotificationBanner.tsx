import React from 'react'
import { FormFactorTypes, Images, FontSizes } from '../../common/constants'
import { Banner } from './Banner'
import { withFormFactor } from '../../hocs/withFormFactor'
import { NotificationProps } from './NotificationProps'

const notificationBanner = (props:NotificationProps) => (
    <Banner {...props}/>
  );
  
  notificationBanner.propTypes = {
    ...Banner.propTypes,
  };
  
  notificationBanner.defaultProps = Object.assign(
    {...Banner.defaultProps}, {
      imageUrl: Images.Icons.Bell,
    }
  );
  
  export const NotificationBanner = withFormFactor({
    [FormFactorTypes.Default]: notificationBanner
  }, {
    formFactorProps: {
      [FormFactorTypes.Mobi]: {
        height: '7.38vh',
        padding: '0 5.62vw',
        closeImageUrl: Images.Icons.CloseWhite,
        fontSize: FontSizes.Smaller,
      },
      [FormFactorTypes.Tablet]: {
        padding: '0 4.29vw',
      }
    },
  });