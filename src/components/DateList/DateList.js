import React from 'react';
import Grid from '@material-ui/core/Grid';

import './DateList.scss';

const DateList = (props) => {
  return (
    <Grid container className="date-list" wrap="nowrap">
      <Grid item xs={3}>
        Nov 11
      </Grid>
      <Grid item xs={3}>
        TODAY
      </Grid>
      <Grid item xs={3}>
        Nov 13
      </Grid>
      <Grid item xs={3}>
        Nov 14
      </Grid>
      <Grid item xs={3}>
        Nov 15
      </Grid>
      <Grid item xs={3}>
        Nov 16
      </Grid>
      <Grid item xs={3}>
        Nov 17
      </Grid>
    </Grid>
  );
}

export default DateList;