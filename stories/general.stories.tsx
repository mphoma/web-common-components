import React from 'react'
import { action } from '@storybook/addon-actions'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Images } from '../common/constants'
import { Image } from '../components/general/Image'
import { Accordion } from '../components/general/Accordion'
import { ColorCodes } from '../common/constants'
import { Spinner } from '../components/spinner/Spinner'
import { TabBar } from '../components/general/TabBar'
import { UpArrow, LeftArrow, DownArrow , RightArrow} from '../components/general/Arrow'
import { PageBanner } from '../components/general/PageBanner'
import { SearchBox } from '../components/general/SearchBox'
import { HSeparator } from '../components/general/Separator'
import { Link } from '../components/general/Link'
import { CircleImage } from '../components/general/CircleImage'
import { Slider } from '../components/general/Slider'
import { ProgressBar } from '../components/general/ProgressBar'
import { Rating } from '../components/general/Rating'


export default { 
    title: 'General',
    component: PageBanner,
      subcomponents: { 
        Spinner, 
        TabBar,
         UpArrow, 
         LeftArrow,
          DownArrow ,
         RightArrow,
        //   SearchBox,
           HSeparator, 
           Link,
            CircleImage ,
            //  ProgressBar
            }
    } as ComponentMeta<typeof PageBanner> 

export const ImageI: ComponentStory<typeof PageBanner> = () => <PageBanner 
width={'100vw'}
      heading={'Heading'}
      subHeading={'Sub-heading'}
      headingColor={ColorCodes.White}
      subHeadingColor={ColorCodes.White} />;
ImageI.storyName = 'Page Banner';

//     export const Image2: ComponentStory<typeof Image> = () => <Image 
//     src={Images.Backgrounds.Banner}
//     width={'50vw'}
//     height={'auto'} />;
// Image2.storyName = 'Image';

// export const Image3: ComponentStory<typeof PageBanner> = () => <Spinner size={'60'} />;
// Image3.storyName = 'Spinner';

export const ImageII: ComponentStory<typeof PageBanner> = () => <UpArrow size={'20px'}/>;
ImageII.storyName = 'Up Arrow';

export const Image5: ComponentStory<typeof PageBanner> = () => <DownArrow size={'20px'}/>;
Image5.storyName = 'Down Arrow';

export const Image6: ComponentStory<typeof PageBanner> = () => <LeftArrow size={'20px'}/>;
Image6.storyName = 'Left Arrow';

export const Image7: ComponentStory<typeof PageBanner> = () => <RightArrow size={'20px'}/>;
Image7.storyName = 'Right Arrow';

export const Image8: ComponentStory<typeof PageBanner> = () => <SearchBox/>;
Image8.storyName = 'Search Box';

export const Image9: ComponentStory<typeof PageBanner> = () => <HSeparator/>;
Image9.storyName = 'Separator';

export const Image10: ComponentStory<typeof PageBanner> = () => <Link> Vodacom Link </Link>;
Image10.storyName = 'Link';

export const Image11: ComponentStory<typeof PageBanner> = () => <CircleImage/>;
Image11.storyName = 'Circle Image';

export const Image12: ComponentStory<typeof PageBanner> = () => <ProgressBar 
now={50}
width={'90vw'}
borderRadius={'10px'}
text={'Label'}/>;
Image12.storyName = 'Progress Bar';

export const Image13: ComponentStory<typeof PageBanner> = () => <TabBar 
tabs={[{
    label: 'Label',
    value: 'tab1',
  },{
    label: 'Label',
    value: 'tab2',
  },{
    label: 'Label',
    value: 'tab3',
  }]}
  onTabClicked={action('tab-click')}
  />;
Image13.storyName = 'Tab Bar';

// export const Image15: ComponentStory<typeof Image> = () => <Rating/>;
// Image15.storyName = 'Rating';