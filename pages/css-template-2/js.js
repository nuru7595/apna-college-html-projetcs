var x = document.getElementsByClassName("displayer")[0];
var y = document.querySelectorAll(".img");
function closeViewer(){
    x.style.display = "none";
}
var alt;
function show(a){
    document.getElementsByClassName("img")[a-1].style.display = "block";
    x.style.display = "block";
    alt = a;
}
function backward(){
    if(alt > 1){
        y[alt-1].style.display = "none";
        alt--;
        y[alt-1].style.display = "block";
    }else{
        y[alt-1].style.display = "none";
        alt = y.length;
        y[alt-1].style.display = "block";
    }
}
function forward(){
    if(alt < y.length){
        y[alt-1].style.display = "none";
        alt++;
        y[alt-1].style.display = "block";
    }else{
        y[alt-1].style.display = "none";
        alt = 1;
        y[alt-1].style.display = "block";
    }
}