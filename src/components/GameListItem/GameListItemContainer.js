import { connect } from 'react-redux';

import GameListItem from './GameListItem.js';

const mapStateToProps = (state, ownProps) => {
    return {
      homeTeam: ownProps.homeTeam,
      awayTeam: ownProps.awayTeam,
      homeScore: ownProps.homeScore,
      awayScore: ownProps.awayScore,
      quarter: ownProps.quarter,
    };
  };
  
const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameListItem);