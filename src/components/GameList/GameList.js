import React from 'react';
import Grid from '@material-ui/core/Grid';
import GameListItem from '../GameListItem';

import './GameList.scss';

const GameList = (props) => {
  return (
    <Grid container direction="column" className="game-list">
      {
        props.games.map((game) => {
          return <GameListItem
                    homeTeam="Philadelphia"
                    awayTeam="Miami"
                    homeScore={124}
                    awayScore={111}
                    quarter="Final"
                  />;
        })
      }
    </Grid>
  );
}

export default GameList;