import React from 'react'
import { action } from '@storybook/addon-actions'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Banner } from '../components/notification'
import { ErrorBanner } from '../components/notification'
import { SuccessSnackbar } from '../components/notification'
import { InfoBanner } from '../components/notification'
import { GeneralSnackbar } from '../components/notification'
import { NotificationBanner } from '../components/notification'
import { WarningBanner } from '../components/notification'
import { Images } from '../common/constants'

export default {
      title: 'Notification',
      component: Banner,
      subcomponents: { ErrorBanner, SuccessSnackbar, InfoBanner,
        GeneralSnackbar,NotificationBanner,WarningBanner}
    } as ComponentMeta<typeof Banner> 


export const BannerI: ComponentStory<typeof Banner> = () => <SuccessSnackbar 
position={'relative'}
heading={'Heading'}
text={'Message line 1\r\nMessage line 2'}
onCloseClick={action('Close clicked')} />;
BannerI.storyName = 'Snackbar - Success';

export const BannerII: ComponentStory<typeof Banner> = () => <GeneralSnackbar 
position={'relative'}
      heading={'Heading'}
      text={'Message line 1\r\nMessage line 2'}
      onCloseClick={action('Close clicked')} />;
BannerII.storyName = 'Snackbar - General';

export const BannerIII: ComponentStory<typeof Banner> = () => <NotificationBanner 
width={'100vw'}
      text='Message'
      onCloseClick={action('Close clicked')} />;
BannerIII.storyName = 'Notification Banner - Single Line';

export const BannerIV: ComponentStory<typeof Banner> = () => <NotificationBanner 
width={'100vw'}
      text={'Message line 1\r\nMessage line 2\r\nMessage line 3'}
      closeImageUrl={Images.Icons.CloseWhite}
      onCloseClick={action('Close clicked')} />;
BannerIV.storyName = 'Notification Banner - Multi Line';

export const BannerV: ComponentStory<typeof Banner> = () => <InfoBanner 
width={'100vw'}
text='Message'
onCloseClick={action('Close clicked')} />;
BannerV.storyName = 'Info Banner - Single Line';

export const BannerVI: ComponentStory<typeof Banner> = () => <InfoBanner 
width={'100vw'}
text={'Message line 1\r\nMessage line 2\r\nMessage line 3'}
closeImageUrl={Images.Icons.CloseWhite}
onCloseClick={action('Close clicked')}/>;
BannerVI.storyName = 'Info Banner - Single Line';

export const BannerVII: ComponentStory<typeof Banner> = () => <WarningBanner 
width={'100vw'}
text='Message'
onCloseClick={action('Close clicked')}/>;
BannerVII.storyName = 'Warning Banner - Single Line';

export const BannerVIII: ComponentStory<typeof Banner> = () => <WarningBanner 
width={'100vw'}
text={'Message line 1\r\nMessage line 2\r\nMessage line 3'}
closeImageUrl={Images.Icons.Close}
onCloseClick={action('Close clicked')}/>;
BannerVIII.storyName = 'Warning Banner - Multi Line';

export const BannerIX: ComponentStory<typeof Banner> = () => <ErrorBanner 
width={'100vw'}
      text='Message'
      onCloseClick={action('Close clicked')}/>;
BannerIX.storyName = 'Error Banner - Single Line';

export const BannerX: ComponentStory<typeof Banner> = () => <ErrorBanner 
width={'100vw'}
      text={'Message line 1\r\nMessage line 2\r\nMessage line 3'}
      closeImageUrl={Images.Icons.CloseWhite}
      onCloseClick={action('Close clicked')}/>;
BannerX.storyName = 'Error Banner - Multi Line';