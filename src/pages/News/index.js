import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import {useTranslation} from "react-i18next";
import { newsOutlines, leftImgs } from './dataSource';
import News1 from './details/news1';
import News2 from './details/news2';
import News3 from './details/news3';
import News4 from './details/news4';
import News5 from './details/news5';
import News6 from './details/news6';
import News7 from './details/news7';
import './index.less';

function getId(search) {
  const params = {};
  const regex = /([^&=]+)=([^&]*)/g; // 匹配键值对的正则表达式

  let match;
  while ((match = regex.exec(search)) !== null) {
    const key = decodeURIComponent(match[1]); // 解码键
    const value = decodeURIComponent(match[2]); // 解码值
    params[key] = value;
  }
  return params.id;
}

function News() {
  const idRef = useRef();
  const history = useHistory();
  const { i18n } = useTranslation();
  idRef.current = getId(location.search.substring(1));

  useEffect(() => {
    const scrollHeight = document.getElementById('news_content_wrapper').offsetTop;
    if (idRef.current) {
      window.scrollTo(0, scrollHeight - 72);
    } else {
      window.scrollTo(0, 0);
    }
  }, [idRef.current]);

  return (
    <div className="feature-content">
      <img className="content-image" alt="" src="/src/img/news/newsnav.jpg"/>
      <div className="news-content-wrapper" id="news_content_wrapper">
        {
          !idRef.current &&
          <div className="news-outline">
            <ul>
              {
                newsOutlines.map((el, index) => (
                  <li key={index} onClick={() => {
                    history.push(`/news?id=${index+1}`)
                  }}>
                    <section>
                      <p>{el.date}</p>
                      <p>{el.month}</p>
                    </section>
                    <section>
                      {
                        i18n.language === 'zh' ?
                          <>
                            <p>{el.title}</p>
                            <p>{el.subtitle}</p>
                            <p>{el.publisher}</p>
                          </> :
                          <>
                            <p>{el.enTitle}</p>
                            <p>{el.enSubTitle}</p>
                            <p>{el.enPublisher}</p>
                          </>
                      }
                    </section>
                    <span />
                  </li>
                ))
              }
            </ul>
          </div>
        }
        {
          idRef.current &&
          <div className="news-detail">
            <section className="left-box">
              {
                leftImgs.map((el, index) => (
                  <div key={index}>
                    <img alt="" src={el.src} onClick={() => {
                      history.replace(`/news?id=${index+1}`)
                    }}/>
                    <p>{i18n.language === 'zh' ? el.title : el.enTitle}</p>
                  </div>
                ))
              }
            </section>
            <section className="right-box">
              {idRef.current === '1' && <News1 isCn={i18n.language === 'zh'}/>}
              {idRef.current === '2' && <News6 isCn={i18n.language === 'zh'}/>}
              {idRef.current === '3' && <News7 isCn={i18n.language === 'zh'}/>}
              {idRef.current === '4' && <News2 isCn={i18n.language === 'zh'}/>}
              {idRef.current === '5' && <News3 isCn={i18n.language === 'zh'}/>}
              {idRef.current === '6' && <News5 isCn={i18n.language === 'zh'}/>}
              {idRef.current === '7' && <News4 isCn={i18n.language === 'zh'}/>}
            </section>
          </div>
        }
      </div>
    </div>
  )
}

export default News;
