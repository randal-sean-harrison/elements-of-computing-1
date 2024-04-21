$(document).ready(function() {

  var numberTypesChecked = 0;

  function showAllTypes() {
    $(".card-container").fadeIn(function() {
      $(this).removeClass("d-none").css("display", "block");
    });
    numberTypesChecked = 8;

  }

  function hideAllTypes() {
    $(".card-container").fadeOut(function() {
      $(this).addClass("d-none").css("display", "none");
      $(".syllabus-congratulations").removeClass("d-none").css("display", "block");
    });

    numberTypesChecked = 0;

  }

  function changeTypesText(numberTypesChecked) {
    // change the icon and change visibility of dates
    if (numberTypesChecked == 8) {

      // Change the text of the button
      $("#show-hide-contents").text("Check all");

    } else {

      // Change the text of the button
      $("#show-hide-contents").text("Uncheck all");
      $(".syllabus-congratulations").removeClass("d-none").css("display", "block");

    }
  }


  // Show / hide all the types by checking / Unchecking the checkboxes
  $("#show-hide-contents").on("click", function() {
    if ($("#show-hide-contents").text() == "Uncheck all") {
      // Uncheck all the boxes
      $("#syllabus-parts i").each(function() {
        $(this).removeClass("fa-check-square").addClass("fa-square");
      });
      // Change the text of the button
      $("#show-hide-contents").text("Check all");

      showAllTypes();


    } else {
      // Uncheck all the boxes
      $("#syllabus-parts i").each(function() {
        $(this).addClass("fa-check-square").removeClass("fa-square");
      });
      // Change the text of the button
      $("#show-hide-contents").text("Uncheck all");

      hideAllTypes();

    }

  });


  // Toggle individual checkboxes for dates
  $(document).on("click", ".filter-type-checkbox", function() {


    var clickedCheckbox = "." + $(this).data("filter");
    // console.log(clickedCheckbox);
    // change the icon and change visibility of dates
    if ($(this).find("i").hasClass("fa-square")) {
      // change to checked
      $(this).find("i").removeClass("fa-square").addClass("fa-check-square");

      // toggle visibility of the date
      $(clickedCheckbox).fadeOut(function() {
        $(this).addClass("d-none");
      });

      // Subtract one
      numberTypesChecked += 1;

      changeTypesText(numberTypesChecked);

    } else {
      $(this).find("i").addClass("fa-square").removeClass("fa-check-square");

      // toggle visibility of the date
      $(clickedCheckbox).fadeIn().removeClass("d-none").css("display", "block");


      // Subtract one
      numberTypesChecked -= 1;

      changeTypesText(numberTypesChecked);

    }

  });

  // Show the proper div on radio button click
  $(document).delegate(".panel-understanding-check .radio input", "click", function() {

    // Create the ID for the answer div from the question number
    var dataQuestionNumber = "#" + $(this).data("question-number");

    // Show the comment div
    $(dataQuestionNumber).removeClass("d-none").css("display", "block");

    // Get the comment and alert type data attributes
    var alertContent = $(this).data("comment");
    var alertType = $(this).data("alert-type");

    // Write the comment and alert type to the div
    $(dataQuestionNumber).html(alertContent);
    $(dataQuestionNumber).removeClass("alert-danger").removeClass("alert-warning").removeClass("alert-success").addClass(alertType);
  });

  // Grade descriptions
  $(".gradepoint").on("click", function(){
    var gradepoint = $(this).data("grade");
    var gradeDescription = $(this).data("grade-description");

    $("#modal-gradepoint .modal-header h5").text(gradepoint);
    $("#modal-gradepoint .modal-body").html(gradeDescription);

    $("#modal-gradepoint").modal("show");
  });



});
// document.ready
