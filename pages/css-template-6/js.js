showMenu = () => {document.getElementsByClassName("side-nav")[0].style.width = "40%";};
closeMenu = () => {document.getElementsByClassName("side-nav")[0].style.width = "0%";};
//
var i = 0;
var foods = document.getElementsByClassName("foods");
var pag = document.getElementsByClassName("pag");
show = (aTag) => {
    i = aTag.innerText - 1;
    for(j = 0; j < foods.length; j++){
        foods[j].classList.remove("f-active");
    }
    foods[i].classList.add("f-active");
    for(j = 0; j < pag.length; j++){
        pag[j].classList.remove("active");
    }
    pag[i].classList.add("active");

}
//
pre = (p) => {
    if(i > 0){
        foods[i].classList.remove("f-active");
        foods[i-1].classList.add("f-active");
        pag[i].classList.remove("active");
        pag[i-1].classList.add("active");
        i--;
    }
}
next = (n) => {
    if(i < pag.length-1){
        foods[i].classList.remove("f-active");
        foods[i+1].classList.add("f-active");
        pag[i].classList.remove("active");
        pag[i+1].classList.add("active");
        i++;
    }
}