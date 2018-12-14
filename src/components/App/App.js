import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { Basketball } from 'mdi-material-ui';
import Home from '../Home';
import DateList from '../DateList';
import Game from '../Game';
import Player from '../Player';


const App = (props) => {
  const homePath = '/';
  const gamePath = '/Game/:gameid';
  const playerPath = '/Player/:playerid';

  return (
    <Grid container className="App full-height" direction="column" wrap="nowrap">
      <CssBaseline />
      <Grid container item className="app-header" alignItems="center" justify="center" style={{ maxWidth: "none" }}>
        <Grid container justify="center" alignItems="center" item xs={12}>
          <Grid item>
            <Basketball style={{ marginRight: ".25em" }} className="app-icon" />
          </Grid>
          <Grid item>
            <span className="app-name" style={{ fontWeight: "bold" }}>Basketball Scores</span>
          </Grid>
        </Grid>
        <Grid item style={{ width: "100%", maxWidth: "1024px", margin: "0 auto", position: "relative" }} xs={12}>
          <Switch>
            <Route exact path={homePath} component={DateList} />
          </Switch>
        </Grid>
      </Grid>
      <Grid container item className="grow-1" xs={11} style={{ maxWidth: "none" }}>
        <Switch>
          <Route exact path={homePath} component={Home} />
          <Route path={gamePath} component={Game} />
          <Route path={playerPath} component={Player} />
          <Route render={() => {return <h1>This page doesn't exist.</h1>;}} />
        </Switch>
      </Grid>
    </Grid>
  );
};

export default App;