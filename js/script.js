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
    localStorage.setItem(time, JSON.stringify(text));
  });

  //get current hours.
  var timeNow = moment().hour();

  // put time blocks in a loop
  $(".time-block").each(function () {
    var blockTime = parseInt($(this).attr("id").split("hour-")[1]);
console.log(blockTime)
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

  // Get item from local storage if any
  for(let i = 8; i <= 17; i++) {
    $('#hour-' + i + ' textarea').val(JSON.parse(localStorage.getItem('hour-' + i)));
  }
  
  // $("#hour10 .description").val(localStorage.getItem("hour9"));
  // $("#hour11 .description").val(localStorage.getItem("hour10"));
  // $("#hour12 .description").val(localStorage.getItem("hour11"));
  // $("#hour13 .description").val(localStorage.getItem("hour12"));
  // $("#hour14 .description").val(localStorage.getItem("hour13"));
  // $("#hour15 .description").val(localStorage.getItem("hour14"));
  // $("#hour16 .description").val(localStorage.getItem("hour15"));
  // $("#hour17 .description").val(localStorage.getItem("hour16"));
});
