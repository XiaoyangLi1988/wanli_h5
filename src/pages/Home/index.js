import React, { useState, useRef } from 'react';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/swiper-react.mjs';
import { Autoplay, Scrollbar, EffectCoverflow }  from 'swiper/modules/index.min.mjs';
// Styles must use direct files imports
import 'swiper/swiper.less'; // core Swiper
import 'swiper/modules/scrollbar.less'; //scrollbar style
import 'swiper/modules/effect-coverflow.less'; // effect style

import lunbo1 from '../../img/about/lunbo01.jpg';
import lunbo2 from '../../img/about/lunbo02.jpg';
import lunbo3 from '../../img/about/lunbo03.jpg';
import aboutus from '../../img/about/aboutus.jpg';
import wanli from '../../img/about/wanli.png';
import news from '../../img/about/news.png';
import location from '../../img/about/location.png';
import lunbotip1 from '../../img/about/lunbotip1.png';
import lunbotip2 from '../../img/about/lunbotip2.png';
import lunbotip3 from '../../img/about/lunbotip3.png';
import center1 from '../../img/about/center1.png';
import center2 from '../../img/about/center2.png';
import center3 from '../../img/about/center3.png';
import center4 from '../../img/about/center4.png';
import center5 from '../../img/about/center5.png';
import center6 from '../../img/about/center6.png';
import metal from '../../img/about/metal.png';
import hotel from '../../img/about/hotel.png';
import center from '../../img/about/center.png';
import biological from '../../img/about/biological.png';

function Home() {
  const midSwiperRef = useRef();
  const botSwiperRef = useRef();
  const [swiperIndex, setSwiperIndex] = useState(0);
  return (
    <div className="home-page-wrapper">
      <Swiper
        modules={[Autoplay, Scrollbar]}
        scrollbar
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="top-swiper"
        onSlideChangeTransitionEnd={(swiper) => {
          setSwiperIndex(swiper.realIndex);
        }}
      >
        <SwiperSlide>
          <div className="lunbo-wrapper">
            {swiperIndex === 0 && <img className="lunbo-text1 fade-in" alt="" src={lunbotip1}/>}
            <img className="lunbo-img" alt="" src={lunbo1}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="lunbo-wrapper">
            {swiperIndex === 1 && <img className="lunbo-text2 fade-in" alt="" src={lunbotip2}/>}
            <img className="lunbo-img" alt="" src={lunbo2}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="lunbo-wrapper">
            {swiperIndex === 2 && <img className="lunbo-text3 fade-in" alt="" src={lunbotip3}/>}
            <img className="lunbo-img" alt="" src={lunbo3}/>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="mid-swiper-box">
        <img alt="" src={aboutus}/>
        <div className="business-swiper">
          <span onClick={() => midSwiperRef.current.slidePrev()}/>
          <Swiper
            loop
            onSwiper={(swiper) => {
              midSwiperRef.current = swiper;
            }}
          >
            <SwiperSlide>
              <div className="mid-swiper">
                <img alt="" src={metal}/>
                <img alt="" src={hotel}/>
                <img alt="" src={center}/>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mid-swiper">
                <img alt="" src={biological}/>
              </div>
            </SwiperSlide>
          </Swiper>
          <span onClick={() => midSwiperRef.current.slideNext()} />
        </div>
      </div>
      <div className="mid-swiper-box">
        <img alt="" src={wanli}/>
        <img alt="" src={news} style={{ marginTop: -8 }}/>
        <div className="center-swiper">
          <span onClick={() => botSwiperRef.current.slidePrev()}/>
          <Swiper
            loop
            centeredSlides
            slidesPerView={2}
            effect={'coverflow'}
            modules={[EffectCoverflow]}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            onSwiper={(swiper) => {
              botSwiperRef.current = swiper;
            }}
          >
            <SwiperSlide>
              <img alt="" src={center1} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="" src={center2} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="" src={center3} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="" src={center4} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="" src={center5} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="" src={center6} />
            </SwiperSlide>
          </Swiper>
          <span onClick={() => botSwiperRef.current.slideNext()} />
        </div>
      </div>
      <div className="location">
        <img alt="" src={location}/>
      </div>
    </div>
  )
}

export default Home;
