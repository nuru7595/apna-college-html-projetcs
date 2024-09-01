$(document).ready(function(){
//starting...(jq)
$("#showMenu").click(function(){
    $(".c-menu-float").addClass("d-block");
});
$("#menu a,.c-menu-bg").click(function(){
    $(".c-menu-float").removeClass("d-block");
});
//
$(".c-img").click(function(){
    var src = $(this).attr("src");
    var alt = $(this).attr("alt");
    $("#img").attr("src",src);
    $("#alt").text(alt);
    $(".c-img-float").show();
});
$(".c-img-float").click(function(){
    $(this).hide();
});
//ending...
});
//starting...(js)