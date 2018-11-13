import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import DateList from '../DateList';
import GameList from '../GameList';
//import Navigation from '../Navigation';

import './Home.scss';

const Home = (props) => {
  return (
    <Grid container justify="space-around">
      <Grid item xs={12} md={11}>
        <Paper className="full-height">
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h5" align="center">Basketball Stats</Typography>
            </Grid>
            {/*<Grid item>
              <Navigation />
            </Grid>*/}
            <Grid item>
              <DateList />
            </Grid>
            <Grid item>
              <GameList />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Home;