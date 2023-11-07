import React, { useState, useEffect } from 'react';
import nav from "../../img/hotel/hotelnav.jpg";
import img1 from "../../img/hotel/hotel01.png";

function Hotel() {
  return (
    <div className="feature-content">
      <img className="content-image" alt="" src={nav}/>
      <div style={{ width: '50%', margin: '100px 0' }}>
        <img className="content-image" alt="" src={img1}/>
      </div>
    </div>
  )
}

export default Hotel;
