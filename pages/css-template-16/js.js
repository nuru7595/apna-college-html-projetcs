$(function(){
    $("#nav-show").click(function(){
        $(".float").css("display","block");
        $(".side-nav").animate({
            width:"300px"
        });
    });
    $("#nav-hide,.float").click(function(){
        $(".float").css("display","none");
        $(".side-nav").css("width","0px");
    });
//side nav....
var len = $(".img").length;
$(".pag:not(.pag-active)").remove();
var j = 2;
for(var i = 12; i < len; i+=12){
    $("#pag-next").before("<a href='javascript:void(0)' class='pag'>" + j + "</a>");
    j++;
}
//pag link creation.....
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
//check pag prev and next button.....
var i = 0; iplus = 12;
$(".pagination").on("click",".pag",function(){
    iplus = (Number($(this).text())*12);
    i = iplus-12;
    $(".pag-active").removeClass("pag-active");
    $(this).addClass("pag-active");
    $(".img-active").removeClass("img-active");
    for(i; i < iplus; i++){
        $(".img").eq(i).addClass("img-active");
    }
    i-=12;
    checkFunc();
});
//onclick show up correct page....
$("#pag-prev").click(function(){
    if(!$(this).hasClass("disabled")){
        i-=12;
        iplus-=12;
        $(".pag-active").removeClass("pag-active").prev().addClass("pag-active");
        $(".img-active").removeClass("img-active");
        for(i; i < iplus; i++){
            $(".img").eq(i).addClass("img-active");
        }
        i-=12;
        checkFunc();
    }
});
//show previous page.....
$("#pag-next").click(function(){
    if(!$(this).hasClass("disabled")){
        i+=12;
        iplus+=12;
        $(".pag-active").removeClass("pag-active").next().addClass("pag-active");
        $(".img-active").removeClass("img-active");
        for(i; i < iplus; i++){
            $(".img").eq(i).addClass("img-active");
        }
        i-=12;
        checkFunc();
    }
});
//show next page......
var img;
$(".img").click(function(){
    img = $(this);
    $("#img").attr("src",img.attr("src"));
    $(".float2").show();
});
$("#close").click(function(){
    $(".float2").hide();
});
$(".prev").click(function(){
    if(img.prev(".img-active").attr("src") !== undefined){
        img = img.prev(".img-active");
        $("#img").attr("src",img.attr("src"));
    }
});
$(".next").click(function(){
    if(img.next(".img-active").attr("src") !== undefined){
        img = img.next(".img-active");
        $("#img").attr("src",img.attr("src"));
    }
});
//gallery view, next, previous......
$(".download-btn").click(function(){
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








});