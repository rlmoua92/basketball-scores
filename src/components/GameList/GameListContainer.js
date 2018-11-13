import { connect } from 'react-redux';

import GameList from './GameList.js';

const mapStateToProps = state => {
    return {
      games: state.games,
    };
  };
  
const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameList);