import React, { useState, useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';

function Center() {
  const { i18n } = useTranslation();
  return (
    <div className="feature-content">
      <img className="content-image" alt="" src="/src/img/center/centernav.jpg"/>
      <img className="content-image" alt="" src={i18n.language === 'zh' ? '/src/img/center/center01.png' : '/src/img/centerEn/center01.png'}/>
      <img className="content-image" alt="" src={i18n.language === 'zh' ? '/src/img/center/center02.png' : '/src/img/centerEn/center02.png'}/>
      <img className="content-image" alt="" src={i18n.language === 'zh' ? '/src/img/center/center03.png' : '/src/img/centerEn/center03.png'} style={{ marginTop: -2 }}/>
      <img className="content-image" alt="" src={i18n.language === 'zh' ? '/src/img/center/center04.png' : '/src/img/centerEn/center04.png'}/>
      <div style={{ backgroundColor: '#1a1a1a' }}>
        <img className="content-image" alt="" src={i18n.language === 'zh' ? '/src/img/center/center05.png' : '/src/img/centerEn/center05.png'}/>
        <img className="mid-image" alt="" src={i18n.language === 'zh' ? '/src/img/center/centermid.png' : '/src/img/centerEn/centermid.png'}/>
      </div>
    </div>
  )
}

export default Center;
