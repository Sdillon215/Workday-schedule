var tasksArr = [];
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

  // get parents id
  var status = $(".new-event")
    .closest(".list-group")
    .attr("id");

  // recreate p element
  var taskp = $("<p id=" + status + ">")
    .addClass("form-control my-auto")
    .text(txtArea);

  var taskId = taskp.attr("id");
  var taskText = taskp.text();
  console.log(taskId);
  console.log(taskText);

  tasksArr.push({
    id: taskId,
    text: taskText
  });

  saveLocal();
  loadTasks();
  // replace textarea with p
  $("textarea").replaceWith(taskp);
});

var saveLocal = function () {
  localStorage.setItem("tasksArr", JSON.stringify(tasksArr));
};

var loadTasks = function (tasksArr) {
  tasksArr = JSON.parse(localStorage.getItem(tasksArr));
  if (!tasksArr) {
    tasksArr = {};
  }
  console.log(tasksArr);
};



loadTasks();

var date = moment();

// var auditEvent = function (taskId) {
//   var currentTime = parseInt(date.format("H"));
//   console.log(taskId);
//   console.log(currentTime);
// };



// auditEvent();