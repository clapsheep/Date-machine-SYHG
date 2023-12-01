var now = new Date();
var start = new Date("2023-10-20");

var timeDiff = now.getTime() - start.getTime();
var day = Math.floor(timeDiff / (1000 * 60 * 60 * 24) + 1);
$("#love").text(day + "일째");

var christmas = new Date("2023-12-25");
var timeDiff2 = christmas.getTime() - now.getTime();
var day2 = Math.floor(timeDiff2 / (1000 * 60 * 60 * 24) + 1);
$("#christmas").text(day2 + "일 남음");

var valentine = new Date("2024-02-14");
var timeDiff3 = valentine.getTime() - now.getTime();
var day3 = Math.floor(timeDiff3 / (1000 * 60 * 60 * 24) + 1);
$("#valentine").text(day3 + "일 남음");

var ms = start.getTime() + 999 * (1000 * 60 * 60 * 24);
var thousand = new Date(ms);
var thousandDate =
  thousand.getFullYear() +
  "." +
  (thousand.getMonth() + 1) +
  "." +
  thousand.getDate();
$("#thousand-date").text(thousandDate);

var timeDiff4 = thousand.getTime() - now.getTime();
var day4 = Math.floor(timeDiff4 / (1000 * 60 * 60 * 24) + 1);
$("#thousand").text(day4 + "일 남음");
