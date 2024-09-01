$(function(){
    $(".ul-1").on("click","a:not(#dd)",function(){
        $(".li-active").removeClass("li-active");
        $(".active").removeClass("active");
        //
        var title = $(this).text();
        if($(this).parents().hasClass("dd-content")){
            var prevTitle = $(this).parents(".dd-content").prev().text();
            $("#title").text("Home / " + prevTitle + " / " + title);
            $(this).parents(".dd-content").prev().addClass("li-active");
        }else{
            $("#title").text("Home / " + title);
        }
        $(this).addClass("active");
        $(".fa-caret-right").remove();
        $(this).prepend("<i class='fa fa-caret-right'></i>");
        //
        $(".float").css("display","block");
        var func = () => {
            $(".float").fadeOut();
            var cat = $(this).text().toLowerCase();
            $(".item").hide();
            $("." + cat).show();
            $("#item-count").text($("." + cat).length);
        }
        setTimeout(func, 2000);
        //
        wishlist = false;
    });
    $("#dd").click(function(){
        $(".dd-content").slideToggle();
    });
    //
    var chart,wishlist = false;
    $(".sale").click(function(){
        chart = $(this).parents(".item");
        if(chart.hasClass("chart")){
            $("#chart").text("Remove from wishlist");
        }else{
            $("#chart").text("Add to wishlist");
        }
        var src = $(this).siblings("img").attr("src");
        $("#img").attr("src",src);
        $(".buynow").fadeIn();
        var pf = $(this).parent().next().find("p:first").text();
        var pl = $(this).parent().next().find("p:last").text();
        $("#t").text(pf);
        $("#c").text(pl);
        if($(this).parent().next().find("p:last").hasClass("red")){
            $("#c").addClass("red");
        }else{
            $("#c").removeClass("red");
        }
    });
    $("#close").click(function(){
        $(".buynow").fadeOut();
        if(wishlist == true){
            loadChart();
        }
    });
    //
    $("#chart").click(function(){
        if(!$(chart).hasClass("chart")){
            $(this).text("Remove from wishlist");
            $(chart).addClass("chart");
            $(".notification").css({"background":"green"}).text("Added to the chart !!");
            $(".notification").slideDown();
            var add = () => {
                $(".notification").slideUp();
            }
            setTimeout(add, 2000);
        }else{
            $(this).text("Add to wishlist");
            $(chart).removeClass("chart");
            $(".notification").css({"background":"red"}).text("Removed from the chart !!");
            $(".notification").slideDown();
            var remove = () => {
                $(".notification").slideUp();
            }
            setTimeout(remove, 2000);
        }
    });
    //
    $("#mychart").click(function(){
        loadChart();
    });
    //
    var loadChart = () => {
        $(".li-active").removeClass("li-active");
        $(".active").removeClass("active");
        $(".fa-caret-right").remove();
        //
        $("#title").text("Home / My Chart");
        //
        $("html,body").animate({
            scrollTop: $("#shop").offset().top
        });
        //
        $(".float").css("display","block");
        var func = () => {
            $(".float").fadeOut();
            $(".item").hide();
            $(".chart").show();
            $("#item-count").text($(".chart").length);
        }
        setTimeout(func, 2000);
        //
        wishlist = true;
    }
});