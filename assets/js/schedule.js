var tasks = {};
// display date in header
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

// $(".list-group").on("click")

$(".list-group").on("click", "p", function () {
    var text = $(this)
      .text()
      .trim();
    var textInput = $("<textarea>")
      .addClass("form-control my-auto")
      .val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
  });

  $(".list-group").on("blur", "textarea", function () {
    // get the textareas current value/text
    var text = $(this)
      .val()
      .trim();
  
    // recreate p element
    var taskp = $("<p>")
      .addClass("form-control my-auto")
      .text(text);
  
    // replace textarea with p
    $(this).replaceWith(taskp);
  });