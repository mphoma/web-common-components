import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { BackButton } from '../components/button/BackButton'
import Button from '../components/button/Button'
import CloseButton from '../components/button/CloseButton'
import { LinkButton}  from '../components/button/LinkButton'
import TextButton from '../components/button/TextButton'
import TooltipButton from '../components/button/TooltipButton'
import { ContainedButton } from '../components/button/ContainedButton'
import { IconButton } from '../components/button/IconButton'
import { OutlineButton } from '../components/button/OutlineButton'
import { RoundButton } from '../components/button/RoundButton'
import { RebrandSpinner } from '../components/spinner/RebrandSpinner'
import { Spinner } from '../components/spinner/Spinner'
import { HorizontalBounce } from '../components/spinner/HorizontalBounce'
import { DeprecatedSpinner } from '../components/spinner/DeprecatedSpinner'
import { ColorSvg } from '../components/general/ColorSvg'
import { Images } from '../common/constants'
import { ColorCodes } from '../common/constants'
import { Card } from '../components/card/Card'
import { ActionCard } from '../components/card/ActionCard'
import { ServiceCard } from '../components/card/ServiceCard'
import { CircleImage } from '../components/general/CircleImage'
import { TileCard } from '../components/card/TileCard'
import { Tab } from '../components/general/Tab'
import styled from 'styled-components'
import { VFillContainerVH } from '../components/container/Containers'
import { Banner } from '../components/notification/Banner'
import { ErrorBanner } from '../components/notification/ErrorBanner'
import { GeneralSnackbar } from '../components/notification/GeneralSnackbar'
import { InfoBanner } from '../components/notification/InfoBanner'
import { NotificationBanner } from '../components/notification/NotificationBanner'
import { SuccessSnackbar } from '../components/notification/SuccessSnackbar'
import { WarningBanner } from '../components/notification/WarningBanner'
import { PopUpMobi } from '../components/modal/PopUpMobi'
import { PopUp } from '../components/modal/PopUp'
import { ErrorPopUp } from '../components/modal/ErrorPopUp'
import { InfoPopUp } from '../components/modal/InfoPopUp'
import { AccountPopUp } from '../components/modal/AccountPopUp'
import { SuccessPopUp } from '../components/modal/SuccessPopUp'

const Container = styled(VFillContainerVH)`
  padding: 2vmin;
  background-color: ${ColorCodes.Grey2};
`;

export default function Home() {
  return (
    <div>
      <Container>
      <ErrorPopUp
      heading={[
        'Heading line 1',
        'Heading line 2'
      ]} 
      bodyText={[
        'Body line 1',
        'Body line 2'
      ]}
      onBackClick={'Back Clicked'}
      onPrimaryClick={'Primary Action Clicked'}
      onSecondaryClick={'Secondary Action Clicked'}/>
      </Container>
      <Container>
      <InfoPopUp
      heading={[
        'Heading line 1',
        'Heading line 2'
      ]}
      bodyText={[
        'Body line 1',
        'Body line 2'
      ]}
      onBackClick={'Back Clicked'}
      onPrimaryClick={'Primary Action Clicked'}
      onSecondaryClick={'Secondary Action Clicked'}/>
      </Container>
      <Container>
      <AccountPopUp
      heading={[
        'Heading line 1',
        'Heading line 2'
      ]}
      bodyText={[
        'Body line 1',
        'Body line 2'
      ]}
      onBackClick={'Back Clicked'}
      onPrimaryClick={'Primary Action Clicked'}
      onSecondaryClick={'Secondary Action Clicked'}/>
      </Container>
      <Container>
      <PopUp
            onPrimaryClick={'Primary Action Clicked'}
            onSecondaryClick={'Secondary Action Clicked'}
      />
      </Container>

      <Container>
      <PopUp
            onBackClick={'Back Clicked'}
            onPrimaryClick={'Primary Action Clicked'}
            onSecondaryClick={'Secondary Action Clicked'}
      />
      </Container>
      <SuccessPopUp
      heading={[
        'Heading line 1',
        'Heading line 2'
      ]}
      bodyText={[
        'Body line 1',
        'Body line 2'
      ]}
      onBackClick={'Back Clicked'}
      onPrimaryClick={'Primary Action Clicked'}
      onSecondaryClick={'Secondary Action Clicked'}/>
      <Container>
      <ErrorPopUp
      heading={[
        'Heading line 1',
        'Heading line 2'
      ]}
      bodyText={[
        'Body line 1',
        'Body line 2'
      ]}
      onPrimaryClick={'Primary Action Clicked'}/>
      </Container>

      <Container>
      <InfoPopUp
      heading={[
        'Heading line 1',
        'Heading line 2'
      ]}
      bodyText={[
        'Body line 1',
        'Body line 2'
      ]}
      onPrimaryClick={'Primary Action Clicked'}/>
      </Container>

      <Container> 
      <AccountPopUp
      heading={[
        'Heading line 1',
        'Heading line 2'
      ]}
      bodyText={[
        'Body line 1',
        'Body line 2'
      ]}
      onPrimaryClick={'Primary Action Clicked'}/>

      </Container>


      <Container>
      <SuccessPopUp
      heading={[
        'Heading line 1',
        'Heading line 2'
      ]}
      bodyText={[
        'Body line 1',
        'Body line 2'
      ]}
      onPrimaryClick={'Primary Action Clicked'}/>
      </Container>
      <Container>
      <ErrorPopUp
      heading={[
        'Heading line 1',
        'Heading line 2'
      ]}
      bodyText={[
        'Body line 1',
        'Body line 2'
      ]}
      onBackClick={'Back Clicked'}
      onPrimaryClick={'Primary Action Clicked'}/>
      </Container>
      <Container>
      <InfoPopUp
      heading={[
        'Heading line 1',
        'Heading line 2'
      ]}
      bodyText={[
        'Body line 1',
        'Body line 2'
      ]}
      onBackClick={'Back Clicked'}
      onPrimaryClick={'Primary Action Clicked'}/>
      </Container>
      <Container>
      <AccountPopUp
      heading={[
        'Heading line 1',
        'Heading line 2'
      ]}
      bodyText={[
        'Body line 1',
        'Body line 2'
      ]}
      onBackClick={'Back Clicked'}
      onPrimaryClick={'Primary Action Clicked'}/>
      </Container>
      <Container>
      <SuccessPopUp
      heading={[
        'Heading line 1',
        'Heading line 2'
      ]}
      bodyText={[
        'Body line 1',
        'Body line 2'
      ]}
      onBackClick={'Back Clicked'}
      onPrimaryClick={'Primary Action Clicked'}/>
      </Container>
      <Container>
      <WarningBanner
    width={'100vw'}
    text='Message'
    onCloseClick={'Close clicked'}/>
      </Container>
      <Container>
      <WarningBanner
      width={'100vw'}
      text={'Message line 1\r\nMessage line 2\r\nMessage line 3'}
      closeImageUrl={Images.Icons.Close}
      onCloseClick={'Close clicked'}/>
      </Container>
      <Container>
      <NotificationBanner
      width={'100vw'}
      text={'Message line 1\r\nMessage line 2\r\nMessage line 3'}
      closeImageUrl={Images.Icons.CloseWhite}
      onCloseClick={'Close clicked'}/>
      </Container>
     
      <Container>
      <SuccessSnackbar
      position={'relative'}
      heading={'Heading'}
      text={'Message line 1\r\nMessage line 2'}
      onCloseClick={'Close clicked'}/>
      </Container>
      <Container>
      <NotificationBanner
      width={'100vw'}
      text='Message'
      onCloseClick={'Close clicked'}/>
      </Container>
<Container>
<InfoBanner
      width={'100vw'}
      text='Message'
      onCloseClick={'Close clicked'}/>
      <Container>
      <InfoBanner
      width={'100vw'}
      text={'Message line 1\r\nMessage line 2\r\nMessage line 3'}
      closeImageUrl={Images.Icons.CloseWhite}
      onCloseClick={'Close clicked'}/>
      </Container>
</Container>
      <Tab/>
      <Container>
      <ErrorBanner
             width={'100vw'}
             text='Message'
             onCloseClick={'Close clicked'}
      />
      </Container>

      <Container>
      <GeneralSnackbar
      position={'relative'}
      heading={'Heading'}
      text={'Message line 1\r\nMessage line 2'}
      onCloseClick={'Close clicked'}/>
      </Container>

      <Container>
      <ErrorBanner
             width={'100vw'}
             text={'Message line 1\r\nMessage line 2\r\nMessage line 3'}
             closeImageUrl={Images.Icons.CloseWhite}
             onCloseClick={'Close clicked'}
      />
      </Container>
      <Container>
      <Card
          boxShadow={'none'}
          width={'400px'}
          height={'300px'}
      />
      </Container>
<Container>
<ActionCard
        boxShadow={'none'}
        width={'400px'}
        height={'300px'}
        justifyContent={'flex-end'}
        showSeperator={true}
        onPrimaryClick={'Primary Action Clicked'}/>
</Container>
<Container>
<ActionCard
        boxShadow={'none'}
        width={'400px'}
        height={'300px'}
        justifyContent={'flex-end'}
        showSeperator={true}
        onPrimaryClick={'Primary Action Clicked'}
        onSecondaryClick={'Secondary Action Clicked'}/>
     </Container>
     <Container>
     <ActionCard
        boxShadow={'none'}
        width={'400px'}
        height={'300px'}
        justifyContent={'flex-end'}
        showSeperator={false}
        primaryText={'Text'}
        onPrimaryClick={'Primary Action Clicked'}/>
</Container>

<Container>
<ActionCard
        boxShadow={'none'}
        width={'400px'}
        height={'300px'}
        justifyContent={'flex-end'}
        showSeperator={false}
        primaryText={'Text'}
        secondaryText={'Text'}
        onPrimaryClick={'Primary Action Clicked'}
        onSecondaryClick={'Secondary Action Clicked'}/>
</Container>
<Card
      width={'400px'}
      height={'300px'}/>

<ActionCard
      width={'400px'}
      height={'300px'}
      justifyContent={'flex-end'}
      showSeperator={true}
      onPrimaryClick={'Primary Action Clicked'}/>

<ActionCard
      width={'400px'}
      height={'300px'}
      justifyContent={'flex-end'}
      showSeperator={true}
      onPrimaryClick={'Primary Action Clicked'}
      onSecondaryClick={'Secondary Action Clicked'}/>

<ActionCard
      width={'400px'}
      height={'300px'}
      justifyContent={'flex-end'}
      showSeperator={false}
      primaryText={'Text'}
      onPrimaryClick={'Primary Action Clicked'}/>

<ActionCard
      width={'400px'}
      height={'300px'}
      justifyContent={'flex-end'}
      showSeperator={false}
      primaryText={'Text'}
      secondaryText={'Text'}
      onPrimaryClick={'Primary Action Clicked'}
      onSecondaryClick={'Secondary Action Clicked'}/>

{/* <Container>
<Banner/>
</Container> */}

   <Button
 activeColor={ColorCodes.White}
 activeBackgroundColor={ColorCodes.Grey8}
 activeBorderColor={ColorCodes.Grey8}
 text={'Secondary Solid'}
 onClick={'Clicked Secondary Solid Button'}
   />
   <Button onClick={'Clicked Primary Button'} text={'Primary Default'}/>
   <Button onClick={'Clicked Primary Button Disabled'} text={'Primary Disabled'} isEnabled={false}/>
   <Button onClick={'Can Not Clicked Primary Button while Busy'} text={'Primary Busy'} showSpinner={true}/>
   <Button
      activeColor={ColorCodes.Grey9}
      activeBackgroundColor={ColorCodes.White}
      activeBorderColor={ColorCodes.White}
      text={'Secondary Default'}
      onClick={'Clicked Secondary Button'}/>

<Button
      activeColor={ColorCodes.Grey8}
      activeBackgroundColor={ColorCodes.White}
      activeBorderColor={ColorCodes.Grey6}
      text={'Secondary Outline'}
      onClick={'Clicked Secondary Outline Button Disabled'}/>

<IconButton
    onClick={'Clicked Icon Button'}
     text={'LABEL'}
     width='20%'
   />
    <IconButton
   onClick={'Clicked Icon Button Disabled'} text={'LABEL'} isEnabled={false}
   width='20%'
   />

<LinkButton onClick={'Clicked Link Button'} text={'LABEL'} width='20%'/>
<LinkButton width='20%' onClick={'Clicked Link Button Disabled'} text={'LABEL'} isEnabled={false}/>
<LinkButton  width='20%' activeColor={ColorCodes.Blue1} onClick={'Clicked Link Button Teal'} text={'LABEL'}/>


<OutlineButton width='20%' onClick={'Clicked Outline Button'} text={'LABEL'}/>
<OutlineButton width='20%' onClick={'Clicked Outline Button Disabled'} text={'LABEL'} isEnabled={false}/>

<RoundButton width='20%' onClick={'Clicked Round Button'} text={'LABEL'}/>
<RoundButton  width='20%' onClick={'Clicked Round Button Disabled'} text={'LABEL'} isEnabled={false}/>

<TextButton width='20%' onClick={'Clicked Flat Button'} text={'LABEL'}/>
<TextButton width='20%' onClick={'Clicked Flat Button Disabled'} text={'LABEL'} isEnabled={false}/>


   <CloseButton/>
   
   
   <TooltipButton onClick={'Clicked Tooltip Button'} height={'7vh'} width={'7vh'}/>
  
 
  
   <RebrandSpinner  width='5%' height='10%'/>
   <Spinner  width='5%' height='10%'/>
   <HorizontalBounce  width='5%' height='10%'/>
   <DeprecatedSpinner/>
    </div>
  )
}
