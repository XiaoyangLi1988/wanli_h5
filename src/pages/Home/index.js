import React, { useState, useRef } from 'react';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/swiper-react.mjs';
import { Autoplay, Scrollbar, EffectCoverflow }  from 'swiper/modules/index.min.mjs';
import { useTranslation, Trans } from 'react-i18next';
// Styles must use direct files imports
import 'swiper/swiper.less'; // core Swiper
import 'swiper/modules/scrollbar.less'; //scrollbar style
import 'swiper/modules/effect-coverflow.less'; // effect style

function Home() {
  const midSwiperRef = useRef();
  const botSwiperRef = useRef();
  const { i18n } = useTranslation();
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
            {swiperIndex === 0 && <img className="lunbo-text1 fade-in" alt="" src="/src/img/about/lunbotip1.png"/>}
            <img className="lunbo-img" alt="" src="/src/img/about/lunbo01.jpg"/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="lunbo-wrapper">
            {swiperIndex === 1 && <img className="lunbo-text2 fade-in" alt="" src="/src/img/about/lunbotip2.png"/>}
            <img className="lunbo-img" alt="" src="/src/img/about/lunbo02.jpg"/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="lunbo-wrapper">
            {swiperIndex === 2 && <img className="lunbo-text3 fade-in" alt="" src="/src/img/about/lunbotip3.png"/>}
            <img className="lunbo-img" alt="" src="/src/img/about/lunbo03.jpg"/>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="mid-swiper-box">
        <img alt="" src={i18n.language === 'zh' ? '/src/img/about/aboutus.jpg' : '/src/img/aboutEn/aboutus.jpg'} />
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
                <img alt="" src={i18n.language === 'zh' ? '/src/img/about/metal.png' : '/src/img/aboutEn/metal.png'}/>
                <img alt="" src={i18n.language === 'zh' ? '/src/img/about/hotel.png' : '/src/img/aboutEn/hotel.png'}/>
                <img alt="" src={i18n.language === 'zh' ? '/src/img/about/center.png' : '/src/img/aboutEn/center.png'}/>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mid-swiper">
                <img alt="" src={i18n.language === 'zh' ? '/src/img/about/biological.png' : '/src/img/aboutEn/biological.png'}/>
              </div>
            </SwiperSlide>
          </Swiper>
          <span onClick={() => midSwiperRef.current.slideNext()} />
        </div>
      </div>
      <div className="mid-swiper-box">
        <img alt="" src={i18n.language === 'zh' ? '/src/img/about/wanli.png' : '/src/img/aboutEn/wanli.png'} />
        <img alt="" src={i18n.language === 'zh' ? '/src/img/about/news.png' : '/src/img/aboutEn/news.png'} style={{ marginTop: -8 }}/>
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
              <img alt="" src="/src/img/about/center1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="" src="/src/img/about/center2.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="" src="/src/img/about/center3.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="" src="/src/img/about/center4.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="" src="/src/img/about/center5.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="" src="/src/img/about/center6.png" />
            </SwiperSlide>
          </Swiper>
          <span onClick={() => botSwiperRef.current.slideNext()} />
        </div>
      </div>
      <div className="location">
        <img alt="" src={i18n.language === 'zh' ? '/src/img/about/location.png' : '/src/img/aboutEn/location.png'}/>
        <div>{i18n.language}</div>
      </div>
    </div>
  )
}

export default Home;
