function isLeapYear() {
    let a = new Date(arguments[0]);
    let year = a.getFullYear(a);
    let answer;
    if (isFinite(year)) {
        if (year % 100 === 0 && year % 400 !== 0) {
            answer = year + ' is not a leap year';
        } else if (year % 4 === 0) {
            answer = year + ' is a leap year';
        } else {
            answer = year + ' is not a leap year';
        }
    } else {
        answer = 'Invalid Date';
    }
    return answer;
}
isLeapYear('2020-12-01 00:00:00');
