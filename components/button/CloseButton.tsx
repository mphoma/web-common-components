import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Base as Container } from '../container/Containers';
import { ButtonProps } from './ButtonProps';
import { Image } from '../general/Image';
import { Images } from '../../common/constants';

export default function CloseButton(props: ButtonProps) {
  return (
    <Container
      display={props.display}
      flex={props.flex}
      justifyContent={props.alignItems}
      alignItems={props.alignItems}
      padding={props.padding}
      margin={props.margin}
      height={props.height}
      width={props.width}
      maxWidth={props.maxWidth}
      minWidth={props.minWidth}
      maxHeight={props.maxHeight}
      minHeight={props.minHeight}
      hoverBackgroundColor={props.hoverBackgroundColor}
      cursor={props.cursor}
      borderRadius={props.height}
      onClick={(e) => props.onClick && props.onClick(e)}
    >
      <Image
        height={props.imageHeight}
        width={props.imageWidth}
        objectFit={props.objectFit}
        src={props.src} />

    </Container>
  )
}

CloseButton.propTypes = {
  ...Container.propTypes,
  onClick: PropTypes.func.isRequired,
  imageHeight: PropTypes.string,
  imageWidth: PropTypes.string,
  objectFit: PropTypes.string,
  src: PropTypes.string,
};

CloseButton.defaultProps = {
  ...Container.defaultProps,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  hoverBackgroundColor: '#EBEBEB',
  cursor: 'pointer',
  height: '8vmin',
  width: '8vmin',
  onClick: () => { },
  imageHeight: '60%',
  imageWidth: '60%',
  objectFit: 'contain',
  src: Images.Icons.Close,
};
