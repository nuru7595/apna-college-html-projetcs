$(function(){
    $(".d-b").click(function(){
        $(".fg").each(function(){
            $(this).prop("count",0).animate({
                count: $(this).css("width")
            },{
                duration:3000,
                easing: "swing",
                step: function(x){
                    $(this).css("width",Math.ceil(x) + "px");
                }
            });
        });
    });
//download function.....
    var c = 0;
    $(window).on("scroll",function(){
        if(c==0){
            var os = $(".back-details").offset().top;
            var oh = $(".back-details").outerHeight()/2;
            var wh = $(this).height();
            var st = $(this).scrollTop();
            if(st > (os+oh-wh)){
                $(".num").each(function(){
                    $(this).prop("count",0).animate({
                        count: parseInt($(this).text())
                    },{
                        duration: 3000,
                        easing: "swing",
                        step: function(x){
                            $(this).text(Math.ceil(x) + "+");
                        }
                    });
                });
                c = 1;
            }
        }
    })
//back details count on scroll.....
    $(".img").click(function(){
        var src = $(this).attr("src");
        $("#img").attr("src",src);
        $(".float").show();
    });
    $("#close").click(function(){
        $(".float").hide();
    });
//gallery image view zoom in.....
    $(window).on("scroll",function(){
        var st = $(this).scrollTop();
        var wh = $(this).height();
        var about = $("#about").offset().top;
        var photos = $("#photos").offset().top;
        var contact = $("#contact").offset().top;
        if(st > (contact-wh)){
            $(".side-nav-active").removeClass("side-nav-active");
            $(".sn-contact").addClass("side-nav-active");
        }else if(st > (photos-wh)){
            $(".side-nav-active").removeClass("side-nav-active");
            $(".sn-photos").addClass("side-nav-active");
        }else if(st > (about-wh)){
            $(".side-nav-active").removeClass("side-nav-active");
            $(".sn-about").addClass("side-nav-active");
        }else{
            $(".side-nav-active").removeClass("side-nav-active");
            $(".sn-home").addClass("side-nav-active");
        }
    });
});