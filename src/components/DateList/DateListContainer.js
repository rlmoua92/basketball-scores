import React from 'react';
import { connect } from 'react-redux';
import ArrowRight from '@material-ui/icons/ArrowRight';
import ArrowLeft from '@material-ui/icons/ArrowLeft';

import DateList from './DateList.js';
import { getDates, setDate, getGames, setIsLoading } from '../../actions/index.js';
import { datesBetween, scrollElementLeftByX } from '../../common.js';

class DateListContainer extends React.Component {
  componentDidMount() {
    this.props.loadDates();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.date !== this.props.date) {
      this.props.setIsLoading(true);
      this.props.loadGames();
    }
  }

  scrollDates(x) {
    scrollElementLeftByX('date-list', x);
  }

  render() {
    let allDates = [];
    if (this.props.startDate && this.props.endDate) {
      allDates = datesBetween(this.props.startDate, this.props.endDate);
    }
    return (
      <div>
        <div className="date-list-control control-left" onClick={() => this.scrollDates(-500)}><ArrowLeft /></div>
        <DateList 
          date={this.props.date} 
          startDate={this.props.startDate} 
          endDate={this.props.endDate} 
          allDates={allDates} 
          onDateClick={this.props.onDateClick}
          todayDate={this.props.todayDate}
        />
        <div className="date-list-control control-right" onClick={() => this.scrollDates(500)}><ArrowRight /></div>
      </div>
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
    setIsLoading: (val) => dispatch(setIsLoading(val)),
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DateListContainer);