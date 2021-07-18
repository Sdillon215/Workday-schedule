// display date in header
var NowMoment = moment();
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));


// create function to set and get items from localStorage
var storage = function (txtId, btnId, keyValue) {
  $(btnId).on("click", function() {
    var newEvent = $(txtId).val();
    console.log(newEvent);
    localStorage.setItem(keyValue, newEvent);
  });
  var savedEvent = localStorage.getItem(keyValue);
  $(txtId).val(savedEvent);
};

// passes parameters for each row to the storage function
storage("#9", "#btn1", "keyvalue1");
storage("#10", "#btn2", "keyValue2");
storage("#11", "#btn3", "keyValue3");
storage("#12", "#btn4", "keyValue4");
storage("#13", "#btn5", "keyValue5");
storage("#14", "#btn6", "keyValue6");
storage("#15", "#btn7", "keyValue7");
storage("#16", "#btn8", "keyValue8");
storage("#17", "#btn9", "keyValua9");

var eventText = $(".event-text")


for (var i = 0; i < eventText.length; i++) {
  var eventTextArea = $(eventText[i]);
  let eventHour = parseInt(eventText.attr("id"));
  console.log(eventHour);
  let currentHour = NowMoment.format("H");
  console.log(currentHour);
  if (currentHour > eventHour) {
    eventTextArea.addClass("past");
  } else if (currentHour == eventHour) {
    eventTextArea.addClass("present");
  };
};
