$(function(){
    var img;
    $(".block img").click(function(){
        img = $(this);
        $(".display img").attr("src",img.attr("src"));
        $(".float").css("display","block");
    });
    $("#close").click(function(){
        $(".float").css("display","none");
    });
});