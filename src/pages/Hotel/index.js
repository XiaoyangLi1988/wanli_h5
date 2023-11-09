import React, { useState, useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';

function Hotel() {
  const { i18n } = useTranslation();
  return (
    <div className="feature-content">
      <img className="content-image" alt="" src="/src/img/hotel/hotelnav.jpg"/>
      <div style={{ width: '70%', margin: '100px 0' }}>
        <img className="content-image" alt="" src={i18n.language === 'zh' ? '/src/img/hotel/hotel01.png' : '/src/img/hotelEn/hotel01.png'}/>
      </div>
    </div>
  )
}

export default Hotel;
