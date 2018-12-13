$(function() {
//  $("#patient-details-iframe").on("load", function() {
//    $("#patient-details-iframe").contents().find("body, .card .card-header").css("background-color", "#005eb8");
//    $("#patient-details-iframe").contents().find(".card-header-tabs .nav-link:not(.active)").css("color", "white");  
//  });

  function extendIframe() {
    $("#patient-details-section").addClass("extended");
    $("#patient-details-section").removeClass("collapsed");
  }
  
  function collapseIframe() {
    $("#patient-details-section").addClass("collapsed");
    $("#patient-details-section").removeClass("extended");
  }

  $(".patient-details-header").on("click", function() {
    if ($("#patient-details-section").hasClass("extended")) {
      collapseIframe();
    }
    else {
      extendIframe();
    }
  });

  $("#patient-details-iframe").contents().find(window).on("focus", function() { extendIframe(); });

});