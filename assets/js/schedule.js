// display date in header
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));


// create function to set and get items from localStorage
var storage = function (txtId, btnId, value) {
  $(btnId).on("click", function() {
    var newValue = $(txtId).val();
    console.log(newValue);
  })
}

storage("#9", "#btn1", "value");