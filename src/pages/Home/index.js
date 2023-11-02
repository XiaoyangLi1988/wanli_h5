import React, { useState, useEffect } from 'react';
import './index.less';

function Home() {
  const [user, setUser] = useState('');
  useEffect(() => {

  }, [user]);
  return (
    <div className="homePageWrapper">

    </div>
  )
}

export default Home;
