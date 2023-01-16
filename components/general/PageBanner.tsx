import React, { Fragment} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withFormFactor } from '../../hocs/withFormFactor'
import { ColorCodes, Images, FormFactorTypes } from '../../common/constants'
import { H1 } from '../text/H1'
import { H2 } from '../text/H2'
import { Base } from '../container/Containers'
import { GeneralProps } from './GeneralProps'
import { ContainerProps } from '../container/ContainerProps'
import { useFormFactor } from '../../hooks/useFormFactor'

const Container = styled(Base)<GeneralProps>`
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: ${props => props.padding || '5vh 0'};
  justify-content: center;
  align-items: center;

  ${props => (props.position && `position: ${props.position};`)}
  ${props => (props.imageUrl && `background-image: url(${props.imageUrl});`)}
  ${props => (props.backgroundPosition && `background-position: ${props.backgroundPosition};`)}
`;

export const PageBannerDesktop = (props: GeneralProps) => {

  const formFactor = useFormFactor();
  const featureScreen = formFactor === FormFactorTypes.Feature;

  return (

    <Container
      imageUrl={props.imageUrl}
      position={props.position}
      flex={props.flex}
      height={props.height}
      width={props.width}
      padding={props.padding}
      margin={props.margin}
      minHeight={props.minHeight}
      minWidth={props.minWidth}
      maxHeight={props.maxHeight}
      maxWidth={props.maxWidth}
      backgroundColor={props.backgroundColor}
      backgroundPosition={props.backgroundPosition}>

      { !!props.heading &&

        <H1
          text={props.heading}
          color={props.headingColor}
          padding={'0 0 2vh 0'}/>
      }

      { !!props.subHeading && !featureScreen &&

        <H2
          text={props.subHeading}
          color={props.subHeadingColor}
          padding={'0 0 2vh 0'}/>
      }

      { !!props.children &&

        <Fragment>
          {props.children}
        </Fragment>
      }

    </Container>
  );
};

PageBannerDesktop.propTypes = {
  ...Base.propTypes,
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  position: PropTypes.string,
  imageUrl: PropTypes.string,
  backgroundPosition: PropTypes.string,
  headingColor: PropTypes.string,
  subHeadingColor: PropTypes.string,
};

PageBannerDesktop.defaultProps = {
  ...Base.defaultProps,
  heading: '',
  subHeading: '',
  position: null,
  imageUrl: Images.Backgrounds.Banner,
  backgroundColor: ColorCodes.Red1,
  backgroundPosition: null,
  headingColor: ColorCodes.White,
  subHeadingColor: ColorCodes.White,
  flex: null,
  height: '13vh',
  width: null,
  padding: null,
};

export const PageBanner = withFormFactor({
  [FormFactorTypes.Default]: PageBannerDesktop
}, {
  formFactorProps: {
    [FormFactorTypes.Feature]: {
      height: '5vh',
      imageUrl: '',
    },
    [FormFactorTypes.Mobi]: {
      height: '7vh',
    },
    [FormFactorTypes.Tablet]: {
      height: '9vh',
    },
  },
});