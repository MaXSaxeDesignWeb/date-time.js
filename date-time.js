// date.js
var d = new Date();
var year = d.getFullYear().toString();
var m = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var month = m[d.getMonth()];
var dateSpace = " ";
var date = month.concat(dateSpace.concat(year));

// time.js
var hours = d.getHours();
var minutes = d.getMinutes();
var seconds = d.getSeconds();
var milliseconds = d.getMilliseconds();
var timeColon = ":";
var time = hours.concat(timeColon).concat(minutes).concat(timeColon).concat(seconds);

// date-time.js functions
var dateTimeSpace = " ";
var dateTime = time.concat(dateTimeSpace).concat(date);
