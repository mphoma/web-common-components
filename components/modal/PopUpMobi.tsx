import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Images, ColorCodes } from '../../common/constants'
import { Image } from '../general/Image'
import { VFillContainerVH } from '../container/Containers'
import { ContainedButton } from '../button/ContainedButton'
import TextButton  from '../button/TextButton'
import { BackButton } from '../button/BackButton'
import { TextList } from '../text/TextList'
import { BodyText } from '../text/BodyText'
import { H2 } from '../text/H2'
import { Space } from '../general/Space'
import { PopUpProps } from './PopUpProps'

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const BackContainer = styled.div`
  display: flex;
  position: absolute;
  top: 5.3vmin;
  left: 5.3vmin;
`;

const CloseContainer = styled.div`
  display: flex;
  position: absolute;
  top: 5.3vmin;
  right: 5.3vmin;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const PopUpMobi = (props:PopUpProps) => (

  <Container>

    { props.onBackClick &&

      <BackContainer>

        <BackButton
          text={'BACK'}
          onClick={props.onBackClick}
        />

      </BackContainer>
    }

    <CloseContainer>

      {/* <ColorSvg
        src={Images.Icons.Close}
        color={ColorCodes.Grey6}
        onClick={props.onCloseClick}
        height={'4vh'}
        width={'4vh'}
      /> */}

    </CloseContainer>

    <VFillContainerVH>

      { !!props.icon &&

        <React.Fragment>
          <Image
            width={'10vh'}
            height={'10vh'}
            src={props.icon}/>

          {/* <Space
            height={'5.9vh'}
          /> */}
        </React.Fragment>
      }

      <TextList
        component={H2}
        text={props.heading}
      />

      {/* <Space
        height={'2.7vh'}
      /> */}

      <TextList
        component={BodyText}
        text={props.bodyText}
        color={ColorCodes.Grey7}
      />

      {props.children}

    </VFillContainerVH>

    <Buttons>

      { props.onPrimaryClick &&

        <ContainedButton
          width={'80vw'}
          text={props.primaryText}
          onClick={props.onPrimaryClick}
        />
      }

      { props.onSecondaryClick &&

        <React.Fragment>

          {/* <Space
            height={'3.2vh'}
          /> */}

          <TextButton
            activeColor={ColorCodes.Grey7}
            onClick={props.onSecondaryClick}
            text={props.secondaryText}
            height={'auto'}
          />

        </React.Fragment>
      }

      <Space
        height={'5vh'}
      />

    </Buttons>

  </Container>
);

PopUpMobi.propTypes = {
  icon: PropTypes.string,
  heading: PropTypes.array,
  bodyText: PropTypes.array,
  onPrimaryClick: PropTypes.func,
  onSecondaryClick: PropTypes.func,
  onBackClick: PropTypes.func,
  onCloseClick: PropTypes.func,
};

PopUpMobi.defaultProps = {
  icon: null,
  heading: [],
  bodyText: [],
  primaryText: 'LABEL',
  secondaryText: 'BUTTON LABEL',
  onPrimaryClick: null,
  onSecondaryClick: null,
  onBackClick: null,
  onCloseClick: () => {},
};