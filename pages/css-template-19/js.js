$(function(){
    var dCount = 0;
    var eCount = 0;
    $(window).on("scroll",function(){
        var wh = $(this).height();
        var st = $(this).scrollTop();
        if(dCount == 0){
            var os = $(".bg").offset().top;
            if(st > (os - wh)){
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
                dCount = 1;
            }
        }
        //resume download.....
        if(eCount == 0){
            var os = $(".experience").offset().top;
            var oh = $(".experience").outerHeight() / 2;
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
                eCount = 1;
            }
        }
        //number count on scroll...
    });
    //
    $(".more").click(function(){
        $(".img").toggleClass("img-active");
        var text = $(this).text().toLowerCase();
        if(text == "load more"){
            $(this).text("Load Less");
        }else{
            $(this).text("Load More");
        }
    });
    //Load more and less.....
    $(".p-flex-blk").on("click",".img-active",function(){
        var src = $(this).attr("src");
        $("#img").attr("src",src);
        $(".float").css("display","block");
    });
    $("#close").click(function(){
        $(".float").css("display","none");
    });
    //Big view image....
});