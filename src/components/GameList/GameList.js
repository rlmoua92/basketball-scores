import React from 'react';
import Grid from '@material-ui/core/Grid';

import './GameList.scss';

const GameList = (props) => {
  return (
    <Grid container direction="column" className="game-list">
      <Grid container item direction="column">
        <Grid container item direction="row">
          <Grid item xs={6}>Philadelphia</Grid>
          <Grid item xs={3}>124</Grid>
          <Grid item xs={3}>Final</Grid>
        </Grid>
        <Grid container item direction="row">
          <Grid item xs={6}>Miami</Grid>
          <Grid item xs={3}>114</Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </Grid>
      <Grid container item direction="column">
        <Grid container item direction="row">
          <Grid item xs={6}>Philadelphia</Grid>
          <Grid item xs={3}>124</Grid>
          <Grid item xs={3}>Final</Grid>
        </Grid>
        <Grid container item direction="row">
          <Grid item xs={6}>Miami</Grid>
          <Grid item xs={3}>114</Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </Grid>
      <Grid container item direction="column">
        <Grid container item direction="row">
          <Grid item xs={6}>Philadelphia</Grid>
          <Grid item xs={3}>124</Grid>
          <Grid item xs={3}>Final</Grid>
        </Grid>
        <Grid container item direction="row">
          <Grid item xs={6}>Miami</Grid>
          <Grid item xs={3}>114</Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </Grid>
      <Grid container item direction="column">
        <Grid container item direction="row">
          <Grid item xs={6}>Philadelphia</Grid>
          <Grid item xs={3}>124</Grid>
          <Grid item xs={3}>Final</Grid>
        </Grid>
        <Grid container item direction="row">
          <Grid item xs={6}>Miami</Grid>
          <Grid item xs={3}>114</Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </Grid>
      <Grid container item direction="column">
        <Grid container item direction="row">
          <Grid item xs={6}>Philadelphia</Grid>
          <Grid item xs={3}>124</Grid>
          <Grid item xs={3}>Final</Grid>
        </Grid>
        <Grid container item direction="row">
          <Grid item xs={6}>Miami</Grid>
          <Grid item xs={3}>114</Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </Grid>
      <Grid container item direction="column">
        <Grid container item direction="row">
          <Grid item xs={6}>Philadelphia</Grid>
          <Grid item xs={3}>124</Grid>
          <Grid item xs={3}>Final</Grid>
        </Grid>
        <Grid container item direction="row">
          <Grid item xs={6}>Miami</Grid>
          <Grid item xs={3}>114</Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default GameList;