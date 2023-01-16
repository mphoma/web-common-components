import React from 'react'
import { action } from '@storybook/addon-actions'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { PopUp } from '../components/modal/PopUp'
import { InfoPopUp } from '../components/modal/InfoPopUp'
import { ErrorPopUp } from '../components/modal/ErrorPopUp'
import { AccountPopUp } from '../components/modal/AccountPopUp'
import { SuccessPopUp } from '../components/modal/SuccessPopUp'

export default {
    title : 'Modals',
    component: PopUp,
    subcomponents: { InfoPopUp, ErrorPopUp, AccountPopUp,SuccessPopUp }
  } as ComponentMeta<typeof PopUp>

  export const PopUpI: ComponentStory<typeof PopUp> = () => <PopUp  />;
  PopUpI.storyName ='Popup - Blank';

  export const PopUpII: ComponentStory<typeof PopUp> = () => <PopUp  
  onPrimaryClick={action('Primary Action Clicked')}
  onSecondaryClick={action('Secondary Action Clicked')}/>;
  PopUpII.storyName ='Popup - Two Calls to Action';

  export const PopUpIII: ComponentStory<typeof PopUp> = () => <PopUp  
  onBackClick={action('Back Clicked')}
      onPrimaryClick={action('Primary Action Clicked')}
      onSecondaryClick={action('Secondary Action Clicked')}/>;
  PopUpIII.storyName ='Popup - Two Calls to Action With Back Button';

  export const PopUpIV: ComponentStory<typeof PopUp> = () => <ErrorPopUp  
  heading={[
    'Heading line 1',
    'Heading line 2'
  ]}
  bodyText={[
    'Body line 1',
    'Body line 2'
  ]}
  onBackClick={action('Back Clicked')}
  onPrimaryClick={action('Primary Action Clicked')}
  onSecondaryClick={action('Secondary Action Clicked')}/>;
  PopUpIV.storyName ='Error Popup - Two Calls to Action With Back Button';

  export const PopUpV: ComponentStory<typeof PopUp> = () => <InfoPopUp  
  heading={[
    'Heading line 1',
    'Heading line 2'
  ]}
  bodyText={[
    'Body line 1',
    'Body line 2'
  ]}
  onBackClick={action('Back Clicked')}
  onPrimaryClick={action('Primary Action Clicked')}
  onSecondaryClick={action('Secondary Action Clicked')}
  />;
  PopUpV.storyName ='Info Popup - Two Calls to Action With Back Button';

  export const PopUpVI: ComponentStory<typeof PopUp> = () => <AccountPopUp  
  heading={[
    'Heading line 1',
    'Heading line 2'
  ]}
  bodyText={[
    'Body line 1',
    'Body line 2'
  ]}
  onBackClick={action('Back Clicked')}
  onPrimaryClick={action('Primary Action Clicked')}
  onSecondaryClick={action('Secondary Action Clicked')}
  />;
  PopUpVI.storyName ='Account Popup - Two Calls to Action With Back Button';

  export const PopUpVII: ComponentStory<typeof PopUp> = () => <SuccessPopUp  
  heading={[
    'Heading line 1',
    'Heading line 2'
  ]}
  bodyText={[
    'Body line 1',
    'Body line 2'
  ]}
  onBackClick={action('Back Clicked')}
  onPrimaryClick={action('Primary Action Clicked')}
  onSecondaryClick={action('Secondary Action Clicked')}
  />;
  PopUpVII.storyName = 'Success Popup - Two Calls to Action With Back Button';

  export const PopUpVIII: ComponentStory<typeof PopUp> = () => <ErrorPopUp  
  heading={[
    'Heading line 1',
    'Heading line 2'
  ]}
  bodyText={[
    'Body line 1',
    'Body line 2'
  ]}
  onPrimaryClick={action('Primary Action Clicked')}
  />;
  PopUpVIII.storyName = 'Error Popup - Primary Call to Action No Back Button';

  export const PopUpIX: ComponentStory<typeof PopUp> = () => <InfoPopUp  
  heading={[
    'Heading line 1',
    'Heading line 2'
  ]}
  bodyText={[
    'Body line 1',
    'Body line 2'
  ]}
  onPrimaryClick={action('Primary Action Clicked')}
  />;
  PopUpIX.storyName = 'Info Popup - Primary Call to Action No Back Button';

  export const PopUpX: ComponentStory<typeof PopUp> = () => <AccountPopUp  
  heading={[
    'Heading line 1',
    'Heading line 2'
  ]}
  bodyText={[
    'Body line 1',
    'Body line 2'
  ]}
  onPrimaryClick={action('Primary Action Clicked')}
  />;
  PopUpX.storyName = 'Account Popup - Primary Call to Action No Back Button';

  export const PopUpXI: ComponentStory<typeof PopUp> = () => <SuccessPopUp  
  heading={[
    'Heading line 1',
    'Heading line 2'
  ]}
  bodyText={[
    'Body line 1',
    'Body line 2'
  ]}
  onPrimaryClick={action('Primary Action Clicked')}
  />;
  PopUpXI.storyName = 'Success Popup - Primary Call to Action No Back Button';

  export const PopUpXII: ComponentStory<typeof PopUp> = () => <ErrorPopUp  
  heading={[
    'Heading line 1',
    'Heading line 2'
  ]}
  bodyText={[
    'Body line 1',
    'Body line 2'
  ]}
  onBackClick={action('Back Clicked')}
  onPrimaryClick={action('Primary Action Clicked')}
  />;
  PopUpXII.storyName = 'Error Popup - Primary Call to Action With Back Button';

  export const PopUpXIII: ComponentStory<typeof PopUp> = () => <InfoPopUp  
  heading={[
    'Heading line 1',
    'Heading line 2'
  ]}
  bodyText={[
    'Body line 1',
    'Body line 2'
  ]}
  onBackClick={action('Back Clicked')}
  onPrimaryClick={action('Primary Action Clicked')}
  />;
  PopUpXIII.storyName = 'Info Popup - Primary Call to Action With Back Button';

  export const PopUpXIV: ComponentStory<typeof PopUp> = () => <AccountPopUp  
  heading={[
    'Heading line 1',
    'Heading line 2'
  ]}
  bodyText={[
    'Body line 1',
    'Body line 2'
  ]}
  onBackClick={action('Back Clicked')}
  onPrimaryClick={action('Primary Action Clicked')}
  />;
  PopUpXIV.storyName = 'Account Popup - Primary Call to Action With Back Button';

  export const PopUpXV: ComponentStory<typeof PopUp> = () => <SuccessPopUp  
  heading={[
    'Heading line 1',
    'Heading line 2'
  ]}
  bodyText={[
    'Body line 1',
    'Body line 2'
  ]}
  onBackClick={action('Back Clicked')}
  onPrimaryClick={action('Primary Action Clicked')}
  />;
  PopUpXV.storyName = 'Success Popup - Primary Call to Action With Back Button';