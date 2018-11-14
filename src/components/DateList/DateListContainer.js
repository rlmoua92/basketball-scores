import React from 'react';
import { connect } from 'react-redux';

import DateList from './DateList.js';
import { getDates } from '../../actions/index.js';

class DateListContainer extends React.Component {
  componentDidMount() {
    this.props.loadDates();
  }

  render() {
    return (
      <DateList startDate={this.props.startDate} endDate={this.props.endDate} />
    );
  }
}

const mapStateToProps = state => {
    return {
      startDate: state.startDate,
      endDate: state.endDate,
    };
  };
  
const mapDispatchToProps = dispatch => {
  return {
    loadDates: () => dispatch(getDates()),
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DateListContainer);