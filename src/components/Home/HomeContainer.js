import React from 'react';
import { connect } from 'react-redux';

import Home from './Home.js';
import { getGames } from '../../actions/index.js';

class HomeContainer extends React.Component {
  componentWillMount() {
    this.props.loadGames();
  }

  render() {
    return (
      <Home />
    );
  }
}

const mapStateToProps = state => {
  return {
      games: state.games,
  };
};
  
const mapDispatchToProps = dispatch => {
  return {
    loadGames: () => dispatch(getGames('prod/v1/20181113/scoreboard.json')),
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);