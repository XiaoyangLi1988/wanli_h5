import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/swiper-react.mjs';
import { Autoplay, Scrollbar, EffectCoverflow, Pagination }  from 'swiper/modules/index.min.mjs';
import { useTranslation, Trans } from 'react-i18next';
// Styles must use direct files imports
import 'swiper/swiper.less'; // core Swiper
import 'swiper/modules/scrollbar.less'; //scrollbar style
import 'swiper/modules/pagination.less';
import 'swiper/modules/effect-coverflow.less'; // effect style
import './index.less';
import Slider from "react-slick";
import classnames from 'classnames';

const settings = {
  accessibility: false,
  centerMode: true,
  infinite: true,
  slidesToShow: 3,
  centerPadding: 0,
};

function SampleNextArrow(props) {
  const { className, newClass, onClick } = props;
  return (
    <div
      className={classnames(className, newClass)}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, newClass, onClick } = props;
  return (
    <div
      className={classnames(className, newClass)}
      onClick={onClick}
    />
  );
}

function CustomSlide(props) {
  const { imgSrc, className, ...restProps } = props;
  return (
    <div className="slider-wrapper">
      <img alt="" src={imgSrc} className={className} {...restProps}/>
    </div>
  );
}

function reformTitle(index, i18n) {
  switch (index) {
    case 0:
      return i18n.language === 'zh' ? '一层大厅' : 'First Floor Lobby';
    case 1:
      return i18n.language === 'zh' ? '一层电梯厅' : 'First Floor Lift';
    case 2:
      return i18n.language === 'zh' ? '一层大厅花卉' : 'First Floor Flower';
    case 3:
      return i18n.language === 'zh' ? '3M商务会议室' : '3M Conference Room';
    case 4:
      return i18n.language === 'zh' ? 'MANSION' : 'MANSION';
    case 5:
      return i18n.language === 'zh' ? '3M走廊' : '3M Corridor';
    default:
      break;
  }
}

function Home() {
  const midSwiperRef = useRef();
  const history = useHistory();
  const { t, i18n } = useTranslation();
  const [swiperIndex, setSwiperIndex] = useState(0);
  const [slickIndex, setSlickIndex] = useState(0);
  return (
    <div className="home-page-wrapper">
      <div className="top-swiper">
        <Swiper
          modules={[Autoplay, Scrollbar]}
          scrollbar
          loop
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          onSlideChangeTransitionEnd={(swiper) => {
            setSwiperIndex(swiper.realIndex);
          }}
        >
          <SwiperSlide>
            <div className="lunbo-wrapper">
              {/*{swiperIndex === 0 && <img className="lunbo-text1 fade-in" alt="" src="/src/img/about/lunbotip1.png"/>}*/}
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
      </div>
      <div className="about-us-wrapper">
        <img alt="" src="/src/img/about/AboutUs.png"  className="title-icon"/>
        <p className="title-text">{i18n.language === 'zh' ? '关于我们' : ''}</p>
        <span className="title-bar" />
        <p className="content-text">{t('aboutus1')}</p>
        <p className="content-text">{t('aboutus2')}</p>
        <img alt="" src="/src/img/about/BusinessScope.png"  className="sub-title-icon"/>
        <p className="title-text">{i18n.language === 'zh' ? '业务版图' : ''}</p>
        <span className="title-bar" />
        <div className="business-swiper">
          <span onClick={() => midSwiperRef.current.slidePrev()}/>
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            pagination={true}
            modules={[Pagination]}
            onSwiper={(swiper) => {
              midSwiperRef.current = swiper;
            }}
          >
            {/*<div className="mid-swiper">*/}
              <SwiperSlide>
                <div className="swiper1 mid-swiper" onClick={() => {
                  history.replace('/metal')
                }}>
                  <h6>{t('businessScopeTitle1')}</h6>
                  <p>{t('businessScope1')}</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper2 mid-swiper" onClick={() => {
                  history.replace('/hotel')
                }}>
                  <h6>{t('businessScopeTitle2')}</h6>
                  <p>{t('businessScope2')}</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper3 mid-swiper" onClick={() => {
                  history.replace('/medicine')
                }}>
                  <h6>{t('businessScopeTitle3')}</h6>
                  <p>{t('businessScope3')}</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper4 mid-swiper" onClick={() => {
                  history.replace('/center')
                }}>
                  <h6>{t('businessScopeTitle4')}</h6>
                  <p>{t('businessScope4')}</p>
                </div>
              </SwiperSlide>
            {/*</div>*/}
          </Swiper>
          <span onClick={() => midSwiperRef.current.slideNext()} />
        </div>
      </div>
      <div className="win-center-wrapper">
        <img alt="" src="/src/img/about/WenCenter.png" className="title-icon"/>
        <p className="title-text">{i18n.language === 'zh' ? '万利中心' : ''}</p>
        <span className="title-bar" />
        <div className="center-swiper">
          <Slider
            nextArrow={<SampleNextArrow newClass="control-button next-button" />}
            prevArrow={<SamplePrevArrow newClass="control-button prev-button" />}
            beforeChange={(index, next) => {
              setSlickIndex(next);
            }}
            {...settings}
          >
            <CustomSlide imgSrc="/src/img/about/center2.png" className={slickIndex !== 0 ? 'inactive-slider' : ''}/>
            <CustomSlide imgSrc="/src/img/about/center3.png" className={slickIndex !== 1 ? 'inactive-slider' : ''}/>
            <CustomSlide imgSrc="/src/img/about/center4.png" className={slickIndex !== 2 ? 'inactive-slider' : ''}/>
            <CustomSlide imgSrc="/src/img/about/center5.png" className={slickIndex !== 3 ? 'inactive-slider' : ''}/>
            <CustomSlide imgSrc="/src/img/about/center6.png" className={slickIndex !== 4 ? 'inactive-slider' : ''}/>
            <CustomSlide imgSrc="/src/img/about/center1.png" className={slickIndex !== 5 ? 'inactive-slider' : ''}/>
          </Slider>
          {/*<img alt="" src="/src/img/about/starring.png" className="star-ring"/>*/}
        </div>
        <p className="slider-title">{reformTitle(slickIndex, i18n)}</p>
        <img alt="" src="/src/img/about/Realtimephoto.png" className="real-time-photo" />
        <img alt="" src="/src/img/about/CenterNews.png" className="sub-title-icon" />
        <p className="title-text">{i18n.language === 'zh' ? '万利新闻' : ''}</p>
        <span className="title-bar" />
        <div className="news-wrapper">
          <div>
            <img alt="" src="/src/img/about/newsLeft.png"/>
            <section>
              <div>
                <p>
                  {
                    i18n.language === 'zh' ?
                      '服务为上，细节决定品质' :
                      'Service comes first, details determine quality'
                  }
                </p>
                <span />
              </div>
              <p>
                {
                  i18n.language === 'zh' ?
                    '细节决定品质，将服务落到实处。' :
                    'Details determine quality, and we implement our services diligently.'
                }
              </p>
              <p>
                {
                  i18n.language === 'zh' ?
                    '随着天气转热，大厦即将迎来中央空调冷气开放。为了更好的保障所有入驻企业能够有一个更加健康、安全的办公环境，万利中心于2018年4月28日完成了本年度的中央空调清洗及保养工作。' :
                    'As the weather turns hot, the building is about to introduce central air conditioning. To ensure a healthier and safer working environment for all resident businesses, WIN Center completed the annual cleaning and maintenance of the central air conditioning on April 28, 2018.'
                }
              </p>
              <p style={{ marginTop: 28 }}>
                {
                  i18n.language === 'zh' ?
                    '众所周知，由于空调房间相对封闭，室内的温度和湿度很适合致病性微生物尤其是真菌的生长和繁殖。中央空调风管一般在使用1-2年后就需要进行清洗，重点是除积尘，以及除去一些附在管壁、灰尘上的各种细菌。大厦中央空调的清洗工作需要由专业团队进行且费用昂贵，并非所有的办公写字楼均能够按标准进行。' :
                    'As is well known, due to the relatively closed nature of air-conditioned rooms, the indoor temperature and humidity are conducive to the growth and reproduction of pathogenic microorganisms, especially fungi. Central air conditioning ducts generally need cleaning after 1-2 years of use, focusing on removing accumulated dust and various bacteria attached to the duct walls and dust. The cleaning of the central air conditioning in the building requires a professional team and is expensive, not all office buildings can meet the standard.'
                }
              </p>
              <p style={{ marginTop: 28 }}>
                {
                  i18n.language === 'zh' ?
                    '万利中心深度倡导EOD生态办公理念，于外斥巨资打造30000余平米景观园林，于内则是深耕细作，将环境健康、安全放在首位。' :
                    ''
                }
              </p>
              <div className="read-more">
                <p onClick={() => {
                  history.push('/news?id=2');
                }}>READ MORE</p>
              </div>
            </section>
          </div>
          <div>
            <section>
              <div>
                <span />
                <p>
                  {
                    i18n.language === 'zh' ?
                      '成为最好的物业服务者' :
                      'Becoming the Best Property Service Provider'
                  }
                </p>
              </div>
              <section>
                <p>
                  {
                    i18n.language === 'zh' ?
                      '万象之上，利于新境。' :
                      'Above the Myriad, Leading to New Realms.'
                  }
                </p>
                <p>
                  {
                    i18n.language === 'zh' ?
                      '600多个日日夜夜，每一天都是一场自我超越的旅程。比好更好，是万利中心追求的目标。' :
                      'For over 600 days and nights, each day has been a journey of self-transcendence. Striving for better than the best is the goal of Win Center.'
                  }
                </p>
                <p>
                  {
                    i18n.language === 'zh' ?
                      '唯一不变的是初心，即，成为让每一个用户与合作伙伴尊重和信赖的服务者。这就是万利中心，一座公园里的五星级标准写字楼。以服务为根本兼具社会责任。' :
                      'The only thing that remains unchanged is the original intention, that is, to become a service provider respected and trusted by every user and partner. This is Win Center, a five-star standard office building in the park. It is founded on service and carries social responsibility.'
                  }
                </p>
                <p style={{ marginTop: 28 }}>
                  {
                    i18n.language === 'zh' ?
                      '北京，国贸，CBD，顶级商务核心，世界百强聚集地，寸土寸金，繁华而喧嚣。四通八达，交通便利，环聚最好的酒店、金融、休闲和购物之选。是国内外实力强企企业总部的必争之地，也是企业展示实力的理想选择。' :
                      "Beijing, Guomao, CBD, the top business core, a gathering place for the world's top 100 companies, where every inch of land is precious, bustling and prosperous. Well-connected and conveniently accessible, it brings together the best choices in hotels, finance, leisure, and shopping. It is a must-contend place for the headquarters of strong enterprises at home and abroad, an ideal choice for showcasing corporate strength."
                  }
                </p>
                <p>
                  {
                    i18n.language === 'zh' ?
                      'CBD作为商务核心涵盖国贸、大望路、百子湾三大商圈，除了世界百强企业，同时也是金融、地产、传媒、文化创意等国内聚焦行业的集合地。' :
                      ''
                  }
                </p>
                <div className="read-more">
                  <p onClick={() => {
                    history.push('/news?id=3')
                  }}>READ MORE</p>
                </div>
              </section>
            </section>
            <img alt="" src="/src/img/about/newsRight.png"/>
          </div>
        </div>
      </div>
      <div className="location">
        <img alt="" src="/src/img/about/Location.png" className="title-icon"/>
        <p className="title-text">{i18n.language === 'zh' ? '地理位置' : ''}</p>
        <span className="title-bar" />
        <img
          alt=""
          src={
            i18n.language === 'zh' ?
              '/src/img/about/locationmap.png' :
              '/src/img/aboutEn/locationmap.png'
          }
          className="map"
        />
      </div>
    </div>
  )
}

export default Home;
