import React, { useState, useEffect, useRef } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import ImgSwitcher from "../../components/ImgSwitcher";
import Slider from "react-slick";
import { leftText, rightText } from "./dataSource";
import './index.less';

const settings = {
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
};

const sliderLists = [
  '/src/img/center/point/point1.png',
  '/src/img/center/point/point2.png',
  '/src/img/center/point/point3.png',
  '/src/img/center/point/point4.png',
  '/src/img/center/point/point5.png',
]

function Center() {
  const sliderRef = useRef();
  const { t, i18n } = useTranslation();
  const [sliderIndex, setSliderIndex] = useState(0);
  return (
    <div className="home-center-wrapper">
      <img className="top-image" alt="" src="/src/img/center/centernav.jpg" />
      <div className="garden-wrapper">
        <img alt="" src="/src/img/center/Garden.png"  className="common-title-icon"/>
        <p className="common-title-text">{i18n.language === 'zh' ? '建筑之侧，叠翠流霞' : ''}</p>
        <span className="common-title-bar" />
        <p className="garden-title">
          {
            i18n.language === 'zh' ?
              '北京首个EOD（Ecological Office District）园区' :
              'Beijing\'s first Ecological Office District (EOD) park'
          }
        </p>
        <p className="garden-text">
          {
            i18n.language === 'zh' ?
              '万利中心，作为北京首个采用EOD（Ecological Office District）理念设计及运营的园区，代表了都市办公空间的一次革命性跨越。位于北京繁华的CBD区域，项目以其0.8的低容积率独树一帜，为寻求高效与舒适并重的企业提供了理想的办公环境。在万利中心，每一寸空间都经过精心设计，旨在促进工作与自然环境的和谐共生。园区内绿树成荫，绿化覆盖率高，园林之中更拥有多种名贵植被，让人在繁忙的工作间隙也能感受到自然的息息相通。' :
              'Win Center, as Beijing\'s pioneering park designed and operated with the EOD (Ecological Office District) concept, signifies a revolutionary leap in urban office spaces. Located in the bustling CBD area of Beijing, the project distinguishes itself with a low plot ratio of 0.8, providing an ideal office environment for enterprises seeking both efficiency and comfort. Every inch of space in Win Center undergoes meticulous design, aiming to promote the harmonious coexistence of work and the natural environment. The park is lush with greenery, boasting a high green coverage rate and featuring various precious plant species, allowing individuals to experience nature\'s connectivity even in the midst of a busy work schedule.'
          }
        </p>
        <p className="garden-text">
          {
            i18n.language === 'zh' ?
              '万利中心的物业管理团队，秉承“以人为本”的理念，致力于打造一个人性化的工作环境。从细致入微的日常维护，到周到全面的服务体系。围绕着“以人的行动为中心”这一核心理念进行优化和提升。无论是企业员工还是来访客人，都能在万利中心体验到舒适、便捷、高效的工作与交流环境。' :
              'Win Center\'s property management team, guided by the philosophy of "people-oriented," is dedicated to creating a humane working environment. From detailed daily maintenance to comprehensive service systems, the optimization and enhancement revolve around the core idea of "putting people\'s actions at the center." Whether for corporate employees or visiting guests, Win Center offers an environment for comfortable, convenient, and efficient work and communication experiences.'
          }
        </p>
        <p className="garden-text">
          {
            i18n.language === 'zh' ?
              '万利中心，不仅仅是一个办公地标，它更是一个集生态、舒适与人文关怀于一体的办公生态圈。我们相信，良好的工作环境能激发出无限的创造力与潜能，万利中心正是这样一个能够激发您灵感，助力企业成长的理想之所。' :
              'Win Center is not merely an office landmark; it is a comprehensive office ecosystem that integrates ecology, comfort, and human care. We believe that a good working environment can stimulate boundless creativity and potential, and Win Center is precisely the ideal place to inspire your ideas and contribute to the growth of enterprises.'
          }
        </p>
        <div className="garden-about-content">
          <section>
            <h5>
              {
                i18n.language === 'zh' ?
                  '突破传统写字楼瓶颈，打造空间体验新标杆' :
                  'Breaking through the bottleneck of traditional office buildings, setting a new benchmark for spatial experience.'
              }
            </h5>
            <p>
              {
                i18n.language === 'zh' ?
                  '生态数据与体验 —— 园林绿化、容积率':
                  'Ecological Data and Experience — Landscaping, Greening, and Plot Ratio'
              }
            </p>
            <p>
              {
                i18n.language === 'zh' ?
                  '时代的张力，裹挟着人们拼命向前，然而工作与生活应当是一种被自然所激发的，关于热爱的艺术。当走进这片10,000株自然植被与建筑交织的地方，内心深处的那种平静和满足感便悄然而至。四顾之下，能感受到的是生命的热烈簇拥。体会被接纳、被激发、去创造、互相感染，不断向上成长，生生不息。' :
                  'In the tension of the times, dragging people forward desperately, work and life should be a kind of art inspired by nature, about love. When entering this place where 10,000 natural plants intertwine with architecture, a deep sense of calm and satisfaction quietly comes. Looking around, what can be felt is the warm embrace of life. Experience acceptance, inspiration, the drive to create, mutual influence, and continuous growth—everlasting vitality.'
              }
            </p>
            <img alt="" src={i18n.language === 'zh' ? '/src/img/center/gardenLeft.png' : '/src/img/centerEn/gardenLeft.png'} className=""/>
          </section>
          <img alt="" src="/src/img/center/gardenRight.png" className=""/>
        </div>
      </div>
      <div className="culture-wrapper">
        <img alt="" src="/src/img/center/CulturalCollision.png"  className="common-title-icon icon1"/>
        <p className="common-title-text">{i18n.language === 'zh' ? '感受七海之内的文化碰撞' : ''}</p>
        <span className="common-title-bar" />
        <p className="culture-text">
          {
            i18n.language === 'zh' ?
              '在万利中心，每一个角落都被赋予了生命和故事，让人不自觉地想要驻足、探索。从室内的小巧转角到户外的隐秘花园，每一个空间都像是一个章节，吸引人们去细细解读。' :
              'The Win Center is a place where every corner tells a story and invites exploration. Its spaces, from indoor nooks to outdoor gardens, resemble chapters, encouraging people to delve into their intricacies. Stepping into the architectural realm of Win Center feels like a journey through time and space, offering a profound sense of human history, cultural heritage, and a chance to contemplate the philosophical differences between the East and West. Like a philosopher, the space speaks through its structure and decor, emphasizing the intricate connections between humanity, nature, culture, and philosophy.'
          }
        </p>
        <p className="culture-text">
          {
            i18n.language === 'zh' ?
              '当我们走入万利中心的建筑空间，就仿佛踏上了一场时空之旅。我们不仅可以从中感受到人类历史的沉淀与传承，更可以对比、思考和体验东西方不同文化下的哲学思想。这空间如同一位哲学家，用其结构与装饰向我们述说着世界的复杂性与多样性，提醒我们去探索、去思考、去感悟人与自然、文化与哲学之间深厚的联系。' :
              ''
          }
        </p>
        <ImgSwitcher
          style={{ width: 760, marginTop: 60 }}
          leftWord={i18n.language === 'zh' ? '结构、装饰' : ''}
          rightWord={i18n.language === 'zh' ? '一场时空之旅' : ''}
          showControlIcon
        >
          <img alt="" src="/src/img/center/buddha/buddha0.png" />
          <img alt="" src="/src/img/center/buddha/buddha1.png" />
          <img alt="" src="/src/img/center/buddha/buddha2.png" />
          <img alt="" src="/src/img/center/buddha/buddha3.png" />
          <img alt="" src="/src/img/center/buddha/buddha4.png" />
          <img alt="" src="/src/img/center/buddha/buddha5.png" />
          <img alt="" src="/src/img/center/buddha/buddha6.png" />
          <img alt="" src="/src/img/center/buddha/buddha7.png" />
        </ImgSwitcher>
        <img alt="" src="/src/img/about/AboutUs.png"  className="common-title-icon icon2"/>
        <p className="common-title-text">{i18n.language === 'zh' ? '时势皆为你而来' : ''}</p>
        <span className="common-title-bar" />
        <p className="culture-text">
          {
            i18n.language === 'zh' ?
              '万利中心以其独特的魅力，巧妙地塑造了交流的不同场景。无论是别有雅致的MANSION会客厅、还是绿意盎然的COMMUNITY休憩区，每一处都象征着一种沟通的艺术形式。它不仅是空间的呈现，更是对交流深度和质量的极致追求。在这些精心设计的场所中，人们白然而然地被引导进入对话、释放思想，促进互动，让每一次交往都如同一次心灵的舞蹈优雅而有力，充满智慧的魅力。这种微妙的结合，使得建筑与商务如此和谐，共同演绎出一场交流与创新的华丽序曲。' :
              'Win Center, with its unique charm, artfully shapes various scenarios for communication. Whether it\'s the elegant MANSION lounge or the verdant COMMUNITY recreational area, each space symbolizes a form of artistic expression in communication. It is not just a presentation of space but an ultimate pursuit of the depth and quality of communication. In these meticulously designed places, people are naturally guided into conversations, releasing thoughts, fostering interaction, making each encounter like a graceful and powerful dance of the soul, brimming with the charm of wisdom. This subtle integration creates a harmonious blend of architecture and business, jointly composing a magnificent prelude to communication and innovation.'
          }
        </p>
        <p className="culture-text">
          {
            i18n.language === 'zh' ?
              '在这里，高度细分的功能区域全面解决每种商务场景的需求。透过提供不同的配置，万利中心办公商务环境将更为灵活，而令企业获得更多的支持。' :
              'Here, highly segmented functional areas comprehensively address the needs of various business scenarios. By providing different configurations, Win Center\'s office and business environment become more flexible, offering greater support to enterprises.'
          }
        </p>
        <img className="culture-img" alt="" src={i18n.language === 'zh' ? '/src/img/center/culture.png' : '/src/img/centerEn/culture.png'}/>
      </div>
      <div className="point-wrapper">
        <img alt="" src="/src/img/center/PainPoint.png"  className="common-title-icon"/>
        <p className="common-title-text">{i18n.language === 'zh' ? '痛点解决' : ''}</p>
        <span className="common-title-bar" />
        <p className="point-text">
          {
            i18n.language === 'zh' ?
              '在万利中心，我们深知传统写字楼在车位数量、洗手间环境以及电梯使用上所面临的挑战。因此，我们致力于打破常规，通过提供超过600个便捷停车位、高速电梯系统和精细化的物业管理，全面提升办公楼品质和用户体验。' :
              'At Win Center, we are well aware of the challenges faced by traditional office buildings in terms of parking space, restroom conditions, and elevator usage. Therefore, we are committed to breaking conventions by providing more than 600 convenient parking spaces, a high-speed elevator system, and meticulous property management, comprehensively enhancing the quality of the office building and the user experience.'
          }
        </p>
        <p className="point-text">
          {
            i18n.language === 'zh' ?
              '万利中心的每个角落都经过精心设计与布局，旨在为用户创造一个无忧的工作环境，洗手间以现代化设计与高效设施著称，保证了卫生与舒适。超量电梯配置大大缓解了高峰时段的拥堵情况，旨在为您的工作生活带来便捷与舒适。' :
              'Every corner of Win Center has been carefully designed and arranged with the aim of creating a worry-free work environment for users. The restrooms, known for their modern design and efficient facilities, ensure hygiene and comfort. The surplus elevator configuration significantly alleviates congestion during peak hours, aiming to bring convenience and comfort to your work and life.'
          }
        </p>
        <div className="point-slider">
          <div className="left-box">
            {i18n.language === 'zh' && sliderIndex === 1 ? <img className="en-left-extraText" alt="" src="/src/img/center/lift/30s.png"/> : null}
            <p
              className="left-text"
              dangerouslySetInnerHTML={{ __html: i18n.language === 'zh' ? leftText[sliderIndex].title : '' }}
            />
            <img className="en-left-text" alt="" src={leftText[sliderIndex].enTitle}/>
          </div>
          <div className="slider-wrapper">
            <Slider
              ref={c => (sliderRef.current = c)}
              beforeChange={(index, next) => {
                setSliderIndex(next);
              }}
              {...settings}
            >
              {
                sliderLists.map((el, index) => (
                  <img key={index} src={el} />
                ))
              }
            </Slider>
          </div>
          <div className="right-box">
            {
              rightText[sliderIndex].number &&
              <img className="right-number" src={rightText[sliderIndex].number} />
            }
            <p
              style={{ marginTop: 12 }}
              className="right-text"
              dangerouslySetInnerHTML={{ __html: i18n.language === 'zh' ? rightText[sliderIndex].text : rightText[sliderIndex].en }}
            />
          </div>
          <div className="slider-control">
            <div className="arrow-control" onClick={() => {
              sliderRef.current.slickPrev();
            }}>
              <img alt="" src="/src/img/center/leftArrow.png" />
            </div>
            <div className="arrow-icon">
              {
                sliderLists.map((el, index) => (
                  <span key={index} className={index === sliderIndex ? 'active' : ''}/>
                ))
              }
            </div>
            <div className="arrow-control" onClick={() => {
              sliderRef.current.slickNext();
            }}>
              <img alt="" src="/src/img/center/rightArrow.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="first-floor-wrapper">
        <img alt="" src="/src/img/center/firstfloor.png"  className="common-title-icon"/>
        <p className="common-title-text">{i18n.language === 'zh' ? '一层平面图' : ''}</p>
        <span className="common-title-bar" />
        <img alt="" src={i18n.language === 'zh' ? '/src/img/center/wanli.png' : '/src/img/centerEn/wanli.png'}  className="first-floor-map"/>
      </div>
      <div className="map-wrapper">
        <img className="map-mid-img" alt="" src={i18n.language === 'zh' ? '/src/img/center/mapmid.png' : '/src/img/centerEn/mapmid.png'}/>
        <img alt="" src="/src/img/center/LocationMap.png"  className="common-title-icon"/>
        <p className="common-title-text">{i18n.language === 'zh' ? '万利中心区位图' : ''}</p>
        <span className="common-title-bar" />
        <img alt="" src={i18n.language === 'zh' ? '/src/img/center/map.png' : '/src/img/centerEn/map.png'}  className="map-map"/>
      </div>
    </div>
  )
}

export default Center;
