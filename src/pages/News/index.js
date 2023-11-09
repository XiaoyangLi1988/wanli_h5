import React, { useState, useEffect } from 'react';
import {useTranslation} from "react-i18next";

function News() {
  const { i18n } = useTranslation();
  return (
    <div className="feature-content">
      <img className="content-image" alt="" src="/src/img/news/newsnav.jpg"/>
      <div style={{ width: '70%', margin: '100px 0' }}>
        <img className="content-image" alt="" src={i18n.language === 'zh' ? '/src/img/news/news01.png' : '/src/img/newsEn/news01.png'}/>
      </div>
    </div>
  )
}

export default News;
