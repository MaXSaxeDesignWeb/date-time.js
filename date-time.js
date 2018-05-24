// generic
var colon = ":";
var space = " ";

// date.js
var d = new Date();
var year = d.getFullYear().toString();
var m = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var month = m[d.getMonth()];
var date = month.concat(space).concat(year);

// full-date.js
var dayDate = d.getDate().toString();
if (dayDate == "1" || dayDate == "21" || dayDate == "31") {
  var dayDateFin = "st";
} else if (dayDate == "2" || dayDate == "22") {
  var dayDateFin = "nd";
} else if (dayDate == "3" || dayDate == "23") {
  var dayDateFin = "rd";
} else {
  var dayDateFin = "th";
}
var dDayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dDay = dDayList[d.getDay()];
var day = dDay.concat(space).concat(dayDate).concat(dayDateFin);
var fullDate = day.concat(space).concat(date);

// time.js
var hours = d.getHours().toString();
var minutes = d.getMinutes().toString();
var seconds = d.getSeconds().toString();
var milliseconds = d.getMilliseconds().toString();
var time = hours.concat(colon).concat(minutes).concat(colon).concat(seconds);

// full-time.js
var 

// date-time.js functions

var dateTime = time.concat(space).concat(date);

// full-date-time.js functions

var fullDateTime = time.concat(space).concat(fullDate);

// full-date-full-time.js functions
var fullDateFullTime = fullTime.concat(space).concat(fullDate
