import React from 'react';
import { connect } from 'react-redux';

import DateList from './DateList.js';
import { getDates, setDate } from '../../actions/index.js';
import { datesBetween } from '../../common.js';

class DateListContainer extends React.Component {
  componentDidMount() {
    this.props.loadDates();
  }

  render() {
    let allDates = [];
    if (this.props.startDate && this.props.endDate) {
      allDates = datesBetween(this.props.startDate, this.props.endDate);
    }
    return (
      <DateList 
        date={this.props.date} 
        startDate={this.props.startDate} 
        endDate={this.props.endDate} 
        allDates={allDates} 
        onDateClick={this.props.onDateClick}
      />
    );
  }
}

const mapStateToProps = state => {
    return {
      date: state.date, 
      startDate: state.startDate,
      endDate: state.endDate,
    };
  };
  
const mapDispatchToProps = dispatch => {
  return {
    loadDates: () => dispatch(getDates()),
    onDateClick: (date) => dispatch(setDate(date)),
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DateListContainer);