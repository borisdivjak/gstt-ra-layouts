$(function() {
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

  $("#patient-details-iframe").on("load", function() {
    var iframeWindow = $("#patient-details-iframe").get(0).contentWindow;
    if (iframeWindow) $(iframeWindow).on("focus", function() { extendIframe(); })
  });
});