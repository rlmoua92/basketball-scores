import React from 'react';
import Grid from '@material-ui/core/Grid';

import './GameListItem.scss';

const GameListItem = (props) => {
  let homeClass = props.homeScore > props.awayScore ? "winner" : "";
  let awayClass = props.awayScore > props.homeScore ? "winner" : "";
  return (
    <Grid container item xs={12} md={6} direction="column" className="game-list-item">
      <Grid container item direction="row" className={homeClass}>
        <Grid item xs={6} className="game-list-item-team">{props.homeTeam}</Grid>
        <Grid item xs={3} className="game-list-item-score">{props.homeScore}</Grid>
        <Grid item xs={3} className="game-list-item-time">{props.time}</Grid>
      </Grid>
      <Grid container item direction="row" className={awayClass}>
        <Grid item xs={6} className="game-list-item-team">{props.awayTeam}</Grid>
        <Grid item xs={3} className="game-list-item-score">{props.awayScore}</Grid>
        <Grid item xs={3} className="game-list-item-time"></Grid>
      </Grid>
    </Grid>
  );
}

export default GameListItem;