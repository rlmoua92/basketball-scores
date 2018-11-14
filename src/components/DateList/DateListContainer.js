import React from 'react';
import { connect } from 'react-redux';

import DateList from './DateList.js';
import { getDates, setDate, getGames } from '../../actions/index.js';
import { datesBetween } from '../../common.js';

class DateListContainer extends React.Component {
  componentDidMount() {
    this.props.loadDates();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.date !== this.props.date) {
      this.props.loadGames();
    }
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
        todayDate={this.props.todayDate}
      />
    );
  }
}

const mapStateToProps = state => {
    return {
      date: state.date, 
      startDate: state.startDate,
      endDate: state.endDate,
      todayDate: state.todayDate,
    };
  };
  
const mapDispatchToProps = dispatch => {
  return {
    loadDates: () => dispatch(getDates()),
    onDateClick: (date) => dispatch(setDate(date)),
    loadGames: () => dispatch(getGames()),
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DateListContainer);