$(function() { 
    
    // The `touchedbutton` var is used to tell if the touchstart event was triggered on a button or some other element.
    // This is necessary as iOs sometimes triggers a click even if the touchstart event wasn't registered on the button itself.
    // We set touchedbutton to true by default - this way clicks are properly processed even on devices that don't support touchstart
    var touchedbutton = true;

    $("form").submit(function() { 
        return false;
    });

    $(document).on("touchstart", function(e) {
      if ($(e.target, ".prom-scale").hasClass('btn')) {
        $(e.target).addClass("popout");
        touchedbutton = true;
      } else {
        touchedbutton = false;
      }
    });

    $(document).on("touchend touchcancel", function(e) {
      if ($(e.target, ".prom-scale").hasClass('btn')) $(e.target).removeClass("popout");
    });

    $(".prom-scale button").on("click", function() {
      if (touchedbutton) {
        $(".prom-scale button").removeClass("active");
        $(this).addClass("active");
      }
    });
});
