import React from 'react';
import { connect } from 'react-redux';

import Home from './Home.js';

class HomeContainer extends React.Component {
  componentWillMount() {

  }

  render() {
    return (
      <Home />
    );
  }
}

const mapStateToProps = state => {
    return {
      
    };
  };
  
const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);