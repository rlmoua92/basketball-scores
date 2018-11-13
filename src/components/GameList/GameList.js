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
                    homeTeam={game.hTeam.triCode}
                    awayTeam={game.vTeam.triCode}
                    homeScore={game.hTeam.score}
                    awayScore={game.vTeam.score}
                    quarter={game.startTimeEastern}
                    key={game.gameId}
                  />;
        })
      }
    </Grid>
  );
}

export default GameList;