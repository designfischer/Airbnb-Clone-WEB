import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Theme from './Styles/Theme/Theme'
import GlobalStyle from './Styles/GlobalStyle/GlobalStyle'

ReactDOM.render(
  <React.StrictMode>    
    <Theme>
      <GlobalStyle />
      <App />
    </Theme>    
  </React.StrictMode>,
  document.getElementById('root')
);