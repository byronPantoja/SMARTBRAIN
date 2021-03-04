import React from 'react';

import dbplogo from '../../assets/dbp2020.svg';

const Logo = () => {
  return (
    <div className="tc pv4 pv5-ns w5 center">
      <img src={dbplogo} alt="dbplogo" style={{ paddingTop: '5px' }} />
    </div>
  );
};

export default Logo;
