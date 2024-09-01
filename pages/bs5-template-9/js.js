$(function(){
    $("#slide").click(function(){
        $(".c-side-nav").show();
    });
    $(".c-side-nav a").click(function(){
        $(".c-side-nav").hide();
    });
    $(".c-top").tooltip();
});