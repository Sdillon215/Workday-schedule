var tasks = {};
// display date in header
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

// when form is clicked turns into <p> into <textarea>
$(".event-row").on("click", "p", function () {
    var text = $(this)
        .text()
        .trim();
    var textInput = $("<textarea>")
        .addClass("form-control my-auto new-event")
        .val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});


$(".event-row button").click(function () {
    var txtArea = $(this)
    .closest(".event-row")
    .children(".list-group")
    .children("textarea")
    .val()
    .trim();
    console.log(this);
    
      console.log(txtArea);

    // recreate p element
    var taskp = $("<p>")
      .addClass("form-control my-auto")
      .text(txtArea);

    // replace textarea with p
    $("textarea").replaceWith(taskp);
});
