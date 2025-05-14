const today = new Date("2029-02-16");
const todayDayNumber = today.getDay();
console.log(todayDayNumber);
if (todayDayNumber === 0) {
    console.log("Sunday");
}
else if (todayDayNumber === 1) {
    console.log("Monday");
}
else if (todayDayNumber === 2) {
    console.log("Tuesday");
}
else if (todayDayNumber === 3) {
    console.log("Wednesday");
}
else if (todayDayNumber === 4) {
    console.log("Thusday");
}
else if (todayDayNumber === 5) {
    console.log("Friday");
}
else {
    console.log("Saturday");
}
