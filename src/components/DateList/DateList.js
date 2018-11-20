import React from 'react';
import { dateToStr, getMonthStr, getDate, strToDate } from '../../common.js';

import './DateList.scss';

const DateList = (props) => {
  let dateListItems = props.allDates.map(a => {
    let str = dateToStr(a);
    let month = getMonthStr(str, "short");
    let date = getDate(str);
    let today = strToDate(props.todayDate);
    let divClass = str === props.date ? "date-list-item selected" : "date-list-item";
    return (
      <div className={divClass} key={str} onClick={() => props.onDateClick(str)}>
        {
          a.getTime() === today.getTime() ?
          "Today" :
          month + " " + date
        }
      </div>
    );
  });
  
  return (
    <div className="date-list">
      <div className="date-list-control control-left"></div>
      {
        dateListItems
      }
      <div className="date-list-control control-right"></div>
    </div>
  );
}

export default DateList;