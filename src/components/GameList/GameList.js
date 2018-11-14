import React from 'react';
import Grid from '@material-ui/core/Grid';
import GameListItem from '../GameListItem';

import './GameList.scss';

const GameList = (props) => {
  return (
    <Grid container direction="column" className="game-list">
      {
        props.games.map((game) => {
          let date = new Date(game.startTimeUTC);
          let hour = date.getHours();
          let period = hour >= 12 ? "PM" : "AM";
          if (hour > 12) {
            hour -= 12;
            hour = hour.toString();
          }
          let min = date.getMinutes().toString();
          if (min.length < 2) {
            min = "0" + min;
          }
          let time = hour + ":" + min + " " + period;
          return <GameListItem
                    homeTeam={game.hTeam.triCode}
                    awayTeam={game.vTeam.triCode}
                    homeScore={game.hTeam.score}
                    awayScore={game.vTeam.score}
                    quarter={time}
                    key={game.gameId}
                  />;
        })
      }
    </Grid>
  );
}

export default GameList;