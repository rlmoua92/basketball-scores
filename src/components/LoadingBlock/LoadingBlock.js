import React from 'react';
import Grid from '@material-ui/core/Grid';

import './LoadingBlock.scss';

const LoadingBlock = (props) => {
  return (
    <Grid container className="loading-block">
      <Grid container item xs={12} md={6} direction="column" className="loading-block-item">
        <Grid container item direction="row">
          <Grid item xs={6}><span class="loading-block-item-content"></span></Grid>
          <Grid item xs={6}><span class="loading-block-item-content"></span></Grid>
        </Grid>
        <Grid container item direction="row">
          <Grid item xs={6}><span class="loading-block-item-content"></span></Grid>
          <Grid item xs={6}><span class="loading-block-item-content"></span></Grid>
        </Grid>
      </Grid>
      <Grid container item xs={12} md={6} direction="column" className="loading-block-item">
        <Grid container item direction="row">
          <Grid item xs={6}><span class="loading-block-item-content"></span></Grid>
          <Grid item xs={6}><span class="loading-block-item-content"></span></Grid>
        </Grid>
        <Grid container item direction="row">
          <Grid item xs={6}><span class="loading-block-item-content"></span></Grid>
          <Grid item xs={6}><span class="loading-block-item-content"></span></Grid>
        </Grid>
      </Grid>
      <Grid container item xs={12} md={6} direction="column" className="loading-block-item">
        <Grid container item direction="row">
          <Grid item xs={6}><span class="loading-block-item-content"></span></Grid>
          <Grid item xs={6}><span class="loading-block-item-content"></span></Grid>
        </Grid>
        <Grid container item direction="row">
          <Grid item xs={6}><span class="loading-block-item-content"></span></Grid>
          <Grid item xs={6}><span class="loading-block-item-content"></span></Grid>
        </Grid>
      </Grid>
      <Grid container item xs={12} md={6} direction="column" className="loading-block-item">
        <Grid container item direction="row">
          <Grid item xs={6}><span class="loading-block-item-content"></span></Grid>
          <Grid item xs={6}><span class="loading-block-item-content"></span></Grid>
        </Grid>
        <Grid container item direction="row">
          <Grid item xs={6}><span class="loading-block-item-content"></span></Grid>
          <Grid item xs={6}><span class="loading-block-item-content"></span></Grid>
        </Grid>
      </Grid>
      <Grid container item xs={12} md={6} direction="column" className="loading-block-item">
        <Grid container item direction="row">
          <Grid item xs={6}><span class="loading-block-item-content"></span></Grid>
          <Grid item xs={6}><span class="loading-block-item-content"></span></Grid>
        </Grid>
        <Grid container item direction="row">
          <Grid item xs={6}><span class="loading-block-item-content"></span></Grid>
          <Grid item xs={6}><span class="loading-block-item-content"></span></Grid>
        </Grid>
      </Grid>
      <Grid container item xs={12} md={6} direction="column" className="loading-block-item">
        <Grid container item direction="row">
          <Grid item xs={6}><span class="loading-block-item-content"></span></Grid>
          <Grid item xs={6}><span class="loading-block-item-content"></span></Grid>
        </Grid>
        <Grid container item direction="row">
          <Grid item xs={6}><span class="loading-block-item-content"></span></Grid>
          <Grid item xs={6}><span class="loading-block-item-content"></span></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LoadingBlock;