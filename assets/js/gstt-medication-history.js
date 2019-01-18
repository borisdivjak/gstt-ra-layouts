$(function() { 

  $("tr.medication-history .slide-down").slideUp(0);

    
  $(".table-medications a.btn-history").on("click", function(e) { 
    e.preventDefault();
    var medication = $(e.target).attr("data-medication");

    $("a.btn-history[data-medication='" + medication + "']").toggleClass("d-none");
    $("tr.medication-history[data-medication='" + medication + "']").toggleClass("d-none");
    $("tr.medication-history[data-medication='" + medication + "'] .slide-down").slideToggle(100);
  });

});
