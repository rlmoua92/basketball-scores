import React from 'react';
import Grid from '@material-ui/core/Grid';

import DateList from '../DateList';
import GameList from '../GameList';
import LoadingBlock from '../LoadingBlock';
import { getDay, getMonthStr, getDate } from '../../common.js';
//import Navigation from '../Navigation';

import './Home.scss';

const Home = (props) => {
  const month = getMonthStr(props.date);
  const day = getDay(props.date);
  const date = getDate(props.date);
  return (
    <Grid container justify="space-around">
      <Grid container item xs={12} direction="column" className="grow-1" wrap="nowrap">
        {/*<Grid item>
          <Navigation />
        </Grid>*/}
        <Grid item style={{ width: "100%", maxWidth: "1024px", margin: "0 auto", position: "relative" }}>
          <DateList />
        </Grid>
        <Grid container item className="home-content grow-1">
          <Grid item style={{ width: "100%", maxWidth: "1024px", margin: "0 auto" }}>
            <div style={{ padding: ".5em .5em 0" }}>{day + " " + month + " " + date}</div>
            {
              props.isLoading ? 
              <LoadingBlock /> :
              <GameList />
            }
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;