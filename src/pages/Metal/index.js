import React, { useState, useEffect } from 'react';
import {useTranslation} from "react-i18next";

function Metal() {
  const { i18n } = useTranslation();
  return (
    <div className="feature-content">
      <img className="content-image" alt="" src="/src/img/metal/metalnav.jpg"/>
      <div style={{ width: '70%', margin: '100px 0' }}>
        <img className="content-image" alt="" src={i18n.language === 'zh' ? '/src/img/metal/metal01.png' : '/src/img/metalEn/metal01.png'}/>
      </div>
      <div style={{ width: '70%', marginBottom: 100 }}>
        <img className="content-image" alt="" src={i18n.language === 'zh' ? '/src/img/metal/metal02.png' : '/src/img/metalEn/metal02.png'}/>
      </div>
      <img className="content-image" alt="" src={i18n.language === 'zh' ? '/src/img/metal/metal03.png' : '/src/img/metalEn/metal03.png'}/>
    </div>
  )
}

export default Metal;
