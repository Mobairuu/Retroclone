import React from 'react';
import SwiperCore, {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    EffectFade,
  } from "swiper";
  import { Swiper, SwiperSlide } from "swiper/react";
  import './anime-container.styles.css'
  
  // Import Swiper styles
  import "swiper/swiper.scss";
  import "swiper/components/navigation/navigation.scss";
  import "swiper/components/pagination/pagination.scss";
  import "swiper/components/scrollbar/scrollbar.scss";


const messages = ["YOUR FAVORITE SOURCE FOR ANIME!","JOIN US NOW!", "LIKE AND SAVE VIDEOS!","WATCH ANIME WITH YOUR FRIENDS!"]
const AnimeContainer = (props) =>{
    const renderSlides = () =>
    messages.map((el) => (
      <SwiperSlide >
          <h3 className="hero-show-title">
              {/* {el.title} */}
              {el}
              </h3>
      </SwiperSlide>
    ));

    return(
      <div className="hero-container"> 
       <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      >
      {renderSlides()}
    </Swiper>
      </div>)
}
export default AnimeContainer;

