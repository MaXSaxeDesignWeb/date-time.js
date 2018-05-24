// generic
var d = new Date();
var colon = ":";
var space = " ";

// month-year.js
var year = d.getFullYear().toString();
var m = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var month = m[d.getMonth()];
var monthYear = month.concat(space).concat(year);

// date.js

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
var fullDate = day.concat(space).concat(monthYear);

// time.js
var hours = d.getHours().toString();
var minutes = d.getMinutes().toString();
var seconds = d.getSeconds().toString();
var milliseconds = d.getMilliseconds().toString();
var time = hours.concat(colon).concat(minutes).concat(colon).concat(seconds);

// quart-full-time.js
var quartFullHours = hours.concat("h").concat(space);
var quartFullMinutes = minutes.concat("m").concat(space);
var quartFullSeconds = seconds.concat("s").concat(space);
var quartFullMilliseconds = milliseconds.concat("ms").concat(space);
var quartFullTime = quartFullHours.concat(quartFullMinutes).concat(quartFullSeconds);

// half-full-time.js
var halfFullHours = hours.concat("hr").concat(space);
var halfFullMinutes = minutes.concat("min").concat(space);
var halfFullSeconds = seconds.concat("sec").concat(space);
var halfFullMilliseconds = milliseconds.concat("milsec").concat(space);
var halfFullTime = halfFullHours.concat(halfFullMinutes).concat(halfFullSeconds);

// full-time.js
var fullHours = hours.concat(" hours").concat(space);
var fullMinutes = minutes.concat(" minutes").concat(space);
var fullSeconds = seconds.concat(" seconds").concat(space);
var fullMilliseconds = milliseconds.concat(" milliseconds").concat(space);
var fullTime = fullHours.concat(fullMinutes).concat(fullSeconds);

// text-time.js
var txtHours = "Hours: ";
var txtMinutes = "Minutes: ";
var txtSeconds = "Seconds: ";
var txtMilliseconds = "Milliseconds: ";
var textHours = txtHours.concat(hours).concat(space);
var textMinutes = txtMinutes.concat(minutes).concat(space);
var textSeconds = txtSeconds.concat(seconds).concat(space);
var textMilliseconds = txtMilliseconds.concat(milliseconds).concat(space);
var textTime = textHours.concat(textMinutes).concat(textSeconds);
var textMsTime = textTime.concat(textMilliseconds);

// ms-time.js
var msTime = time.concat(milliseconds);

// half-full-ms-time.js
var halfFullMsTime = halfFullTime.concat(halfFullMilliseconds);

// full-ms-time.js
var fullMsTime = fullTime.concat(fullMilliseconds);

// date-time.js
var dateTime = time.concat(space).concat(date);

// full-date-time.js
var fullDateTime = time.concat(space).concat(fullDate);

// full-date-half-full-time.js
var fullDateHalfFullTime = halfFullTime.concat(space).concat(fullDate);

// full-date-full-time.js
var fullDateFullTime = fullTime.concat(space).concat(fullDate);

// console logs
console.log("date ".concat(date));
console.log("fullDate ".concat(fullDate));
console.log("time ".concat(time));
console.log("halfFullTime ".concat(halfFullTime));
console.log("fullTime ".concat(fullTime));
console.log("msTime ".concat(msTime));
console.log("halfFullMsTime ".concat(halfFullMsTime));
console.log("fullMsTime ".concat(fullMsTime));
console.log("dateTime ".concat(dateTime));
console.log("fullDateTime ".concat(fullDateTime));
console.log("fullDateHalfFullTime ".concat(fullDateHalfFullTime));
console.log("fullDateFullTime ".concat(fullDateFullTime));
