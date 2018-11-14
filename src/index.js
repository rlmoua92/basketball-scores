import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import ConfigureStore from './store/ConfigureStore';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { dateToStr } from '../src/common.js';

import './common.scss';

const today = new Date();
const date = dateToStr(today);
const store = ConfigureStore({ date });
const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

ReactDOM.render((
  <Provider store={ store }>
    <Router>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </Router>
  </Provider>
), document.getElementById('root'));