$(function() { 
    var touchedbutton = false;

    $("form").submit(function() { 
        return false;
    });

    $(document).on("touchstart mousedown", function(e) {
//      touchedbutton = $(e.target).hasClass('btn');
      touchedbutton = $(e.target).html();
    });

    $(".prom-scale button").on("touchstart mousedown", function(e) {
        e.preventDefault();
        $(this).addClass("popout");
    });

    $(".prom-scale button").on("touchend touchcancel mouseup mouseout", function(e) {
        e.preventDefault();
        $(this).removeClass("popout");
    });

    $(".prom-scale button").on("click", function() {
//      if (touchedbutton) {
        alert(touchedbutton);
        $(this).addClass("active");
 //     }
 //     else {
//        e.preventDefault();
//      }
    });
});
