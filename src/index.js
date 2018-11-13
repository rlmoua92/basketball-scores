import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import ConfigureStore from './store/ConfigureStore';

import './common.scss';

const store = ConfigureStore();

ReactDOM.render((
  <Provider store={ store }>
    <Router>
      <App />
    </Router>
  </Provider>
), document.getElementById('root'));