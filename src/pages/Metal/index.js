import React, { useState, useEffect } from 'react';
import {useTranslation} from "react-i18next";
import ImgSwitcher from "../../components/ImgSwitcher";
import './index.less';

function Metal() {
  const { i18n } = useTranslation();

  return (
    <div className="feature-content">
      <img className="content-image" alt="" src="/src/img/metal/metalnav.jpg"/>
      <div className="metal-about-wrapper">
        <img alt="" src="/src/img/medicine/About.png" className="common-title-icon" />
        <p className="common-title-text">{i18n.language === 'zh' ? '万利金(上海)文化服务有限公司' : ''}</p>
        <span className="common-title-bar" />
        <div className="metal-about-content">
          <section>
            <p>
              {
                i18n.language === 'zh' ?
                  '公司是一家集研发、交易、咨询为一体的综合性贵金属交易服务商，专注于为全球客户提供专业、透明、高效的贵金属交易及相关服务。自成立以来，我们一直致力于创新和卓越，确保我们的客户能够在动荡的全球金融市场中把握机遇，实现资产的保值增值。' :
                  'The company is a comprehensive precious metals trading service provider that integrates research and development, transactions, and consulting. It focuses on offering professional, transparent, and efficient precious metals trading and related services to global clients. Since its establishment, the company has been committed to innovation and excellence, ensuring that its clients can seize opportunities and achieve asset preservation and appreciation in the volatile global financial markets.'
              }
            </p>
            <p>
              {
                i18n.language === 'zh' ?
                  '公司主要经营黄金、白银、铂金等多种贵金属的现货交易与期货交易服务，同时提供包括投资策略咨询、市场动态分析、以及风险管理在内的综合解决方案，帮助客户在复杂的市场环境中做出明智的投资决策。我们拥有一支由多领域专家组成的团队，他们凭借深厚的行业知识和丰富的市场经验，能够对市场趋势进行精准分析和预测，为客户提供第一手的、高质量的行业信息和个性化投资建议。' :
                  'The company primarily engages in spot and futures trading of various precious metals, including gold, silver, platinum, etc. It also provides a comprehensive solution, including investment strategy consultation, market dynamics analysis, and risk management, to assist clients in making wise investment decisions in complex market environments. The team, composed of experts from various fields, leverages profound industry knowledge and rich market experience to accurately analyze and predict market trends, providing clients with firsthand, high-quality industry information, and personalized investment advice.'
              }
            </p>
            <p>
              {
                i18n.language === 'zh' ?
                  '公司注重技术创新，我们的在线交易平台引入了先进的金融科技，确保了交易的安全性、便捷性和实时性，让客户无论身处何地，都能快速响应市场变化，完成交易。我们严格遵守国际金融市场规则和地方监管要求，致力于打造一个公平、透明、有序的交易环境。' :
                  'The company emphasizes technological innovation, introducing advanced financial technology to its online trading platform to ensure the security, convenience, and real-time nature of transactions. This enables clients to quickly respond to market changes and complete transactions from anywhere. The company strictly adheres to international financial market rules and local regulatory requirements, striving to create a fair, transparent, and orderly trading environment.'
              }
            </p>
            <p>
              {
                i18n.language === 'zh' ?
                  '我们深知，客户的信任和满意是公司发展的核心。因此，我们不断追求服务质量的提升和业务范围的拓展，旨在建立长期、稳固的客户关系，成为贵金属交易领域值得信赖的领航者。' :
                  'Understanding that customer trust and satisfaction are at the core of company development, it continually pursues improvements in service quality and expands its business scope. The aim is to establish long-term, stable customer relationships and become a trusted leader in the precious metals trading industry.'
              }
            </p>
          </section>
          <img alt="" src="/src/img/metal/metal01.png" className=""/>
        </div>
      </div>
      <div className="metal-everlasting-wrapper">
        <img alt="" src="/src/img/metal/Everlasting.png" className="common-title-icon"/>
        <p className="common-title-text">{i18n.language === 'zh' ? '打造永恒的珠宝之美' : ''}</p>
        <span className="common-title-bar" />
        <p className="metal-everlasting-text">
          {
            i18n.language === 'zh' ?
              '设计团队汲取自然、艺术和全球文化的灵感，致力于创造出永恒的美学和当下的流行元素完美结合的艺术品。每一件作品都经历了严格的设计、打磨和检验过程，确保其在形式和功能上都达到了极致。无论您是在寻找一件代表永恒的首饰，还是希望在贵金属市场中获得盈利，我们都有信心为您提供超越期望的服务。' :
              'Our design team draws inspiration from nature, art, and global culture, dedicated to creating artworks that seamlessly blend timeless aesthetics with contemporary elements. Each piece undergoes a rigorous design, polishing, and inspection process, ensuring it reaches the pinnacle in both form and function.Whether you are looking for a piece of timeless jewelry or aiming for profit in the precious metals market, we are confident in providing services that exceed expectations.'
          }
        </p>
        <img className="metal-everlasting-img" alt="" src={i18n.language === 'zh' ? '/src/img/metal/metal02.png' : '/src/img/metalEn/metal02.png'}/>
      </div>
      <div className="metal-museum-wrapper">
        <img alt="" src="/src/img/metal/GoldMuseum.png" className="common-title-icon"/>
        <p className="common-title-text">{i18n.language === 'zh' ? '黄金博物馆' : ''}</p>
        <span className="common-title-bar" />
        <p className="metal-museum-text">
          {
            i18n.language === 'zh' ?
              '黄金博物馆是这一神奇金属多维度文化与社会影响的综合展示媒介。博物馆珍藏的黄金艺术品不仅具有深远的文化底蕴，也从不同角度探究了黄金在人类社会中的多重身份：既是实用与幻想的交织，也是地位与力量的体现。作为货币，它见证了商业与贸易的繁荣；作为饰品，它象征着美与情感的表达；作为器皿，它则是工艺与功能的完美结合。对于那些佩戴、使用、欣赏甚至崇敬黄金的人来说，这个博物馆无疑是一个价值连城的宝库。' :
              ''
          }
        </p>
        <ImgSwitcher
          style={{ width: 760, marginTop: 60, marginBottom: 180 }}
          leftWord={i18n.language === 'zh' ? '孕育了丰富的神话' : ''}
          rightWord={i18n.language === 'zh' ? '历史的宝典' : ''}
        >
          <img alt="" src="/src/img/metal/buddha/buddha0.png" />
          <img alt="" src="/src/img/metal/buddha/buddha1.png" />
          <img alt="" src="/src/img/metal/buddha/buddha2.png" />
          <img alt="" src="/src/img/metal/buddha/buddha3.png" />
          <img alt="" src="/src/img/metal/buddha/buddha4.png" />
          <img alt="" src="/src/img/metal/buddha/buddha5.png" />
        </ImgSwitcher>
      </div>
    </div>
  )
}

export default Metal;
