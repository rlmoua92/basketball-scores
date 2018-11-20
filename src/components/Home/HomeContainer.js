import React from 'react';
import { connect } from 'react-redux';

import Home from './Home.js';
import { getGames, setIsLoading } from '../../actions/index.js';

class HomeContainer extends React.Component {
  componentWillMount() {
    this.props.setLoading(true);
    this.props.loadGames();
  }

  render() {
    return (
      <Home date={this.props.date} isLoading={this.props.isLoading} />
    );
  }
}

const mapStateToProps = state => {
  return {
      date: state.date,
      isLoading: state.isLoading,
  };
};
  
const mapDispatchToProps = dispatch => {
  return {
    loadGames: () => dispatch(getGames()),
    setLoading: (val) => dispatch(setIsLoading(val)),
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);