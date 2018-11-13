import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import ConfigureStore from './store/ConfigureStore';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import './common.scss';

const store = ConfigureStore();
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