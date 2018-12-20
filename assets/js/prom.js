$(function() { 
    var touchedbutton = false;

    $("form").submit(function() { 
        return false;
    });

    $(document).on("touchstart mousedown", function(e) {
      if ($(e.target, ".prom-scale").hasClass('btn')) $(e.target).addClass("popout");
    });

    $(document).on("touchend touchcancel mouseup mouseout", function(e) {
      if ($(e.target, ".prom-scale").hasClass('btn')) $(e.target).removeClass("popout");
    });

/*    $(".prom-scale button").on("touchstart mousedown", function(e) {
    });

    $(".prom-scale button").on("touchend touchcancel mouseup mouseout", function(e) {
    });
*/
    $(".prom-scale button").on("click", function() {
//      if (touchedbutton) {
//        alert(touchedbutton);
        $(this).addClass("active");
 //     }
 //     else {
//        e.preventDefault();
//      }
    });
});
