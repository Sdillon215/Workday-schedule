// display date in header
var NowMoment = moment();
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));


// create function to set and get items from localStorage
var storage = function (txtClass, btnId, keyValue) {
  $(btnId).on("click", function() {
    var newEvent = $(txtClass).val();
    console.log(newEvent);
    localStorage.setItem(keyValue, newEvent);
  });
  var savedEvent = localStorage.getItem(keyValue);
  $(txtClass).val(savedEvent);
};

// passes parameters for each row to the storage function
storage(".text1", "#btn1", "keyvalue1");
storage(".text2", "#btn2", "keyValue2");
storage(".text3", "#btn3", "keyValue3");
storage(".text4", "#btn4", "keyValue4");
storage(".text5", "#btn5", "keyValue5");
storage(".text6", "#btn6", "keyValue6");
storage(".text7", "#btn7", "keyValue7");
storage(".text8", "#btn8", "keyValue8");
storage(".text9", "#btn9", "keyValua9");

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
