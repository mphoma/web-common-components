import React from 'react'
import { FontSizes, Images, FormFactorTypes } from '../../common/constants'
import { Banner } from './Banner'
import { withFormFactor } from '../../hocs/withFormFactor'
import { NotificationProps } from './NotificationProps'

const infoBanner = (props:NotificationProps) => (
    <Banner {...props}/>
  );
  
  infoBanner.propTypes = {
    ...Banner.propTypes,
  };
  
  infoBanner.defaultProps = Object.assign(
    {...Banner.defaultProps},
  );
  
  export const InfoBanner = withFormFactor({
    [FormFactorTypes.Default]: infoBanner
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
  })as unknown as React.ElementType<NotificationProps>;