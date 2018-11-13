import React from 'react';

import './DateList.scss';

const DateList = (props) => {
  return (
    <div className="date-list">
      <div className="date-list-item">
        Nov 11
      </div>
      <div className="date-list-item selected">
        TODAY
      </div>
      <div className="date-list-item">
        Nov 13
      </div>
      <div className="date-list-item">
        Nov 14
      </div>
      <div className="date-list-item">
        Nov 15
      </div>
      <div className="date-list-item">
        Nov 16
      </div>
      <div className="date-list-item">
        Nov 17
      </div>
    </div>
  );
}

export default DateList;