var eventText = $(".event-text")
var NowMoment = moment();
// display date in header
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));


// create function to set and get items from localStorage
var storage = function (txtClass, btnId, keyValue) {
  // on save btn click txtClass value is set to localStorage
  $(btnId).on("click", function () {
    var newEvent = $(txtClass).val();
    localStorage.setItem(keyValue, newEvent);
  });
  // gets items from localStorage and populates events
  var savedEvent = localStorage.getItem(keyValue);
  $(txtClass).val(savedEvent);
};

// passes parameters for each event to the storage function
storage(".text1", "#btn1", "keyvalue1");
storage(".text2", "#btn2", "keyValue2");
storage(".text3", "#btn3", "keyValue3");
storage(".text4", "#btn4", "keyValue4");
storage(".text5", "#btn5", "keyValue5");
storage(".text6", "#btn6", "keyValue6");
storage(".text7", "#btn7", "keyValue7");
storage(".text8", "#btn8", "keyValue8");
storage(".text9", "#btn9", "keyValua9");

// checks task time vs actual time and changes color accordingly
var auditTask = function () {
  // for loop to iterate through events
  for (var i = 0; i < eventText.length; i++) {
    // assigns eventText at current index to eventTextArea
    var eventTextArea = $(eventText[i]);
    // assigns the eventTextArea id to eventHour and changes to integer
    var eventHour = parseInt(eventTextArea.attr("id"));
    // uses moment to get current hour assigns to currentHour
    var currentHour = NowMoment.format("H");

    if (currentHour > eventHour) {
      eventTextArea.addClass("past");
    } else if (currentHour == eventHour) {
      eventTextArea.addClass("present");
    };
    if (currentHour < eventHour) {
      eventTextArea.addClass("future");
    };
  };
};

// calls auditTask function every 15 mins
setInterval(function () {
  auditTask();
}, (1000 * 60) * 15);

// call auditTask on page load
auditTask();

