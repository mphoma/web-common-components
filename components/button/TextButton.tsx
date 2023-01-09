import { Button } from './Button'
import { ButtonProps } from './ButtonProps';

export default function TextButton(props: ButtonProps) {
  return (
    <Button {...props}></Button>
  )
}
TextButton.propTypes = { ...Button.propTypes };

TextButton.defaultProps = Object.assign(
  { ...Button.defaultProps },
  {
    border: '0',
    width: 'auto',
    activeColor: '#E60000',
    activeBackgroundColor: '#FFFFFF',
    activeOpacity: '0.25',
    disabledColor: '#CCCCCC',
    disabledBackgroundColor: '#E60000',
  }
);