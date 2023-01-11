import React from 'react'
import { storiesOf } from '@storybook/react'
import { CardProps } from '../components/card/CardProps'
import { ActionCard } from '../components/card/ActionCard'
import { Card } from '../components/card/Card';
import styled from 'styled-components'
import { VFillContainerVH } from '../components/container/Containers'
import { ColorCodes } from '../common/constants'
import { action } from '@storybook/addon-actions'
import { ComponentMeta, ComponentStory } from '@storybook/react'


export default {
  tiitle: 'Card',
  component: Card,
} as ComponentMeta<typeof Card>

export const CardOne : ComponentStory<typeof Card> = () => <Card  boxShadow={'none'}
width={'400px'}
height={'300px'}/>;
CardOne.storyName  = 'Card - No shadow';

export const CardTwo : ComponentStory<typeof Card> = () => <Card width={'400px'}
height={'300px'}/>;
CardTwo.storyName  = 'Card - With shadow';