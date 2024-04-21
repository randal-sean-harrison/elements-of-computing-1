$(document).ready(function () {
  // Dynamically load the footer -------------------------------------------------
  $("#navbar").load("navbar.html", function () {
    console.log("Navbar loaded.");
  });

  // Dynamically load the footer -------------------------------------------------
  $("#page-footer").load("footer.html", function () {
    console.log("Footer loaded.");
    $('[data-toggle="tooltip"]').tooltip();
  });

  // Link to elements with data-url attributes -----------------------------------
  $(document).on("click", "[data-url]", function () {
    window.open($(this).attr("data-url"), $(this).attr('data-target'));
  });

  // Back to top button ----------------------------------------------------------
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#back-to-top').fadeIn("fast");
    } else {
      $('#back-to-top').fadeOut("fast");
    }
  });
  $('#back-to-top').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 400);
    return false;
  });

  // South Bend Time function ----------------------------------------------------
  // Time in South Bend -- thanks to Rob Parham @pamblam (Github)
  $("#south-bend-time").remoteTime({
    key: "",
    location: "South Bend, Indiana",
    format: "g:i a" // removed seconds from format: "g:i:s a"
  });

  // reset-adjacent-input-field -------------------------------------------------
  $(".reset-adjacent-input-field").on("click", function () {
    $(this).parent().parent().parent().find("input").val("");
  });


  // Popovers --------------------------------------------------------------------

  // Set options for popovers per page with javascript objects
  $('[data-toggle="popover"]').popover({
    'container': 'body',
    "animation": true,
    "html": true,
    "offset": '10'
  });

  $('.popover-dismiss').popover({
    "trigger": 'focus'
  });


});
