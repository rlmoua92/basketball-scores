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
      <Home date={this.props.date}/>
    );
  }
}

const mapStateToProps = state => {
  return {
      date: state.date,
  };
};
  
const mapDispatchToProps = dispatch => {
  return {
    loadGames: () => dispatch(getGames()),
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);