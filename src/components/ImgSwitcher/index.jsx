import React, { useState } from 'react';
import './index.less';

export default function ImgSwitcher({ style, showControlIcon, leftWord, rightWord, children = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="img-switcher-wrapper" style={style}>
      <section>
        <div className="left-img-box">
          {children[activeIndex === 0 ? children.length - 1 : activeIndex - 1]}
          <div>
            <img alt="" src="/src/img/center/ArtCulture.png"/>
            <p>{leftWord}</p>
          </div>
        </div>
        <div className="mid-img-box">
          {children[activeIndex]}
        </div>
        <div className="right-img-box">
          {children[activeIndex === children.length - 1 ? 0 : activeIndex + 1]}
          <div>
            <p>{rightWord}</p>
            <img alt="" src="/src/img/center/History.png"/>
          </div>
        </div>
      </section>
      <div className="bottom-buttons">
        <div className="arrow-control" onClick={() => {
          if (activeIndex === 0) {
            setActiveIndex(children.length - 1)
          } else {
            setActiveIndex(activeIndex - 1)
          }
        }}>
          <img alt="" src="/src/img/center/leftArrow.png" />
        </div>
        {
          showControlIcon ?
            <div className="arrow-icon">
              <img alt="" src="/src/img/center/arrow-icon.png" />
            </div> :
            <div className="arrow-icon">
              {
                children.map((el, index) => (
                  <span key={index} className={index === activeIndex ? 'active' : ''}/>
                ))
              }
            </div>
        }
        <div className="arrow-control" onClick={() => {
          if (activeIndex === children.length - 1) {
            setActiveIndex(0)
          } else {
            setActiveIndex(activeIndex + 1)
          }
        }}>
          <img alt="" src="/src/img/center/rightArrow.png" />
        </div>
      </div>
    </div>
  )
}
