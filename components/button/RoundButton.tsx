import { Button } from './Button'
import { ColorCodes, FormFactorTypes } from '../../common/constants';
import { withFormFactor } from '../../hocs/withFormFactor';
import { ButtonProps } from './ButtonProps';

const roundButton = (props: ButtonProps) => <Button {...props} borderRadius={props.height} />;

roundButton.propTypes = { ...Button.propTypes };

roundButton.defaultProps = {
  ...Button.defaultProps,
  activeColor: ColorCodes.Grey10,
  activeBorderColor: ColorCodes.Grey10,
  activeBackgroundColor: ColorCodes.White,
  disabledColor: ColorCodes.Grey5,
  disabledBorderColor: ColorCodes.Grey5,
  disabledBackgroundColor: ColorCodes.White,
};

export const RoundButton = withFormFactor({
  [FormFactorTypes.Default]: roundButton
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
    },
  },
})as unknown as React.ElementType<ButtonProps>;
