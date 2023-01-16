import React from 'react'
import { ActionCard } from '../components/card/ActionCard'
import { Card } from '../components/card/Card';
import { action } from '@storybook/addon-actions'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  tiitle: 'Card',
  component: Card,
  subcomponents: { ActionCard }
} as ComponentMeta<typeof Card>

export const CardI: ComponentStory<typeof Card> = () => <Card boxShadow={'none'}
  width={'400px'}
  height={'300px'} />;
CardI.storyName = 'Card - No shadow';

export const CardII: ComponentStory<typeof Card> = () => <Card width={'400px'}
  height={'300px'} />;
CardII.storyName = 'Card - With shadow';

export const CardIII: ComponentStory<typeof Card> = () => <ActionCard boxShadow={'none'}
  width={'400px'}
  height={'300px'}
  justifyContent={'flex-end'}
  showSeperator={true}
  onPrimaryClick={action('Primary Action Clicked')} />
CardIII.storyName = 'Action Card - No Shadow With Separator One Call To Action'

export const CardIV: ComponentStory<typeof Card> = () => <ActionCard boxShadow={'none'}
  width={'400px'}
  height={'300px'}
  justifyContent={'flex-end'}
  showSeperator={true}
  onPrimaryClick={action('Primary Action Clicked')}
  onSecondaryClick={action('Secondary Action Clicked')} />
CardIV.storyName = 'Action Card - No Shadow With Separator Two Calls To Action'

export const CardV: ComponentStory<typeof Card> = () => <ActionCard boxShadow={'none'}
  width={'400px'}
  height={'300px'}
  justifyContent={'flex-end'}
  showSeperator={false}
  primaryText={'CTA 1'}
  onPrimaryClick={action('Primary Action Clicked')} />
CardV.storyName = 'Action Card - No Shadow No Separator One Call To Action'

export const CardVI: ComponentStory<typeof Card> = () => <ActionCard
  boxShadow={'none'}
  width={'400px'}
  height={'300px'}
  justifyContent={'flex-end'}
  showSeperator={false}
  primaryText={'CTA 1'}
  secondaryText={'CTA 2'}
  onPrimaryClick={action('Primary Action Clicked')}
  onSecondaryClick={action('Secondary Action Clicked')} />
CardVI.storyName = 'Action Card - No Shadow No Separator Two Call To Actions'

export const CardVII: ComponentStory<typeof Card> = () => <ActionCard
  width={'400px'}
  height={'300px'}
  justifyContent={'flex-end'}
  showSeperator={true}
  onPrimaryClick={action('Primary Action Clicked')} />
CardVII.storyName = 'Action Card - With Shadow With Separator Two Calls To Action'

export const CardVIII: ComponentStory<typeof Card> = () => <ActionCard
width={'400px'}
height={'300px'}
justifyContent={'flex-end'}
showSeperator={true}
onPrimaryClick={action('Primary Action Clicked')}
onSecondaryClick={action('Secondary Action Clicked')} />
CardVIII.storyName = 'Action Card - With Shadow With Separator Two Calls To Action'

export const CardIX: ComponentStory<typeof Card> = () => <ActionCard
width={'400px'}
      height={'300px'}
      justifyContent={'flex-end'}
      showSeperator={false}
      primaryText={'CTA 1'}
      onPrimaryClick={action('Primary Action Clicked')} />
CardIX.storyName = 'Action Card - With Shadow No Separator One Call To Action'

export const CardX: ComponentStory<typeof Card> = () => <ActionCard
width={'400px'}
      height={'300px'}
      justifyContent={'flex-end'}
      showSeperator={false}
      primaryText={'CTA 1'}
      secondaryText={'CTA 2'}
      onPrimaryClick={action('Primary Action Clicked')}
      onSecondaryClick={action('Secondary Action Clicked')}/>
CardX.storyName = 'Action Card - With Shadow No Separator Two Call To Actions'