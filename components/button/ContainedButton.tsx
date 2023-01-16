import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './Button'
import { ColorCodes, FormFactorTypes } from '../../common/constants'
import { withFormFactor } from '../../hocs/withFormFactor'
import { ButtonProps } from './ButtonProps'

const containedButton = React.forwardRef((props: ButtonProps, ref: any) => {
  const inputRef = React.useRef();
  React.useImperativeHandle(ref, () => inputRef.current);

  return (
    <Button
      buttonRef={inputRef}
      {...props} />
  )
})
containedButton.displayName = 'containedButton'

containedButton.propTypes = {
  ...Button.propTypes,
  buttonRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ])
};

containedButton.defaultProps = {
  ...Button.defaultProps,
  activeOpacity: '0.25',
};

export const ContainedButton = withFormFactor({
  [FormFactorTypes.Default]: containedButton
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
      activeColor: ColorCodes.White,
      activeBackgroundColor: ColorCodes.Grey9,
      activeBorderColor: ColorCodes.Grey9,
      focusColor: ColorCodes.White,
      focusBackgroundColor: ColorCodes.Red1,
      focusBorderColor: ColorCodes.Red1,
      focusBoxShadow: `0 0 0 1px ${ColorCodes.Red1}`,
    },
  },
});