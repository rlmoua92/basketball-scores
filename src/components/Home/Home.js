import React from 'react';
import Grid from '@material-ui/core/Grid';

import DateList from '../DateList';
import GameList from '../GameList';
import { getDay, getMonthStr, getDate } from '../../common.js';
//import Navigation from '../Navigation';

import './Home.scss';

const Home = (props) => {
  const month = getMonthStr(props.date);
  const day = getDay(props.date);
  const date = getDate(props.date);
  return (
    <Grid container justify="space-around">
      <Grid container item xs={12} md={11} direction="column" className="grow-1">
        {/*<Grid item>
          <Navigation />
        </Grid>*/}
        <Grid item>
          <DateList />
        </Grid>
        <Grid item className="home-content grow-1">
          <div style={{ padding: ".5em .5em 0" }}>{day + " " + month + " " + date}</div>
          <GameList />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;