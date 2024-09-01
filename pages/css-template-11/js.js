$(function(){
    $(".nav").click(function(){
        $(".float").css("height","100%");
    });
    $(".float button").click(function(){
        $(".float").css("height","0%");
    });
//
    $("p button").click(function(){
        $("img,.gallery").toggleClass("padding");
    });
//
var tag;
    $("img").click(function(){
        tag = $(this);
        $(".float2").css("display","block");
        $("#img").attr("src",tag.attr("src"));
    });
    $("#close").click(function(){
        $(".float2").css("display","none");
    });
    $(".prev").click(function(){
        if(tag.index() > 0){
            tag = tag.prev();
            $("#img").attr("src",tag.attr("src"));
        }
    });
    $(".next").click(function(){
        if(tag.index() < tag.parent().children().length-1){
            tag = tag.next();
            $("#img").attr("src",tag.attr("src"));
        }
    });
});