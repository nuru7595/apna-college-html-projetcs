var nav_s = document.getElementsByClassName("nav-s")[0];
function toggle(){
    if (nav_s.style.display==="none"){
        nav_s.style.display = "block";
    }else{
        nav_s.style.display = "none";
    }
}
//small screen nav click;
var n = 0;
function carousel(){
    var i,x;
    x = document.getElementsByClassName("carousel");
    for(i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
    n++;
    if(n > x.length){n = 1};
    x[n-1].style.display = "block";
    setTimeout(carousel, 4000);
}
carousel();
//carousel;
var x = document.getElementsByClassName("ticket-model")[0];
function ticketModelOpen(){
    x.style.display = "block";
}
function ticketModelClose(){
    x.style.display = "none";
}
//
window.onclick = function(event){
    if(event.target == x){
        x.style.display = "none";
    }
}