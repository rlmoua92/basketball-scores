import React from 'react';
import Grid from '@material-ui/core/Grid';

import './GameListItem.scss';

const GameListItem = (props) => {
  return (
    <Grid container item direction="column" className="game-list-item">
      <Grid container item direction="row">
        <Grid item xs={6} className="game-list-item-team">{props.homeTeam}</Grid>
        <Grid item xs={3} className="game-list-item-score">{props.homeScore}</Grid>
        <Grid item xs={3} className="game-list-item-quarter">{props.quarter}</Grid>
      </Grid>
      <Grid container item direction="row">
        <Grid item xs={6} className="game-list-item-team">{props.awayTeam}</Grid>
        <Grid item xs={3} className="game-list-item-score">{props.awayScore}</Grid>
        <Grid item xs={3} className="game-list-item-quarter"></Grid>
      </Grid>
    </Grid>
  );
}

export default GameListItem;