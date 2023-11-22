import React from 'react';

export default function News1({ isCn }) {
  return (
    <>
      <div className="right-title">
        <p>{ isCn ? '万利中心｜早春限定，点开“闻”香' : 'Early Spring Limited Edition, Click to \'Smell\' the Fragrance'}</p>
        <p>{ isCn ? 'CBD万利中心带来公园里的办公空间' : 'An Office Area Within the Park' }</p>
        <p>{ isCn ? '来源：万利中心' : 'Publisher: WIN CENTER' }</p>
      </div>
      <div className="right-content">
        <p style={{ textAlign: 'center' }}>{ isCn ? '今日惊蛰，人间惊鸿，草长莺飞季，厚积薄发时！祝大家身体健康，事业兴旺！' : 'Wishing everyone good health and a thriving career!' }</p>
        <img alt="" src="/src/img/news/news1/news1.jpg"/>
        <img alt="" src="/src/img/news/news1/news2.jpg"/>
        <img alt="" src="/src/img/news/news1/news3.jpg"/>
        <img alt="" src="/src/img/news/news1/news4.jpg"/>
        <img alt="" src="/src/img/news/news1/news5.jpg"/>
        <img alt="" src="/src/img/news/news1/news6.jpg"/>
      </div>
    </>
  )
}
