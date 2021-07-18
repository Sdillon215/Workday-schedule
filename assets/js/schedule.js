// display date in header
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));


// create function to set and get items from localStorage
var storage = function (txtId, btnId, keyValue) {
  $(btnId).on("click", function() {
    var newEvent = $(txtId).val();
    console.log(newEvent);
    localStorage.setItem(keyValue, newEvent);
  })
}

// passes parameters for each row to the storage function
storage("#9", "#btn1", "keyvalue1");
storage("#10", "#btn2", "keyValue2");
storage("#11", "#btn3", "keyValue3");
storage("#12", "#btn4", "keyValue4");
storage("#1", "#btn5", "keyValue5");
storage("#2", "#btn6", "keyValue6");
storage("#3", "#btn7", "keyValue7");
storage("#4", "#btn8", "keyValue8");
storage("#5", "#btn9", "keyValua9");
