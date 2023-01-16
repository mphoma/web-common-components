import React, {
    useState,
    useEffect,} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withFormFactor } from '../../hocs/withFormFactor'
import { ColorCodes, Images, FormFactorTypes } from '../../common/constants'
import { H4Regular } from '../text/H4'
import { GeneralProps } from './GeneralProps'
import { Pill } from './Pill'
import {Base } from '../container/Containers'
import { Tab } from './Tab'

    const Container = styled(Base)<GeneralProps>`
  display: flex;
  flex: 1 0 auto;
  justify-content: ${props => props.justifyContent || 'center'};
  ${props => props.backgroundColor && `background-color: ${props.backgroundColor};`}
  ${props => props.overflowX && `overflow-x: ${props.overflowX};`}
  ${props => props.overflowY && `overflow-y: ${props.overflowY};`}
  ${props => props.zIndex && `z-index: ${props.zIndex};`}
  ${props => props.position && `position: ${props.position};`}
  ${props => props.top && `top: ${props.top};`}
  ${props => props.width && `width: ${props.width};`}
  ${props => props.boxShadow && `box-shadow: ${props.boxShadow};`}

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const TabBar = (props : GeneralProps) => {

  const [activeTab, setActiveTab] = useState(props.defaultTab || null);

  useEffect(() => {
    setActiveTab(props.defaultTab);
  }, [props.defaultTab]);

  if (!props.tabs) {
    return null;
  }

  const onTabClicked = (tab) => {

    props.onTabClicked && props.onTabClicked(tab);
    setActiveTab(tab.value);

    TabBar.insights.tag({
      event: `click:${tab.name||tab.id}`
    });
  };

  const tabs = [];
  let tab;

  for (let i = 0; i < props.tabs.length; i++) {

    tab = props.tabs[i];

    if (!tab || !Object.keys(tab).length) {
      continue;
    }

    const active = (activeTab && tab.value === activeTab) || (!activeTab && i === 0);

    tabs.push(

      <Tab
        id={`${props.id}_${tab.label}`}
        automationId={`${props.automationId}_${tab.label}`}
        onTabClicked={onTabClicked}
        value={tab.value}
        label={tab.label}
        active={active}
        borderBottom={(active && props.activeBorderBottom) || props.inActiveBorderBottom}
        name={tab.name}
        key={`tab-${props.id}-label-${i}`}
        activeColor={props.activeColor}
        inactiveColor={props.inactiveColor}
        fontSize={props.fontSize}
        padding={props.tabPadding}
        flex={props.tabFlex}
      />
    );
  }

  return (

    <Container
      id={props.id}
      automationId={props.automationId}
      flex={props.flex}
      zIndex={props.tabBarZIndex}
      position={props.tabBarPosition}
      width={props.tabBarWidth}
      top={props.tabBarTop}
      padding={props.padding}
      backgroundColor={props.backgroundColor}
      margin={props.margin}
      minHeight={props.minHeight}
      minWidth={props.minWidth}
      maxHeight={props.maxHeight}
      maxWidth={props.maxWidth}
      overflowX={props.overflowX}
      overflowY={props.overflowY}
      justifyContent={props.justifyContent}
      boxShadow={props.boxShadow}>

        {tabs}
    </Container>
  );
};

TabBar.propTypes = {
  ...Base.propTypes,
  automationId: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  onTabClicked: PropTypes.func,
  defaultTab: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontSize: PropTypes.string,
  activeColor: PropTypes.string,
  inActiveColor: PropTypes.string,
  activeBorderBottom: PropTypes.string,
  inActiveBorderBottom: PropTypes.string,
  overflowX: PropTypes.string,
  overflowY: PropTypes.string,
  tabPadding: PropTypes.string,
  tabFlex: PropTypes.string,
  tabBarZIndex: PropTypes.string,
  tabBarPosition: PropTypes.string,
  tabBarWidth: PropTypes.string,
  tabBarTop: PropTypes.string,
  backgroundColor: PropTypes.string,
  boxShadow: PropTypes.string,
};

TabBar.defaultProps = {
  ...Base.defaultProps,
  id: 'unknown-tab-bar',
  automationId: 'unknown-tab-bar',
  justifyContent: 'center',
  tabs: [],
  onTabClicked: () => {},
  defaultTab: null,
  fontSize: undefined,
  activeColor: ColorCodes.Red1,
  inActiveColor: ColorCodes.Grey9,
  activeBorderBottom: `solid 2px ${ColorCodes.Red1}`,
  inActiveBorderBottom: `solid 1px ${ColorCodes.Transparent}`,
  overflowX: undefined,
  overflowY: undefined,
  tabPadding: undefined,
  tabFlex: undefined,
  tabBarZIndex: undefined,
  tabBarPosition: undefined,
  tabBarWidth: undefined,
  tabBarTop: undefined,
  backgroundColor: undefined,
  boxShadow: undefined,
};

TabBar.insights = Insights.with();