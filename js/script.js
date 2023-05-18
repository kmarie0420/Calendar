var todayDate = moment().format("dddd, MMM Do YYYY, h:mm:ss a");
var todayDate = moment().format("dddd, MMM Do YYYY");
$("#currentDay").html(todayDate);

$("#currentDay").html(todayDate);
$(document).ready(function () {
  // event listener
  // all save buttons
  $(".saveBtn").on("click", function () {
    // Get nearby values of the description in JQuery
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // event saved into the local storage
    localStorage.setItem(time, text);
  });

  function timeTracker() {
    //get current hours.
    var timeNow = moment().hour();

    // put time blocks in a loop
    $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id").split("hour")[1]);

      if (blockTime < timeNow) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (blockTime === timeNow) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    });
  }

  // Get item from local storage if any
  $("#hour24 .description").val(localStorage.getItem("hour24"));
  $("#hour1 .description").val(localStorage.getItem("hour0"));
  $("#hour2 .description").val(localStorage.getItem("hour1"));
  $("#hour3 .description").val(localStorage.getItem("hour2"));
  $("#hour4 .description").val(localStorage.getItem("hour3"));
  $("#hour5 .description").val(localStorage.getItem("hour4"));
  $("#hour6 .description").val(localStorage.getItem("hour5"));
  $("#hour7 .description").val(localStorage.getItem("hour6"));
  $("#hour8 .description").val(localStorage.getItem("hour7"));
  $("#hour9 .description").val(localStorage.getItem("hour8"));
  $("#hour10 .description").val(localStorage.getItem("hour9"));
  $("#hour11 .description").val(localStorage.getItem("hour10"));
  $("#hour12 .description").val(localStorage.getItem("hour11"));
  $("#hour13 .description").val(localStorage.getItem("hour12"));
  $("#hour14 .description").val(localStorage.getItem("hour13"));
  $("#hour15 .description").val(localStorage.getItem("hour14"));
  $("#hour16 .description").val(localStorage.getItem("hour15"));
  $("#hour17 .description").val(localStorage.getItem("hour16"));
  $("#hour18 .description").val(localStorage.getItem("hour17"));
  $("#hour19 .description").val(localStorage.getItem("hour18"));
  $("#hour20 .description").val(localStorage.getItem("hour19"));
  $("#hour21 .description").val(localStorage.getItem("hour20"));
  $("#hour22 .description").val(localStorage.getItem("hour21"));
  $("#hour23 .description").val(localStorage.getItem("hour22"));
  $("#hour0 .description").val(localStorage.getItem("hour23"));

  timeTracker();
});
