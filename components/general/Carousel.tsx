import React from 'react'
import PropTypes  from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ColorCodes } from '../../common/constants'
import { Base, HContainerH, VContainer } from '../container/Containers'
import styled from 'styled-components'
import { GeneralProps } from './GeneralProps'

const SwiperStyled = styled(Swiper)`

&.swiper-container {
  max-width: 100vw;
  padding-bottom: 2vh;
  position: relative;
  overflow: hidden;
}

.swiper-wrapper {
  padding-inline-start: 0;
  position: relative;
  display: flex;
  
  .swiper-slide {
    display: flex;
    justify-content: center;
    flex: 1 0 auto;
  }
}
`;

export const Carousel = (props: GeneralProps) => {

    const [
      state,
      setState
    ] = React.useState({
      currentSlide: props.currentSlide,
      swiper: null
    });
  
    React.useEffect(() => {
  
      const nextSlideIndex = (state.currentSlide + 1) % Math.min(props.componentList?.length, props.maxCarouselLength);
  
      const swiperId = props.enableAutoSwipe && setTimeout(() => {
  
        setState(prevState => ({
          ...prevState,
          currentSlide: nextSlideIndex
        }));
      }, props.autoSwipeTime);
  
      state.swiper && state.swiper.slideTo(state.currentSlide) && state.swiper.update();
  
      return () => props.enableAutoSwipe && clearTimeout(swiperId);
  
    }, [ state.currentSlide, state.swiper, props.componentList, props.autoSwipeTime, props.maxCarouselLength ]);
  
    React.useEffect(() => {
  
      if (props.currentSlide < props.componentList?.length) {
  
        setState(prevState => ({
          ...prevState,
          currentSlide: props.currentSlide
        }));
      }
  
    }, [ props.currentSlide ]);
  
    const buildCarouselCards = () => {
  
      const carouselItems = props.componentList;
  
      if (!carouselItems.length) {
        return [];
      }
  
      let swiperSlides = [];
  
      for (let i = 0; i < Math.min(carouselItems.length, props.maxCarouselLength); i ++) {
  
        swiperSlides.push(
  
          <SwiperSlide
            key={`CarouselSlide-${carouselItems[i]?.key}`}>
  
            {carouselItems[i]}
          </SwiperSlide>
        );
      }
  
      return (
  
        <SwiperStyled
          slidesPerView={props.slidesPerView}
          onSlideChange={swiper => {
  
            setState(prevState => ({
              ...prevState,
              currentSlide: swiper.activeIndex
            }));
  
            props.onSlideChange?.(swiper.activeIndex);
          }}
          onInit={swiper => {
  
            swiper.slideTo(state.currentSlide);
          }}
          onSwiper={category => {
  
            setState(prevState => ({
              ...prevState,
              swiper: category
            }));
          }}>
  
            {swiperSlides}
        </SwiperStyled>
      );
    };
  
    const buildNavigationGrid = (props : GeneralProps) => {
  
      const carouselItems = props.componentList;
  
      let navigationGrid = [];
  
      for (let i = 0; i < Math.min(carouselItems.length, props.maxCarouselLength); i ++) {
  
        navigationGrid.push(
  
          <Base
            key={`carousel-navigation-${i}`}
            width={props.navigationGridWidth}
            height={props.navigationGridHeight}
            borderRadius={'50%'}
            backgroundColor={i !== state.currentSlide ? props.inactiveColor : props.activeColor}
            margin={props.navigationGridMargin}
            onClick={() => {
  
              setState(prevState => ({
                ...prevState,
                currentSlide: i
              }));
            }}/>
        );
      }
  
      return navigationGrid;
    };
  
    return (
  
      <VContainer>
        {buildCarouselCards()}
  
        <HContainerH>
          {buildNavigationGrid()}
        </HContainerH>
  
      </VContainer>
    );
  };
  
  Carousel.propTypes = {
    autoSwipeTime: PropTypes.number,
    componentList: PropTypes.array.isRequired,
    slidesPerView: PropTypes.number,
    maxCarouselLength: PropTypes.number,
    navigationGridWidth: PropTypes.string,
    navigationGridHeight: PropTypes.string,
    navigationGridMargin: PropTypes.string,
    enableAutoSwipe: PropTypes.bool,
    activeColor: PropTypes.string,
    inactiveColor: PropTypes.string,
    onSlideChange: PropTypes.func,
    currentSlide: PropTypes.number
  };
  
  Carousel.defaultProps = {
    autoSwipeTime: 3500,
    componentList: [],
    slidesPerView: 1,
    maxCarouselLength: 15,
    navigationGridWidth: '6px',
    navigationGridHeight: '6px',
    navigationGridMargin: '0 4px',
    enableAutoSwipe: true,
    activeColor: ColorCodes.Grey11,
    inactiveColor: ColorCodes.Grey4,
    onSlideChange: () => {},
    currentSlide: 0
  };
