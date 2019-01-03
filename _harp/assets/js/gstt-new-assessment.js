function calculateDAS28(tender, swollen, crp, vas) {

  // formula taken from https://www.das-score.nl/das28/en/difference-between-the-das-and-das28/how-to-measure-the-das28/how-to-calculate-the-das28/alternative-validated-formulae.html
  var das28 =   0.56 * Math.sqrt(Number(tender)) 
              + 0.28 * Math.sqrt(Number(swollen)) 
              + 0.36 * Math.log(Number(crp)+1) 
              + 0.014 * Number(vas)
              + 0.96;

  return das28.toFixed(2);
}

$(function() {
  $("input.das28-required-input").on('change', function () {
    
    // assume all das28 fields are complete (filled in), unless we find one that isn't
    var das28_complete = true; 
    $("input.das28-required-input").each(function() {
      if ($(this).val() == "") das28_complete = false;
    });

    // if all parameters are filled in, then calculate DAS score (and show score instead of 'incomplete' alert)
    if (das28_complete) {
      $("#das28-alert-incomplete").addClass("d-none");
      $("#das28-alert-score").removeClass("d-none");
      $("#das28-score").val(calculateDAS28($("#das28-tender").val(), $("#das28-swollen").val(), $("#das28-crp").val(), $("#das28-vas").val()));
    } 

    // if not all paramteres are set, then show 'incomplete' alert and not the score (also reset score in case it's been set already)
    else {
      $("#das28-alert-incomplete").removeClass("d-none");
      $("#das28-alert-score").addClass("d-none");
      $("#das28-score").val("");
    }

  });

  // this is a long form, so it might be better to suppress implicit submission on pressing return
  $('input, select').on('keypress', function(e) {
    if(e.keyCode == 13 && e.target.type !== 'submit') {
      e.preventDefault();
      $(e.target).change();
      return false;
    }
  });
});