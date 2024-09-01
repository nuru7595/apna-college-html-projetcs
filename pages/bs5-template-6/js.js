$(document).ready(function(){
    $(".card-body button").click(function(){
        $("#name").focus();
    })
//
    var count = 0;
    $(window).on("scroll",function(){
        if(count == 0){
            var oh = $("#count").outerHeight() / 2;
            var os = $("#count").offset().top;
            var wh = $(this).height();
            var st = $(this).scrollTop();
            if(st > (os+oh-wh)){
                $(".c-num").each(function(){
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
//
    $(".c-img").click(function(){
        var src = $(this).attr("src");
        var alt = $(this).attr("alt");
        $("#img").attr("src",src);
        $("#alt").text(alt);
        $(".c-float").show();
    });
    $("#c-close").click(function(){
        $(".c-float").hide();
    });
//
    var count2 = 0;
    $(window).on("scroll",function(){
        if(count2 == 0){
            var oh = $("#count2").outerHeight();
            var os = $("#count2").offset().top;
            var wh = $(this).height();
            var st = $(this).scrollTop();
            if(st > (os-wh)){
                $(".progress-bar").each(function(){
                    $(this).prop("count",0).animate({
                        count: parseInt($(this).text())
                    },{
                        duration: 3000,
                        easing: "",
                        step: function(x){
                            $(this).text(Math.ceil(x) + "%").css("width",Math.ceil(x) + "%");
                        }
                    });
                });
                count2 = 1;
            }
        }
    });
//
});