import React from 'react';
import { connect } from 'react-redux';

import App from './App.js';

class AppContainer extends React.Component {
    componentDidMount() {
        //this.props.onMount();
    }

    render() {
        return (
            <App />
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
)(AppContainer);