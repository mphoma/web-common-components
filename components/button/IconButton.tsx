import { Button } from './Button'
import { ColorCodes, FormFactorTypes, Images } from '../../common/constants'
import { withFormFactor } from '../../hocs/withFormFactor'
import { ButtonProps } from './ButtonProps'

const iconButton = (props: ButtonProps) =>
 <Button {...props} borderRadius={props.height} />;

iconButton.propTypes = { ...Button.propTypes };

iconButton.defaultProps = {
  ...Button.defaultProps,
  iconUrl: Images.Icons.HomeOutline,
};

export const IconButton = withFormFactor({
  [FormFactorTypes.Default]: iconButton
}, {
  formFactorProps: {
    [FormFactorTypes.Default]: {
      width: '100%',
      minWidth: '110px',
      height: '44px',
    },
    [FormFactorTypes.Feature]: {
      minWidth: '86px',
      height: '24px',
      focusBorderColor: ColorCodes.Grey5,
    },
  },
})as unknown as React.ElementType<ButtonProps>;