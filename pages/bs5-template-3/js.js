$(document).ready(function(){
    var date = new Date().toJSON().slice(0,19);
    $("#date").val(date).attr("min",date);
});