import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';

function Header(props) {
  const history = useHistory();
  const { t, i18n } = useTranslation();
  const [opacity, setOpacity] = useState();
  const [hash, setHash] = useState(location.pathname);
  const hashRef = useRef();
  hashRef.current = hash;
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const maxScroll = 100;
      const scrollPosition = window.scrollY || window.pageYOffset;
      setOpacity(Math.min(scrollPosition / maxScroll, 1));
    })
    history.listen(location => {
      // 最新路由的 location 对象，可以通过比较 pathname 是否相同来判断路由的变化情况
      if (hashRef.current !== location.pathname) {
        // 路由发生了变化
        setHash(location.pathname);
        window.scrollTo(0, 0);
      }
    })
    i18n.changeLanguage('zh');
  }, []);
  return (
    <header style={{
      backgroundColor: `rgba(255, 255, 255, ${opacity})`,
      border: `1px solid rgba(202, 202, 202, ${opacity})`
    }}>
      <div className="header-container">
        <div className="nav-box">
          <div className="nav-left">
            <a
              id="logo_top"
              href=""
              style={
                opacity > 0.8 ?
                  { backgroundImage: 'url(src/img/logo1.png)' } :
                  { backgroundImage: 'url(src/img/logo.png)' }
              }
            />
          </div>
          <div className="nav-mid">
            <ul className="navbar-nav">
              <li>
                <a
                  className={hash === '/' ? 'active' : ''}
                  style={
                    opacity > 0.8 ?
                      { color: '#333' } :
                      { color: '#fefefe' }
                  }
                  onClick={() => {
                    history.replace('/')
                  }}
                >
                  {t('about')}
                </a>
              </li>
              <li>
                <a
                  className={hash === '/news' ? 'active' : ''}
                  style={
                    opacity > 0.8 ?
                      { color: '#333' } :
                      { color: '#fefefe' }
                  }
                  onClick={() => {
                    history.replace('/news');
                  }}
                >
                  {t('news')}
                </a>
              </li>
              <li>
                <a
                  className={hash === '/center' ? 'active' : ''}
                  style={
                    opacity > 0.8 ?
                      { color: '#333' } :
                      { color: '#fefefe' }
                  }
                  onClick={() => {
                    history.replace('/center')
                  }}
                >
                  {t('center')}
                </a>
              </li>
              <li>
                <a
                  className={hash === '/metal' ? 'active' : ''}
                  style={
                    opacity > 0.8 ?
                      { color: '#333' } :
                      { color: '#fefefe' }
                  }
                  onClick={() => {
                    history.replace('/metal')
                  }}
                >
                  {t('metal')}
                </a>
              </li>
              <li>
                <a
                  className={hash === '/hotel' ? 'active' : ''}
                  style={
                    opacity > 0.8 ?
                      { color: '#333' } :
                      { color: '#fefefe' }
                  }
                  onClick={() => {
                    history.replace('/hotel')
                  }}
                >
                  {t('hotel')}
                </a>
              </li>
              <li>
                <a
                  className={hash === '/medicine' ? 'active' : ''}
                  style={
                    opacity > 0.8 ?
                      { color: '#333' } :
                      { color: '#fefefe' }
                  }
                  onClick={() => {
                    history.replace('/medicine')
                  }}
                >
                  {t('medicine')}
                </a>
              </li>
            </ul>
            <div
              className="lang-btn"
              style={
                opacity > 0.8 ?
                  { color: '#333' } :
                  { color: '#fefefe' }
              }
            >
              <span id="lang_cn" style={{marginRight: 8}} onClick={() => {
                i18n.changeLanguage('zh');
              }}>简体</span>
              |
              <span id="lang_en" style={{marginLeft: 8}} onClick={() => {
                i18n.changeLanguage('en')
              }}>EN</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
