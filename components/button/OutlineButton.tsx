import  {Button } from './Button'
import { ButtonProps } from './ButtonProps';
import { ColorCodes, FormFactorTypes } from '../../common/constants';
import { withFormFactor } from '../../hocs/withFormFactor';

const outlineButton = (props:ButtonProps) => <Button {...props}/>;

outlineButton.propTypes = {...Button.propTypes};

outlineButton.defaultProps = {
  ...Button.defaultProps,
  activeColor: ColorCodes.Grey9,
  activeBorderColor: ColorCodes.Grey9,
  activeBackgroundColor: ColorCodes.White,
  activeOpacity: '0.25',
  disabledColor: ColorCodes.Grey5,
  disabledBorderColor: ColorCodes.Grey5,
  disabledBackgroundColor: ColorCodes.White,
};

export const OutlineButton = withFormFactor({
  [FormFactorTypes.Default]: outlineButton,
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
      focusColor: ColorCodes.White,
      focusBackgroundColor: ColorCodes.Red1,
      focusBorderColor: ColorCodes.Red1,
      focusBoxShadow: `0 0 0 1px ${ColorCodes.Red1}`,
    },
  },
})as unknown as React.ElementType<ButtonProps>;
