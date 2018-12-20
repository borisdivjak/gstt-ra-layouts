$(function() { 
    $("form").submit(function() { 
        return false;
    });

    $(".prom-scale button").on("touchstart", function(e) {
        $(this).addClass("popout");
    });

    $(".prom-scale button").on("touchend touchcancel mouseout", function(e) {
        $(this).removeClass("popout");
    });

    $(".prom-scale button").on("click", function() {
      $(this).addClass("active");
    });
});
