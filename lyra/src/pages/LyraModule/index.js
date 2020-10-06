import React from 'react';

import logoImg from '../../assets/images/logo.png';


function LyraModule() {
  return (
    <div id="page-lyra">
      <div id="page-lyra-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Lyra"/>
          <h2>...</h2>
        </div>
      </div>
    </div>
  )
}

export default LyraModule;