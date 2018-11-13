import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from '../Home';

import './App.scss';

const App = (props) => {
  return (
    <div className="App">
      <CssBaseline />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route render={() => {return <h1>This page doesn't exist.</h1>;}} />
      </Switch>
    </div>
  );
};

export default App;