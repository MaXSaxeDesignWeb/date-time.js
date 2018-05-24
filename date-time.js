// date.js
var d = new Date();
var year = d.getFullYear().toString();
var m = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var month = m[d.getMonth()];
var dateSpace = " ";
var date = month.concat(dateSpace).concat(year);

// full-date.js
var dayDate = d.getDate().toString();
var dDayList = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var dDay = dDayList[d.getDay()];
var fullDateSpace = " ";
var day = dDay.concat(fullDateSpace).concat(dayDate);
var fullDate = day.concat(fullDateSpace).concat(date);

// time.js
var hours = d.getHours().toString();
var minutes = d.getMinutes().toString();
var seconds = d.getSeconds().toString();
var milliseconds = d.getMilliseconds().toString();
var timeColon = ":";
var time = hours.concat(timeColon).concat(minutes).concat(timeColon).concat(seconds);

// date-time.js functions
var dateTimeSpace = " ";
var dateTime = time.concat(dateTimeSpace).concat(date);
