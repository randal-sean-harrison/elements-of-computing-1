var seedDate = new Date();

//------------ set the seed date here ---------------
seedDate.setFullYear(2021, 7, 23);
// --------------------------------------------------

var dateString = "";
const milliseconds = 60 * 60 * 24 * 7 * 1000;

// Add dates to the spans for the links
$("#tablist .fall-dates").each(function() {
  $(this).text(seedDate.toDateString());
  seedDate.setTime(seedDate.getTime() + milliseconds);
});

seedDate.setFullYear(2021, 7, 23);

// Add dates to the H3s for the week headers
$(".week-headers .fall-dates").each(function() {
  $(this).text(seedDate.toDateString());
  seedDate.setTime(seedDate.getTime() + milliseconds);
});

// Replace "mon" with "week of"
$(".fall-dates").text(function() {
  return $(this).text().replace("Mon", "Week of");
});
// Replace 2020 with empty string
$(".fall-dates").text(function() {
  return $(this).text().replace("2021", "");
});

// show and hide weeks
$("#show-hide-weeks").on("click", function() {

  if ($("#show-hide-weeks").text() == "Expand all") {
    // Roll the individual dates up
    $("#tablist").fadeOut();
    // Change the text of the button
    $("#show-hide-weeks").text("Collapse all");
    // Remove the active class on current tab
    $("#tablist a").removeClass("active");
    // show all the tabs
    $("#calendar-contents .tab-pane").addClass("show active");
    // Show the H3s
    $(".week-headers").removeClass("d-none");
  } else {
    // Roll the individual dates down
    $("#tablist").fadeIn();
    // Change the text of the button
    $("#show-hide-weeks").text("Expand all");
    // hide all the tabs then show the first contents and activate the first link
    $("#calendar-contents .tab-pane").removeClass("show active");
    // $("#tab-contents > .tab-pane").removeClass("show active");
    $("#first-tab-link").addClass("active");
    $(".first-tab-content").addClass("show active");
    // Hide the H3s
    $(".week-headers").addClass("d-none");
  }

});
