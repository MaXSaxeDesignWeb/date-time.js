// date.js
var d = new Date();
var year = d.getFullYear().toString();
var m = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var month = m[d.getMonth()];
var dateSpace = " ";
var date = month.concat(dateSpace.concat(year));

// time.js
var timeSpace = " ";
var time = hour.concat(minute).concat(second).concat(milisecond);

// date-time.js functions
var dateTimeSpace = " ";
var dateTime = time.concat(dateTimeSpace).concat(date);
