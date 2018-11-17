const getDate = (date) => {
    const dateNum = date.substr(6, 2);
    return parseInt(dateNum);
};

const getMonth = (date) => {
    const month = date.substr(4, 2);
    return parseInt(month) - 1;
};

const getMonthStr = (date, style="long") => {
    const num = getMonth(date);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    if (style === "long") {
        return months[num];
    } else {
        return months[num].substr(0,3);
    }
};

const getYear = (date) => {
    const year = date.substr(0, 4);
    return parseInt(year);
};

const getDay = (date) => {
    const newDate = strToDate(date);
    const dayNum = newDate.getDay();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[dayNum];
};

const datesBetween = (startDate, endDate) => {
    let newStartDate = strToDate(startDate);
    let newEndDate = strToDate(endDate);
    let dates = [];
    while (newStartDate.getTime() !== newEndDate.getTime()) {
        dates.push(new Date(newStartDate));
        newStartDate.setDate(newStartDate.getDate() + 1);
    }
    dates.push(newStartDate);
    return dates;
}

const strToDate = (date) => {
    const year = getYear(date);
    const month = getMonth(date);
    const dateNum = getDate(date);
    const newDate = new Date(year, month, dateNum);
    return newDate;
}

const dateToStr = (date) => {
    let dd = date.getDate();
    if (dd.toString().length < 2) {
        dd = "0" + dd.toString();
    }
    let mm = date.getMonth() + 1;
    if (mm.toString().length < 2) {
        mm = "0" + mm.toString();
    }
    const yyyy = date.getFullYear();
    const dateStr = yyyy.toString() + mm + dd;
    return dateStr;
}

const getOffsetLeft = (className) => {
    let el = document.getElementsByClassName(className)[0];
    let offsetLeft = el.offsetLeft;
    return offsetLeft;
}

const scrollElementLeft = (containerClassName, itemClassName) => {
    let offsetLeft = getOffsetLeft(itemClassName);
    let container = document.getElementsByClassName(containerClassName)[0];
    container.scrollLeft = offsetLeft;
}

export {
    getDate,
    getMonth,
    getMonthStr,
    getYear,
    getDay,
    datesBetween,
    strToDate,
    dateToStr,
    getOffsetLeft,
    scrollElementLeft,
};