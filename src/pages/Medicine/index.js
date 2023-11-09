import React, { useState, useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';

function Medicine() {
  const { i18n } = useTranslation();
  return (
    <div className="feature-content">
      <img className="content-image" alt="" src="/src/img/medicine/medicinenav.jpg"/>
      <div style={{ width: '70%', margin: '100px 0' }}>
        <img className="content-image" alt="" src={i18n.language === 'zh' ? '/src/img/medicine/medicine01.png' : '/src/img/medicineEn/medicine01.png'}/>
      </div>
    </div>
  )
}

export default Medicine;
