import React from 'react'
import { ColorCodes, FontSizes, Images, FormFactorTypes } from '../../common/constants'
import { Banner } from './Banner'
import { withFormFactor } from '../../hocs/withFormFactor'
import { NotificationProps } from './NotificationProps'

const warningBanner: React.FunctionComponent<NotificationProps> = props => (
    <Banner {...props}/>
  );
  
  warningBanner.propTypes = {
    ...Banner.propTypes,
  };
  
  export const WarningBanner = withFormFactor({
    [FormFactorTypes.Default]: warningBanner
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