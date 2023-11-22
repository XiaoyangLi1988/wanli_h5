import React, { useState, useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import './index.less';

function Hotel() {
  const { i18n } = useTranslation();
  return (
    <div className="feature-content">
      <img className="content-image" alt="" src="/src/img/hotel/hotelnav.jpg"/>
      <div className="hotel-content-wrapper">
        <img alt="" src="/src/img/medicine/About.png" className="common-title-icon" />
        <p className="common-title-text">{i18n.language === 'zh' ? '万利金殿（北京）酒店有限公司' : ''}</p>
        <span className="common-title-bar" />
        <p className="hotel-text">
          {
            i18n.language === 'zh' ?
              '酒店追求的不仅仅是为客人提供一次临时的住宿体验，而是致力于创造一个可以触动客人内心，让他们感受到宁静、和谐与归属感的空间。品牌旗下每一家酒店都精心融入了其独特的地理和文化环境，力求在设计、服务、以及与自然环境的和谐共生中展现地域特色和深厚文化底蕴。' :
              'Hotels aspire not only to provide guests with a temporary accommodation experience but also to create a space that touches their hearts, allowing them to feel tranquility, harmony, and a sense of belonging. Each hotel under the brand carefully integrates its unique geographical and cultural environment, aiming to showcase regional characteristics and profound cultural heritage through harmonious coexistence in design, service, and with the natural environment.In design philosophy, there is an emphasis on the fusion of simplicity, nature, and elegance, intending to create a relaxed atmosphere through exquisite architectural art and interior design. The hotels avoid excessive decoration, opting instead for simple colors, natural materials, and a harmonious unity with the surrounding landscape, allowing guests to feel the extension of nature and the continuation of culture.'
          }
        </p>
        <p className="hotel-text">
          {
            i18n.language === 'zh' ?
              '在设计理念上，强调简约、自然与高雅的融合，旨在通过精致的建筑艺术和室内设计打造出一种悠然自得的氛围。酒店避免过度装饰，而是通过质朴的色彩、天然的材质以及与周围景观的和谐统一，让客人感受到自然的延伸和文化的传承。' :
              'In terms of service philosophy, the hotels advocate for "people-oriented" service, seeking to exceed guest expectations in detail. Staff undergo high-standard training, reaching professional levels not only in skills but also demonstrating sincerity and thoughtfulness in customer interactions. The goal is to construct a comfortable, secure private space for guests, enabling them to truly relax and find inner peace.'
          }
        </p>
        <p className="hotel-text">
          {
            i18n.language === 'zh' ?
              '服务理念上，酒店提倡“以人为本”的服务，追求在细节上超越客人的期望。员工接受高标准的培训，不仅在技能上达到专业水平，更在待人接物上表现出真诚和贴心，致力于为客人构建一个舒适、安心的私密空间，让他们可以真正放松和找回内心的平静。' :
              'The hotels place great importance on harmonious coexistence with nature and the community. Through a sustainable operating model that emphasizes effective resource utilization and environmental protection, they ensure that the hotel\'s development complements the local community and natural environment. Simultaneously, the hotels actively participate in the preservation and promotion of local culture, organizing various cultural experience activities to allow guests a deeper understanding and appreciation of local traditions and customs. Beyond the concept of traditional accommodation, the journey is about seeking inner peace, experiencing cultural heritage, and the beauty of harmony with nature, aiming to provide each guest with a unique and profound experience and memories.'
          }
        </p>
        <p className="hotel-text">
          {
            i18n.language === 'zh' ?
              '我们非常重视与自然和社区的和谐共处。通过可持续的运营模式，注重资源的有效利用和环境保护，确保酒店的发展与当地社区和自然环境相辅相成。同时，酒店积极参与当地文化的保护和推广，通过组织各种文化体验活动，让客人更深入地了解和欣赏当地的传统与习俗。超越传统住宿的理念，是寻找内心平和、体验文化底蕴和自然和谐之美的旅程，为的是给予每一位客人独一无二的、深刻的体验和回忆。' :
              ''
          }
        </p>
        <img className="hotel-img" alt="" src={i18n.language === 'zh' ? '/src/img/hotel/hotel01.png' : '/src/img/hotelEn/hotel01.png'}/>
      </div>
    </div>
  )
}

export default Hotel;
