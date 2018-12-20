$(function() {
  filter_patients = function(searchterm) {
    $("#patient-list tbody tr").each(function() {
      var row_values = "";
      var include_row = false;
      
      $("td", this).each(function() {
        if (row_values != "") row_values += " ";
        row_values += $(this).text().replace(/\s+/g, '').toLowerCase();
      });
      
      if (row_values.indexOf(searchterm) !== -1) include_row = true;
      
      if (include_row) $(this).removeClass("d-none");
      else $(this).addClass("d-none");
    });
  }
  
  $("#patient-list-filter").on('input', function(event) {
    filter_patients(event.target.value.replace(/\s+/g, '').toLowerCase());
  });
  
});