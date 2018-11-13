import React from 'react';
import Grid from '@material-ui/core/Grid';

import './GameList.scss';

const GameList = (props) => {
  return (
    <Grid container direction="column" className="game-list">
      <Grid container item direction="column" className="game-list-item">
        <Grid container item direction="row" className="winner">
          <Grid item xs={6} className="game-list-team">Philadelphia</Grid>
          <Grid item xs={3} className="game-list-score">124</Grid>
          <Grid item xs={3} className="game-list-quarter">Final</Grid>
        </Grid>
        <Grid container item direction="row">
          <Grid item xs={6} className="game-list-team">Miami</Grid>
          <Grid item xs={3} className="game-list-score">114</Grid>
          <Grid item xs={3} className="game-list-quarter"></Grid>
        </Grid>
      </Grid>
      <Grid container item direction="column" className="game-list-item">
        <Grid container item direction="row" className="winner">
          <Grid item xs={6} className="game-list-team">Philadelphia</Grid>
          <Grid item xs={3} className="game-list-score">124</Grid>
          <Grid item xs={3} className="game-list-quarter">Final</Grid>
        </Grid>
        <Grid container item direction="row">
          <Grid item xs={6} className="game-list-team">Miami</Grid>
          <Grid item xs={3} className="game-list-score">114</Grid>
          <Grid item xs={3} className="game-list-quarter"></Grid>
        </Grid>
      </Grid>
      <Grid container item direction="column" className="game-list-item">
        <Grid container item direction="row" className="winner">
          <Grid item xs={6} className="game-list-team">Philadelphia</Grid>
          <Grid item xs={3} className="game-list-score">124</Grid>
          <Grid item xs={3} className="game-list-quarter">Final</Grid>
        </Grid>
        <Grid container item direction="row">
          <Grid item xs={6} className="game-list-team">Miami</Grid>
          <Grid item xs={3} className="game-list-score">114</Grid>
          <Grid item xs={3} className="game-list-quarter"></Grid>
        </Grid>
      </Grid>
      <Grid container item direction="column" className="game-list-item">
        <Grid container item direction="row" className="winner">
          <Grid item xs={6} className="game-list-team">Philadelphia</Grid>
          <Grid item xs={3} className="game-list-score">124</Grid>
          <Grid item xs={3} className="game-list-quarter">Final</Grid>
        </Grid>
        <Grid container item direction="row">
          <Grid item xs={6} className="game-list-team">Miami</Grid>
          <Grid item xs={3} className="game-list-score">114</Grid>
          <Grid item xs={3} className="game-list-quarter"></Grid>
        </Grid>
      </Grid>
      <Grid container item direction="column" className="game-list-item">
        <Grid container item direction="row" className="winner">
          <Grid item xs={6} className="game-list-team">Philadelphia</Grid>
          <Grid item xs={3} className="game-list-score">124</Grid>
          <Grid item xs={3} className="game-list-quarter">Final</Grid>
        </Grid>
        <Grid container item direction="row">
          <Grid item xs={6} className="game-list-team">Miami</Grid>
          <Grid item xs={3} className="game-list-score">114</Grid>
          <Grid item xs={3} className="game-list-quarter"></Grid>
        </Grid>
      </Grid>
      <Grid container item direction="column" className="game-list-item">
        <Grid container item direction="row" className="winner">
          <Grid item xs={6} className="game-list-team">Philadelphia</Grid>
          <Grid item xs={3} className="game-list-score">124</Grid>
          <Grid item xs={3} className="game-list-quarter">Final</Grid>
        </Grid>
        <Grid container item direction="row">
          <Grid item xs={6} className="game-list-team">Miami</Grid>
          <Grid item xs={3} className="game-list-score">114</Grid>
          <Grid item xs={3} className="game-list-quarter"></Grid>
        </Grid>
      </Grid>
      <Grid container item direction="column" className="game-list-item">
        <Grid container item direction="row" className="winner">
          <Grid item xs={6} className="game-list-team">Philadelphia</Grid>
          <Grid item xs={3} className="game-list-score">124</Grid>
          <Grid item xs={3} className="game-list-quarter">Final</Grid>
        </Grid>
        <Grid container item direction="row">
          <Grid item xs={6} className="game-list-team">Miami</Grid>
          <Grid item xs={3} className="game-list-score">114</Grid>
          <Grid item xs={3} className="game-list-quarter"></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default GameList;