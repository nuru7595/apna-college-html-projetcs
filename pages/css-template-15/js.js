$(function(){
    var imgLen = $(".img").length;
    $(".pag:not(.pag-active)").remove();
    var j = 2;
    for(var i = 9; i < imgLen; i+=9){
        $("#pag-next").before("<a href='javascript:void(0)' class='pag'>" + j + "</a>");
        j++;
    }
//genarate pagination page....
var checkFunc = () => {
    if($(".pag-active").prev().attr("id") == "pag-prev"){
        $("#pag-prev").addClass("disabled");
    }else{
        $("#pag-prev").removeClass("disabled");
    }
    if($(".pag-active").next().attr("id") == "pag-next"){
        $("#pag-next").addClass("disabled");
    }else{
        $("#pag-next").removeClass("disabled");
    }
}
checkFunc();
//disable prev next button.....
var i = 9;
var iplus = 18;
//default value defined!!
var actionFunc = () => {
    $(".img-active").removeClass("img-active");
    for(i; i < iplus; i++){
        $(".img").eq(i).addClass("img-active");
    }
    iplus += 9;
}
//Action function.....
    $(".pagination").on("click",".pag",function(){
        iplus = (Number($(this).text()) * 9);
        i = iplus - 9;
        $(".pag-active").removeClass("pag-active");
        $(this).addClass("pag-active");
        actionFunc();
        checkFunc();
    });
//on click show right posts.....
    $("#pag-prev").click(function(){
        if($(this).attr("class") !== "disabled"){
            i -= 18;
            iplus -= 18;
            $(".pag-active").removeClass("pag-active").prev().addClass("pag-active");
            actionFunc();
            checkFunc();
        }
    });
//call prevFunction....
    $("#pag-next").click(function(){
        if($(this).attr("class") !== "disabled"){
            $(".pag-active").removeClass("pag-active").next().addClass("pag-active");
            actionFunc();
            checkFunc();
        }
    });
//call next Function....
//
var img;
$(".img").click(function(){
    img = $(this);
    $(".float").show();
    $("#img").attr("src",img.attr("src"));
});
$("#close").click(function(){
    $(".float").hide();
});
//
$(".prev").click(function(){
    if(img.prev(".img-active").attr("src") !== undefined){
        img = img.prev(".img-active");
        $("#img").attr("src",img.attr("src"));
    }
});
//
$(".next").click(function(){
    if(img.next(".img-active").attr("src") !== undefined){
        img = img.next(".img-active");
        $("#img").attr("src",img.attr("src"));
    }
});
//gallery image view....
//
$(".top-nav-right").click(function(){
    $(".side-nav").addClass("nav-slide");
    $("#bs").addClass("black-screen");
});
$("#hide").click(function(){
    $(".side-nav").removeClass("nav-slide");
    $("#bs").removeClass("black-screen");
});
//side nav show hide....
$("#resume").click(function(){
    $(".fg").each(function(){
        $(this).prop("count",0).animate({
            count: $(this).text()
        },{
            duration: 4000,
            easing: "swing",
            step: function(x){
                $(this).text(Math.ceil(x) + "%").css("width",Math.ceil(x) + "%");
            }
        });
    });
});
//resume download....
});