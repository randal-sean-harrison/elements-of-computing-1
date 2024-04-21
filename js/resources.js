$(document).ready(function() {

  function loadStars() {
    // initialize array for favorites unless empty
    var favoritesArray = localStorage.getItem('conveying-data-viz-favorites') ?
      JSON.parse(localStorage.getItem('conveying-data-viz-favorites')) : [];

    for (let i = 0; i < favoritesArray.length; i++) {
      var idString = "#" + favoritesArray[i];
      $(idString).find(".fa-star").removeClass("far").addClass("fas");
    }
  }

  loadStars();

  $("#reset-resources").on("click", function() {
    // Clear input field
    $("#search-input").val("");
    // Show everyting to start
    $(".card").removeClass("d-none").fadeIn("slow");
    // Clear the filter buttons first
    $("#filter-buttons a").removeClass("active")
    // Set the all button to primary
    $("#all").addClass("active");

  });

  // Writes all the links to the mustache template
  function linkWriter() {

    $.getJSON("json/resources.json", function(data) {

      // Sort the json resources object
      function sortJson(a, b) {
        return a.name > b.name ? 1 : -1;
      }

      data.resources.sort(sortJson);

      var template = $("#all-the-links").html();

      var html = Mustache.to_html(template, data);
      $("#links").html(html);
      // Show the counts in the buttons
      var allCount = $("#links").find(".card").length;
      var courseCount = $("#links").find(".course").length;
      var dataCount = $("#links").find(".data").length;
      var languageCount = $("#links").find(".language").length;
      var pluginCount = $("#links").find(".plugin").length;
      var libraryCount = $("#links").find(".library").length;
      var toolCount = $("#links").find(".tool").length;
      var textsCount = $("#links").find(".texts").length;
      var tutorialCount = $("#links").find(".tutorial").length;
      var visualizationCount = $("#links").find(".visualization").length;

      $("#all").append("&nbsp; ( " + allCount + " )");
      $("#course").append("&nbsp; ( " + courseCount + " )");
      $("#data").append("&nbsp; ( " + dataCount + " )");
      $("#language").append("&nbsp; ( " + languageCount + " )");
      $("#plugin").append("&nbsp; ( " + pluginCount + " )");
      $("#library").append("&nbsp; ( " + libraryCount + " )");
      $("#tool").append("&nbsp; ( " + toolCount + " )");
      $("#texts").append("&nbsp; ( " + textsCount + " )");
      $("#tutorial").append("&nbsp; ( " + tutorialCount + " )");
      $("#visualization").append("&nbsp; ( " + visualizationCount + " )");

    });
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

  linkWriter();


  // Change the color of the icon outline to blue
  $(document).on("click", ".favorite-this", function() {

    if ($(this).find("i").hasClass("far")) {

      $(this).find("i").removeClass("far").addClass("fas");

      var newID = $(this).parent().parent().parent().data("resourceid");

      console.log(newID);
      // add to the array
      favoritesArray.push(newID);
      console.log(favoritesArray);

      // Store the array in localstorage
      localStorage.setItem("conveying-data-viz-favorites", JSON.stringify(favoritesArray));

    } else {

      $(this).find("i").removeClass("fas").addClass("far");

      // remove from the array
      favoritesArray.splice(favoritesArray.indexOf($(this).parent().parent().data("resourceid")), 1);

      // Store the array in localstorage
      localStorage.setItem("conveying-data-viz-favorites", JSON.stringify(favoritesArray));

    }

  });


  // Show favorites on click the star
  $(document).on("click", "#toggle-favorites", function() {

    if ($("#toggle-favorites").text() == "Show Favorites") {

      // hide all cards
      $(".card").addClass("d-none");
      // Show the starred cards
      $(".fas").parent().parent().parent().parent().removeClass("d-none");
      // Set the button text to Show All
      $("#toggle-favorites").text("Show All");
    } else {

      // hide all cards
      $(".card").removeClass("d-none");
      // Set the button text to Show Favorites
      $("#toggle-favorites").text("Show Favorites");
    }

  });

  // Clear favorites
  $("#clear-favorites").on("click", function() {
    // erase the localStorage
    localStorage.removeItem("conveying-data-viz-favorites");
    // empty the array
    favoritesArray.splice(0, favoritesArray.length);
    // show all the cards
    $(".card").removeClass("d-none");
    // empty the search input
    $("#search-input").val("");
    // remove all the stars class
    $(".fa-star").removeClass("fas").addClass("far");
  });



});
