import React, { useState, useEffect } from 'react';
import nav from "../../img/metal/metalnav.jpg";
import img1 from "../../img/metal/metal01.png";
import img2 from "../../img/metal/metal02.png";
import img3 from "../../img/metal/metal03.png";

function Metal() {
  return (
    <div className="feature-content">
      <img className="content-image" alt="" src={nav}/>
      <div style={{ width: '50%', margin: '100px 0' }}>
        <img className="content-image" alt="" src={img1}/>
      </div>
      <div style={{ width: '50%', marginBottom: 100 }}>
        <img className="content-image" alt="" src={img2}/>
      </div>
      <img className="content-image" alt="" src={img3}/>
    </div>
  )
}

export default Metal;
