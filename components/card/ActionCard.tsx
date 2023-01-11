import styled from 'styled-components'
import PropTypes from 'prop-types'
import { ColorCodes } from '../../common/constants'
import { Card } from './Card'
import TextButton from '../button/TextButton'
import { HFillContainer } from '../container/Containers'
import { HSeparator } from '../general/Separator'
import { CardProps } from './CardProps'

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ActionCard = (props: CardProps) => (
  <Card
    {...props}>

    {props.children}

    {props.showSeperator &&

      <HSeparator
        color={ColorCodes.Grey3} />
    }

    <Buttons>

      <HFillContainer />

      {props.onSecondaryClick &&

        <TextButton
          activeColor={ColorCodes.Grey7}
          onClick={props.onSecondaryClick}
          text={props.secondaryText}
        />
      }

      {props.onPrimaryClick &&

        <TextButton
          activeColor={ColorCodes.Red3}
          text={props.primaryText}
          onClick={props.onPrimaryClick}
        />
      }

    </Buttons>

  </Card>

);

ActionCard.propTypes = {
  ...Card.propTypes,
  showSeperator: PropTypes.bool,
  primaryText: PropTypes.string,
  secondaryText: PropTypes.string,
  onPrimaryClick: PropTypes.func,
  onSecondaryClick: PropTypes.func,
};

ActionCard.defaultProps = {
  ...Card.defaultProps,
  showSeperator: false,
  primaryText: 'PRIMARY',
  secondaryText: 'SECONDARY',
  onPrimaryClick: null,
  onSecondaryClick: null,
};
