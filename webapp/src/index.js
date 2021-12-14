import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import "./i18n";
import * as serviceWorker from './serviceWorker';

// Custom
import App from './app/Custom-App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
, document.getElementById('root'));

serviceWorker.unregister();