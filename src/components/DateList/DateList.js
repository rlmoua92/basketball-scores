import React from 'react';
import { dateToStr, getMonthStr, getDate } from '../../common.js';

import './DateList.scss';

const DateList = (props) => {
  let dateListItems = props.allDates.map(a => {
    let str = dateToStr(a);
    let month = getMonthStr(str, "short");
    let date = getDate(str);
    let divClass = str === props.date ? "date-list-item selected" : "date-list-item";
    return (
      <div className={divClass} key={str} onClick={() => props.onDateClick(str)}>
        {month + " " + date}
      </div>
    );
  });
  
  return (
    <div className="date-list">
      {
        dateListItems
      }
    </div>
  );
}

export default DateList;