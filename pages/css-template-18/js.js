$(function(){
    $(".menu").click(function(){
        $(".side-nav").css({"width":"60%","opacity":"1"});
    });
    $(".close-nav,.side-nav a").click(function(){
        $(".side-nav").css({"width":"0%","opacity":"0"});
    });
//side navbar......
    $(".img").click(function(){
        var src = $(this).attr("src");
        $("#img").attr("src",src);
        $(".float").show();
    });
    $(".close-img").click(function(){
        $(".float").hide();
    });
//img view zoom in.....
    $(".d-b").click(function(){
        $(".fg").each(function(){
            $(this).prop("count",0).animate({
                count: parseInt($(this).text())
            },{
                duration: 4000,
                easing: "swing",
                step: function(x){
                    $(this).text(Math.ceil(x) + "%").css("width",Math.ceil(x) + "%");
                }
            });
        });
    });
//resume download......
var count = 0;
    $(window).on("scroll",function(){
        if(count == 0){
            var oh = $(".details").outerHeight() / 2;
            var os = $(".details").offset().top;
            var wh = $(this).height();
            var st = $(this).scrollTop();
            if(st > (os+oh-wh)){
                $(".num").each(function(){
                    $(this).prop("count",0).animate({
                        count: parseInt($(this).text())
                    },{
                        duration: 4000,
                        easing: "swing",
                        step: function(x){
                            $(this).text(Math.ceil(x) + "+");
                        }
                    });
                });
                count = 1;
            }
        }
    });
//onscroll start count.....
});