import React from 'react'
import { ColorCodes, FormFactorTypes, Images, FontSizes} from '../../common/constants'
import { Banner } from './Banner'
import { withFormFactor } from '../../hocs/withFormFactor'
import { NotificationProps } from './NotificationProps'

const errorBanner : React.FunctionComponent = (props:NotificationProps) => (
    <Banner {...props}/>
  );
  
  errorBanner.propTypes = {
    ...Banner.propTypes,
  };
  
  errorBanner.defaultProps = Object.assign(
    {...Banner.defaultProps}, {
      backgroundColor: ColorCodes.Red2,
      imageUrl: Images.Icons.ErrorOutline,
    }
  );
  
  export const ErrorBanner = withFormFactor({
    [FormFactorTypes.Default]: errorBanner
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