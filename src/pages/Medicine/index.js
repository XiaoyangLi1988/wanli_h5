import React, { useState, useEffect } from 'react';
import nav from "../../img/medicine/medicinenav.jpg";
import img1 from "../../img/medicine/medicine01.png";

function Medicine() {
  return (
    <div className="feature-content">
      <img className="content-image" alt="" src={nav}/>
      <div style={{ width: '50%', margin: '100px 0' }}>
        <img className="content-image" alt="" src={img1}/>
      </div>
    </div>
  )
}

export default Medicine;
