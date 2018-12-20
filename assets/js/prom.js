$(function() { 
    $("form").submit(function() { 
        return false;
    });

    $(".prom-scale button").on("click", function() {
      $(this).addClass("active");
    });
});
