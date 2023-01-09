import React from 'react'
import PropTypes from 'prop-types'
import  {Button } from './Button'
import { ColorCodes, FormFactorTypes,Images } from '../../common/constants'
import { withFormFactor } from '../../hocs/withFormFactor'
import { ButtonProps } from './ButtonProps'

const iconButton = (props:ButtonProps) => <Button {...props} borderRadius={props.height}/>;

iconButton.propTypes = {...Button.propTypes};

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
});




// .add('Link Button', () => <LinkButton onClick={action('Clicked Link Button')} text={'LABEL'}/>)
// .add('Link Button Disabled', () => <LinkButton onClick={action('Clicked Link Button Disabled')} text={'LABEL'} isEnabled={false}/>)
// .add('Link Button Teal', () => <LinkButton activeColor={ColorCodes.Blue1} onClick={action('Clicked Link Button Teal')} text={'LABEL'}/>)
// .add('Outline Button', () => <OutlineButton onClick={action('Clicked Outline Button')} text={'LABEL'}/>)
// .add('Outline Button Disabled', () => <OutlineButton onClick={action('Clicked Outline Button Disabled')} text={'LABEL'} isEnabled={false}/>)
// .add('Round Button', () => <RoundButton onClick={action('Clicked Round Button')} text={'LABEL'}/>)
// .add('Round Button Disabled', () => <RoundButton onClick={action('Clicked Round Button Disabled')} text={'LABEL'} isEnabled={false}/>)
// .add('Flat Button', () => <TextButton onClick={action('Clicked Flat Button')} text={'LABEL'}/>)
// .add('Flat Button Disabled', () => <TextButton onClick={action('Clicked Flat Button Disabled')} text={'LABEL'} isEnabled={false}/>)
// .add('Back Button', () => <BackButton onClick={action('Clicked Back Button')}/>)
// .add('Back Button Disabled', () => <BackButton onClick={action('Clicked Back Button Disabled')} isEnabled={false}/>)
// .add('Tooltip Button', () => <TooltipButton onClick={action('Clicked Tooltip Button')} height={'7vh'} width={'7vh'}/>);