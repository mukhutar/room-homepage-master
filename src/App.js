import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './style.css';
import Bottom from './bottom';
import 'swiper/css';
import Links from './links';
import './App.css';
import Slider1 from './slide';
import Slider2 from './slide2'
import Slider3 from './slider3'

function App() {
  return (
    <div>
      
      <Links/>
      
  <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className='sl'><Slider1/></SwiperSlide>
        <SwiperSlide><Slider2/></SwiperSlide>
        <SwiperSlide><Slider3/></SwiperSlide>
      </Swiper>
      <Bottom className="bottom"/>
    </div>
);
  
}

export default App;
