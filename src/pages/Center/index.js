import React, { useState, useEffect } from 'react';
import nav from '../../img/center/centernav.jpg';
import img1 from '../../img/center/center01.png';
import img2 from '../../img/center/center02.png';
import img3 from '../../img/center/center03.png';
import img4 from '../../img/center/center04.png';
import img5 from '../../img/center/center05.png';
import mid from '../../img/center/centermid.png';

function Center() {
  return (
    <div className="feature-content">
      <img className="content-image" alt="" src={nav}/>
      <img className="content-image" alt="" src={img1}/>
      <img className="content-image" alt="" src={img2}/>
      <img className="content-image" alt="" src={img3} style={{ marginTop: -2 }}/>
      <img className="content-image" alt="" src={img4}/>
      <div style={{ backgroundColor: '#1a1a1a' }}>
        <img className="content-image" alt="" src={img5}/>
        <img className="mid-image" alt="" src={mid}/>
      </div>
    </div>
  )
}

export default Center;
