import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes/Routes';

import Theme from './Styles/Theme/Theme'
import GlobalStyle from './Styles/GlobalStyle/GlobalStyle'

ReactDOM.render(
  <React.StrictMode>    
    <Theme>
      <GlobalStyle />
      <Routes />
    </Theme>    
  </React.StrictMode>,
  document.getElementById('root')
);