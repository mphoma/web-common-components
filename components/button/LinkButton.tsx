import React from 'react'
import PropTypes from 'prop-types'
import {Button} from './Button'
import { ButtonProps } from './ButtonProps';
import { ColorCodes } from '../../common/constants';

export const LinkButton = (props:ButtonProps) => <Button {...props} text={`${props.text} >`}/>;

LinkButton.propTypes = {...Button.propTypes};

LinkButton.defaultProps = Object.assign(
  {...Button.defaultProps},
  {
    border: '0',
    width: 'auto',
    activeColor: ColorCodes.Red1,
    activeBorderColor: ColorCodes.Transparent,
    activeBackgroundColor: ColorCodes.White,
    disabledColor: ColorCodes.Grey5,
    disabledBorderColor: ColorCodes.Transparent,
    disabledBackgroundColor: ColorCodes.White,
  }
);