todayDMY = function() {
  var d = new Date();

  var month = d.getMonth()+1;
  var day = d.getDate();
  
  return	(day<10 ? '0' : '') + day + '/' +
      		(month<10 ? '0' : '') + month + '/' +
      		d.getFullYear();
}    


$(function() {
  $("input[data-date='today']").val(todayDMY());
});