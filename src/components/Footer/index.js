import React, { useState, useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import wincenter from '../../img/wincenter.png';
import tubiao from '../../img/tubiao.png';

function Footer() {
  const history = useHistory();
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  return (
    <footer>
      <div style={{textAlign: 'center' }}>
        <div className="footer-box clearfix">
          <div className="footer-left">
            <span className="globle" />
            <span>{t('address')}</span>
          </div>
          <div className="footer-right">
            <ul>
              <li><a onClick={() => {
                history.replace('/')
              }}>{t('about')}</a></li>
              <li><a onClick={() => {
                history.replace('/news')
              }}>{t('news')}</a></li>
              <li><a onClick={() => {
                history.replace('/center')
              }}>{t('center')}</a></li>
              <li><a onClick={() => {
                history.replace('/metal')
              }}>{t('metal')}</a></li>
              <li><a onClick={() => {
                history.replace('/hotel')
              }}>{t('hotel')}</a></li>
              <li><a onClick={() => {
                history.replace('/medicine')
              }}>{t('medicine')}</a></li>
            </ul>
          </div>
          <div className="footer-footer">
            <img alt="" src={wincenter}/>
            <div>
              <img alt="" src={tubiao}/>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
