$(function(){
    $("#nav-toggle").click(function(){
        $("#side-nav").show();
    });
    $("#side-nav a").click(function(){
        $("#side-nav").hide();
    });
    $("#side-nav").click(function(event){
        if(event.target.id == "side-nav"){
            $("#side-nav").hide();
        }
    });
    //
    var checkFunc = () =>{
        if($(".pag-active").prev().attr("id") == "prev"){
            $("#prev").addClass("disabled");
        }else{
            $("#prev").removeClass("disabled");
        }
        if($(".pag-active").next().attr("id") == "next"){
            $("#next").addClass("disabled");
        }else{
            $("#next").removeClass("disabled");
        }
    }
    checkFunc();
    //
    $("#prev").click(function(){
        if($(this).hasClass("disabled")){}else{
            $(".pag-active").removeClass("pag-active").prev(".page-item").addClass("pag-active");
            $(".page-active").removeClass("page-active").prev(".page").addClass("page-active");
            checkFunc();
            $(".float").show();
            setTimeout(hide,3000);
        }
    });
    $("#next").click(function(){
        if($(this).hasClass("disabled")){}else{
            $(".pag-active").removeClass("pag-active").next(".page-item").addClass("pag-active");
            $(".page-active").removeClass("page-active").next(".page").addClass("page-active");
            checkFunc();
            $(".float").show();
            setTimeout(hide,3000);
        }
    });
    //
    $(".page-item").click(function(){
        if(!isNaN($(this).text())){
            var i = $(this).text()-1;
            $(".pag-active").removeClass("pag-active");
            $(this).addClass("pag-active");
            $(".page-active").removeClass("page-active");
            $(".page").eq(i).addClass("page-active");
            checkFunc();
            $(".float").show();
            setTimeout(hide,3000);
        }
    });
    //
    var hide = () =>{
        $(".float").fadeOut();
    }
});