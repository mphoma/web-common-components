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
import { Base } from '../container/Containers'

const Container = styled(Base)<GeneralProps>`

  display: flex;
  flex: 1 0 auto;
  justify-content: ${props => props.justifyContent || 'center'};
  ${props => props.overflowX && `overflow-x: ${props.overflowX};`}
  ${props => props.overflowY && `overflow-y: ${props.overflowY};`}
  ${props => props.backgroundColor && `background-color: ${props.backgroundColor};`}
  ${props => props.boxShadow && `box-shadow: ${props.boxShadow};`}
  ${props => props.zIndex && `z-index: ${props.zIndex};`}
  ${props => props.position && `position: ${props.position};`}
  ${props => props.top && `top: ${props.top};`}
  ${props => props.width && `width: ${props.width};`}

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const PillBar = (props : GeneralProps) => {

  const [activePill, setActivePill] = useState(props.defaultPill || null);

  useEffect(() => {
    setActivePill(props.defaultPill);
  }, [props.defaultPill]);

  if (!props.pills) {
    return null;
  }

  const onPillClicked = (pill) => {

    props.onPillClicked && props.onPillClicked(pill);
    setActivePill(pill.value);

    PillBar.insights.tag({
      event: `click:${pill.name||pill.id}`
    });
  };

  const pills = [];
  let pill;

  for (let i = 0; i < props.pills.length; i++) {

    pill = props.pills[i];

    if (!pill || !Object.keys(pill).length) {
      continue;
    }

    const active = (activePill && pill.value === activePill) || (!activePill && i === 0);

    pills.push(

      <Pill
        id={`${props.id}_${pill.label}`}
        automationId={`${props.automationId}_${pill.label}`}
        onPillClicked={onPillClicked}
        value={pill.value}
        label={pill.label}
        active={active}
        name={pill.name}
        key={`pill-${props.id}-label-${i}`}
        activeColor={props.activeColor}
        inActiveColor={props.inActiveColor}
        fontSize={props.fontSize}
        padding={props.pillPadding}
        textPadding={props.textPadding}
        margin={props.pillMargin}
        border={props.pillBorder}
        borderRadius={props.pillBorderRadius}
        flex={props.pillFlex}
        fontFamily={props.fontFamily}
        activeFontColor={props.activeFontColor}
        inActiveFontColor={props.inActiveFontColor}
        fontWeight={props.fontWeight}
      />
    );
  }

  return (

    <Container
      id={props.id}
      automationId={props.automationId}
      flex={props.flex}
      backgroundColor={props.pillBarBackgroundColor}
      boxShadow={props.pillBarBoxShadow}
      zIndex={props.pillBarZIndex}
      position={props.pillBarPosition}
      top={props.pillBarTop}
      width={props.pillBarWidth}
      padding={props.padding}
      margin={props.margin}
      minHeight={props.minHeight}
      minWidth={props.minWidth}
      maxHeight={props.maxHeight}
      maxWidth={props.maxWidth}
      overflowX={props.overflowX}
      overflowY={props.overflowY}
      justifyContent={props.justifyContent}>

        {pills}
    </Container>
  );
};

PillBar.propTypes = {
  ...Base.propTypes,
  automationId: PropTypes.string.isRequired,
  pills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  onPillClicked: PropTypes.func,
  defaultPill: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontSize: PropTypes.string,
  pillBarBackgroundColor: PropTypes.string,
  activeColor: PropTypes.string,
  inActiveColor: PropTypes.string,
  inActiveFontColor: PropTypes.string,
  activeFontColor: PropTypes.string,
  overflowX: PropTypes.string,
  overflowY: PropTypes.string,
  pillPadding: PropTypes.string,
  pillMargin: PropTypes.string,
  pillBorder: PropTypes.string,
  pillBorderRadius: PropTypes.string,
  pillFlex: PropTypes.string,
  pillBarShadow: PropTypes.string,
  pillBarZIndex: PropTypes.string,
  pillBarPosition: PropTypes.string,
  pillBarWidth: PropTypes.string,
  pillBarTop: PropTypes.string,
  textPadding: PropTypes.string,
  fontWeight: PropTypes.string
};

PillBar.defaultProps = {
  ...Base.defaultProps,
  id: 'unknown-pill-bar',
  automationId: 'unknown-pill-bar',
  justifyContent: 'center',
  pills: [],
  onPillClicked: () => {},
  defaultPill: null,
  fontSize: undefined,
  pillBarBackgroundColor: ColorCodes.Grey3,
  activeColor: ColorCodes.Grey6,
  inActiveColor: ColorCodes.Transparent,
  inActiveFontColor: ColorCodes.Grey6,
  activeFontColor: ColorCodes.White,
  overflowX: undefined,
  overflowY: undefined,
  pillPadding: undefined,
  pillMargin: '15px 10px',
  pillBorder: `1px solid ${ColorCodes.Grey7}`,
  pillBorderRadius: '20px',
  pillFlex: undefined,
  pillBarShadow: undefined,
  pillBarZIndex: undefined,
  pillBarPosition: undefined,
  pillBarWidth: undefined,
  pillBarTop: undefined,
  textPadding: undefined,
  fontWeight: undefined,
};

// PillBar.insights = Insights.with();