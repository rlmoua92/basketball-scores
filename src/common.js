const convertDate = (date, format) => {
    const days = ['Sun','Mon','Tues','Wed','Thu','Fri','Sat'];
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const day = date.getDay();
    const dd = date.getDate();
    const mm = date.getMonth() + 1;
    const yyyy = date.getFullYear();
    let dateStr = '';

    switch (format) {
        case 'yyyymmdd':
            dateStr = yyyy.toString() + mm.toString() + dd.toString();
            break;
        case 'Day Mon Date':
            dateStr = days[day] + ' ' + months[mm - 1] + ' '  + dd.toString();
            break;
        case 'Mon Date':
            dateStr = months[mm - 1] + ' '  + dd.toString();
            break;
        default:
            dateStr = yyyy.toString() + mm.toString() + dd.toString();
            break;
    }

    return dateStr;
}

export { 
    convertDate,
};