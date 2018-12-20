$(function() { 
    $("form").submit(function() { 
        return false;
    });

    // note: for some reason `$(".prom-scale button").on("touchstart"` 
    // does not catch all touchstart events for a button on iOs ...
    // but listening for touchstart events on document and then checkng the target works well
    $(document).on("mousedown", function(e) {
      if ($(e.target, ".prom-scale").hasClass('btn')) $(e.target).addClass("popout");
      if ($(e.target, ".prom-scale").hasClass('btn')) $(e.target).css("height", "100px");
    });

    $(document).on("touchstart", function(e) {
      if ($(e.target, ".prom-scale").hasClass('btn')) $(e.target).addClass("popout");
    });

    $(document).on("touchend touchcancel mouseup mouseout", function(e) {
      if ($(e.target, ".prom-scale").hasClass('btn')) $(e.target).removeClass("popout");
    });

    $(".prom-scale button").on("click", function() {
      $(".prom-scale button").removeClass("active");
      $(this).addClass("active");
    });
});
