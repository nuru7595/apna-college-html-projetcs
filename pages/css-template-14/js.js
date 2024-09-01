$(function(){
    var filter = ".block";
var pagFunc = () => {
    var len = $(filter).length;
    $(".pag").remove();
    $("#prev").after("<a class='pag p-active' href='javascript:void(0)'>1</a>");
    var j = 2;
    for(var i = 6; i < len; i += 6){
        $("#next").before("<a class='pag' href='javascript:void(0)'>" + j + "</a>");
        j++;
    }
}
pagFunc();
//Pagination function completed!!;
var disableFunc = () => {
    if($(".p-active").prev().attr("id") == "prev"){
        $("#prev").addClass("disabled");
    }else{
        $("#prev").removeClass("disabled");
    }
    if($(".p-active").next().attr("id") == "next"){
        $("#next").addClass("disabled");
    }else{
        $("#next").removeClass("disabled");
    }
}
disableFunc();
//Check previous and next button completed!!;
var prevFunc = () => {
    $(".p-active").removeClass("p-active").prev().addClass("p-active");
    $(".blk-active").removeClass("blk-active");
    for(var j = 7; j < 13; j++){
        $(filter).eq(i-j).addClass("blk-active");
    }
    i -= 6;
    iplus -= 6;
}
//Previous function completed!!;
    $("#prev").click(function(){
        if($(this).attr("class") !== "disabled"){
            prevFunc();
            disableFunc();
        }
    });
//previous function call;
var i = 6;
var iplus = i+6;
var nextFunc = () => {
    $(".p-active").removeClass("p-active").next().addClass("p-active");
    $(".blk-active").removeClass("blk-active");
    for(i; i < iplus; i++){
        $(filter).eq(i).addClass("blk-active");
    }
    iplus += 6;
}
//Next function completed!!;
    $("#next").click(function(){
        if($(this).attr("class") !== "disabled"){
            nextFunc();
            disableFunc();
        }
    });
//next function call;
    $(".pagination").on("click", ".pag", function(){
        i = (Number($(this).text())*6)-6;
        iplus = i+6;
        $(".p-active").removeClass("p-active");
        $(this).addClass("p-active");
        $(".blk-active").removeClass("blk-active");
        for(i; i < iplus; i++){
            $(filter).eq(i).addClass("blk-active");
        }
        iplus += 6;
        disableFunc();
    });
//on click align function;
var displayFunc = () => {
    $(".blk-active").removeClass("blk-active");
    for(var k = 0; k < 6; k++){
        $(filter).eq(k).addClass("blk-active");
    }
}
displayFunc();
    $(".filter-block").click(function(){
        filter = ".block";
        i = 6;
        iplus = i+6;
        $(".f-active").removeClass("f-active");
        $(this).addClass("f-active");
        displayFunc();
        pagFunc();
        disableFunc();
    });
    $(".filter-design").click(function(){
        filter = ".design";
        i = 6;
        iplus = i+6;
        $(".f-active").removeClass("f-active");
        $(this).addClass("f-active");
        displayFunc();
        pagFunc();
        disableFunc();
    });
    $(".filter-photos").click(function(){
        filter = ".photos";
        i = 6;
        iplus = i+6;
        $(".f-active").removeClass("f-active");
        $(this).addClass("f-active");
        displayFunc();
        pagFunc();
        disableFunc();
    });
    $(".filter-art").click(function(){
        filter = ".art";
        i = 6;
        iplus = i+6;
        $(".f-active").removeClass("f-active");
        $(this).addClass("f-active");
        displayFunc();
        pagFunc();
        disableFunc();
    });
//The end of the critical part;
$("#resume").click(function(){
    $(".fg").each(function(){
        $(this).prop("count",0).animate({
            count: $(this).text()
        },{
            duration: 5000,
            easing: "swing",
            step: function(x){
                $(this).text(Math.ceil(x) + "%");
                $(this).css("width",(Math.ceil(x) + "%"));
            }
        });
    });
});
//Download jquery;
$(".btn").click(function(){
    var pack = $(this).parent().find("h1").text();
    var amount = $(this).parent().find("span").text();
    $("#pack-name").text(pack);
    $("#amount").text(amount);
    $(".float").css("display","block");
});
$("#close").click(function(){
    $(".float").css("display","none");
});
});