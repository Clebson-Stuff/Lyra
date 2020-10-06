import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LyraModule from './pages/LyraModule';

function Routes() {
  return(
    <BrowserRouter>
      <Route path="/" exact componet={LyraModule}/>
    </BrowserRouter>
  )
}

export default Routes;