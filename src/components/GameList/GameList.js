import React from 'react';
import Grid from '@material-ui/core/Grid';
import GameListItem from '../GameListItem';

import './GameList.scss';

const GameList = (props) => {
  return (
    <Grid container direction="row" className="game-list">
      {
        props.games.length ?
        props.games.map((game) => {
          let time = "";
          let gameStatus = game.isGameActivated;
          let homeScore = game.hTeam.score;
          let awayScore = game.vTeam.score;
          if (gameStatus && game.period.current > 0) {
            if (game.period.isHalftime) {
              time = "Halftime";
            } else {
              let quarter = game.period.current;
              switch (quarter) {
                case 1:
                  quarter = "1st";
                  break;
                case 2:
                  quarter = "2nd";
                  break;
                case 3:
                  quarter = "3rd";
                  break;
                case 4:
                  quarter = "4th";
                  break;
                case 5:
                  quarter = "OT";
                  break;
                default:
                  quarter -= 4;
                  quarter = quarter.toString() + "OT";
                  break;
              }
              if (game.period.isEndOfPeriod) {
                time = "End"
              } else {
                time = game.clock;
              }
              time += " " + quarter;
            }
          } else if (game.period.current >= 4) {
            time = "Final";
            if (game.period.current === 5) {
              time += " (OT)";
            } else if (game.period.current > 5) {
              let extra = game.period.current - 4;
              time += " (" + extra.toString() + "OT)"
            }
          } else {
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
            time = hour + ":" + min + " " + period;
            homeScore = "--";
            awayScore = "--";
          }
          return <GameListItem
                    homeTeam={game.hTeam.triCode}
                    awayTeam={game.vTeam.triCode}
                    homeScore={homeScore}
                    awayScore={awayScore}
                    time={time}
                    key={game.gameId}
                  />;
        }) : 
        <div style={{ padding: ".5em" }}>
          There are no games today.
        </div>
      }
    </Grid>
  );
}

export default GameList;