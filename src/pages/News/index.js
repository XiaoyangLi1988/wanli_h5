import React, { useState, useEffect } from 'react';
import nav from "../../img/news/newsnav.jpg";
import img1 from "../../img/news/news01.png";

function News() {
  return (
    <div className="feature-content">
      <img className="content-image" alt="" src={nav}/>
      <div style={{ width: '50%', margin: '100px 0' }}>
        <img className="content-image" alt="" src={img1}/>
      </div>
    </div>
  )
}

export default News;
