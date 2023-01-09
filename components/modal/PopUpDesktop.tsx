import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Images, ColorCodes } from '../../common/constants'
import { HSeparator } from '../general/Separator'
import { Image } from '../general/Image'
import { VFillContainerVH, HFillContainer } from '../container/Containers'
import { ContainedButton } from '../button/ContainedButton'
import { BackButton } from '../button/BackButton'
import  TextButton  from '../button/TextButton'
import { TextList } from '../text/TextList'
import { BodyText } from '../text/BodyText'
import { H2 } from '../text/H2'
import { PopUpProps } from './PopUpProps'

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  position: relative;
  flex-direction: column;
  width: 76vw;
  height: 66vh;
  border-radius: 4px;
  box-shadow: 0 10px 70px 0 rgba(0, 0, 0, 0.3);
  padding: 2.11vh 2.77vw;
`;

const CloseContainer = styled.div`
  display: flex;
  position: absolute;
  top: 3vmin;
  right: 3vmin;
`;
const Buttons = styled.div<PopUpProps>`
  display: flex;
  justify-content: ${props => props.justifyContent || 'flex-end'};
  align-items: center;
  padding: 2.11vh 0;
`;

export const PopUpDesktop = (props:PopUpProps) => (

  <Container>

    <CloseContainer>

      {/* <ColorSvg
        src={Images.Icons.Close}
        color={ColorCodes.Grey6}
        onClick={props.onCloseClick}
        height={'2.22vmin'}
        width={'2.22vmin'}
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
            height={'4.2vh'}
          /> */}
        </React.Fragment>
      }

      <TextList
        component={H2}
        text={props.heading}
      />

      {/* <Space
        height={'0.5vh'}
      /> */}

      <TextList
        component={BodyText}
        text={props.bodyText}
        color={ColorCodes.Grey7}
      />

      {props.children}

    </VFillContainerVH>

    { props.onSecondaryClick || props.onBackClick

      ? <React.Fragment>

          <HSeparator/>

          <Buttons>

            { props.onBackClick &&

              <BackButton
                text={'BACK'}
                onClick={props.onBackClick}
              />
            }

            <HFillContainer/>

            { props.onSecondaryClick &&

              <TextButton
                activeColor={ColorCodes.Grey7}
                onClick={props.onSecondaryClick}
                text={props.secondaryText}
                width={'10.4vw'}
              />
            }

            { props.onPrimaryClick &&

              <ContainedButton
                text={props.primaryText}
                onClick={props.onPrimaryClick}
              />
            }

          </Buttons>

        </React.Fragment>

      : <React.Fragment>

          <Buttons
            justifyContent={'center'}>

              { props.onPrimaryClick &&

                <ContainedButton
                  text={props.primaryText}
                  onClick={props.onPrimaryClick}
                />
              }

          </Buttons>

          {/* <Space height={'2.5vh'}/> */}

        </React.Fragment>
    }

  </Container>
);

PopUpDesktop.propTypes = {
  icon: PropTypes.string,
  heading: PropTypes.array,
  bodyText: PropTypes.array,
  onPrimaryClick: PropTypes.func,
  onSecondaryClick: PropTypes.func,
  onBackClick: PropTypes.func,
  onCloseClick: PropTypes.func,
};

PopUpDesktop.defaultProps = {
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
