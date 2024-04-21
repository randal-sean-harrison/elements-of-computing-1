$("#reset-resources").on("click", function() {
  // Clear input field
  $("#search-input").val("");
  // Show everyting to start
  $(".card").removeClass("d-none").fadeIn("slow");
  // Set the all button to primary
  $("#all").addClass("active");
});

// Populate modal from readmore links
$(".read-more").on("click", function(){
  var chartTitle = $(this).data("title");
  var chartDescription = $(this).data("description");
  var chartImage = $(this).data("image");

  $("#modal-title").text(chartTitle);
  $("#modal-body").text(chartDescription);
  $("#modal-image").attr("src", chartImage);

  $("#modal-chart-description").modal("show");

});

// Writes all the links to the mustache template
function countWriter() {

    // Show the counts in the buttons
    var allCount = $("#links").find(".card").length;
    var bookCount = $("#links").find(".book").length;
    var courseCount = $("#links").find(".course").length;
    var tutorialCount = $("#links").find(".tutorial").length;
    var visualizationCount = $("#links").find(".visualization").length;
    var toolCount = $("#links").find(".tool").length;
    var languageCount = $("#links").find(".language").length;
    var frameworkCount = $("#links").find(".framework").length;
    var libraryCount = $("#links").find(".library").length;
    var pluginCount = $("#links").find(".plugin").length;

    $("#all").append("&nbsp;&nbsp; ( " + allCount + " )");
    $("#book").append("&nbsp;&nbsp; ( " + bookCount + " )");
    $("#course").append("&nbsp;&nbsp; ( " + courseCount + " )");
    $("#tutorial").append("&nbsp;&nbsp; ( " + tutorialCount + " )");
    $("#visualization").append("&nbsp;&nbsp; ( " + visualizationCount + " )");
    $("#tool").append("&nbsp;&nbsp; ( " + toolCount + " )");
    $("#language").append("&nbsp;&nbsp; ( " + languageCount + " )");
    $("#framework").append("&nbsp;&nbsp; ( " + frameworkCount + " )");
    $("#library").append("&nbsp;&nbsp; ( " + libraryCount + " )");
    $("#plugin").append("&nbsp;&nbsp; ( " + pluginCount + " )");


}

// // Set the active Filter buttons to the correct colors
$("#filter-buttons .btn").on("click", function() {

  // remove all active classes from all buttons
  $("#filter-buttons .btn").removeClass("active");
  // Add the active class to the button clicked
  $(this).addClass("active");

});


// Filter buttons selection ----------------------------------------------
$("#filter-buttons").find(".btn").on("click", function() {

  // Hide everyting to start
  $(".card").addClass("d-none");

  // Add color to the selected button
  $("#filter-buttons .btn").removeClass("active");
  $(this).addClass("active");

  // Get the id text of the button clicked
  var buttonClicked = event.target.id;

  // Turn the id text into a class name
  var show = "." + buttonClicked;

  if (buttonClicked == "all") {

    $(".card").hide().removeClass("d-none").fadeIn();

  } else {

    // show all the panels with this class name
    $(show).hide().removeClass("d-none").fadeIn();

  }

});

// Show all panels on focus into the input field
$("#search-input").on("focus", function() {

  // Clear all other the buttons
  $("#filter-buttons .btn").removeClass("active");
  // Set the all button to primary
  $("#all").addClass("active");

  // Show all panels
  $(".card").removeClass("d-none").fadeIn("slow");

});

// Search field filter
$("#search-input").on("keyup", function() {
  var value = $(this).val().toLowerCase();
  $("#links .card").filter(function() {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
  });
});

countWriter();
