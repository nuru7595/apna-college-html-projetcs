$(function(){
    $(".nav a").click(function(){
        $(".active").removeClass("active");
        $(this).addClass("active");
    });
var src;
    $(".img img").click(function(){
        src = $(this);
        $(".display img").attr("src",src.attr("src"));
        $(".float").css("display","block");
    });
    $("#close").click(function(){
        $(".float").css("display","none");
    });
    $(".prev").click(function(){
        if(src.index() > 0){
            src = src.prev();
            $(".display img").attr("src",src.attr("src"));
        }
    });
    $(".next").click(function(){
        if(src.index() < src.parent().children().length-1){
            src = src.next();
            $(".display img").attr("src",src.attr("src"));
        }
    });
});