$(function(){
    var i = 1;
    $(".takeTour").click(function(){
        $(".c-bg-active").removeClass("c-bg-active");
        var len = $(".c-bg").length;
        if(len <= i){
            i = 0;
        }
        $(".c-bg").eq(i).addClass("c-bg-active");
        i++;
    });
});