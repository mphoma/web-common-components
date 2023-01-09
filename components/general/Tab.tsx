import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { ColorCodes } from '../../common/constants'
import { H4Regular } from '../text/H4'

interface TabProps{
    borderBottom?: string,
    flex?: string,
    padding?: string,
    active?: string,
    activeColor?: string,
    onTabClicked?: string,
    id?: string,
    automationId?: string,
    label?: string,
    textPadding?: string,
    fontSize?: string,
    name?: string,
    value?: string,
    inactiveColor?:string,
    onTabClick?:string
}

const Container = styled.div<TabProps>`
  display: flex;
  flex-direction: column;
  border-bottom: ${props => props.borderBottom};
  justify-content: center;
  align-items: center;
  cursor: pointer;
  flex: ${props => props.flex || '1 0 auto'};
  ${props => props.padding && `padding: ${props.padding};`}
`;

export const Tab = (props: TabProps) => {

  const tabRef = React.useRef(null);
  const color = props.active && props.activeColor || props.inactiveColor;

  if (props.active && tabRef.current) {

    // tabRef.current.scrollIntoView();
  }

//   const onTabClick = () => {

//     props.onTabClicked && props.onTabClicked({
//       id: props.id,
//       name: props.name,
//       value: props.value,
//       label: props.label,
//     });
//   };

  return (

    <Container
      id={props.id}
      automationId={props.automationId}
      ref={tabRef}
    //   onClick={onTabClick}
      color={color}
      active={props.active}
      padding={props.padding}
      flex={props.flex}
      borderBottom={props.borderBottom}>

      <H4Regular
        text={props.label}
        color={color}
        padding={props.textPadding}
        fontSize={props.fontSize}
      />

    </Container>
  )
};

Tab.propTypes = {
  automationId: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  active: PropTypes.bool,
  onTabClicked: PropTypes.func,
  textPadding: PropTypes.string,
  inactiveColor: PropTypes.string,
  activeColor: PropTypes.string,
  borderBottom: PropTypes.string,
  padding: PropTypes.string,
  flex: PropTypes.string,
};

Tab.defaultProps = {
  id: 'unknown-tab',
  automationId: 'unknown-tab',
  name: null,
  value: '',
  label: '',
  active: false,
  onTabClicked: () => {},
  textPadding: '1vmin',
  inactiveColor: ColorCodes.Grey9,
  activeColor: ColorCodes.Red1,
  borderBottom: `solid 1px ${ColorCodes.Transparent}`,
  padding: undefined,
  flex: undefined,
};
