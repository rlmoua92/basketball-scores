const getDate = (date) => {
    const dateNum = date.substr(6, 2);
    return parseInt(dateNum);
};

const getMonth = (date) => {
    const month = date.substr(4, 2);
    return parseInt(month) - 1;
};

const getMonthStr = (date) => {
    const num = getMonth(date);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[num];
};

const getYear = (date) => {
    const year = date.substr(0, 4);
    return parseInt(year);
};

const toDate = (date) => {
    const year = getYear(date);
    const month = getMonth(date);
    const dateNum = getDate(date);
    const newDate = new Date(year, month, dateNum);
    return newDate;
}

const getDay = (date) => {
    const newDate = toDate(date);
    const dayNum = newDate.getDay();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[dayNum];
};

export {
    getDate,
    getMonth,
    getMonthStr,
    getYear,
    getDay,
};