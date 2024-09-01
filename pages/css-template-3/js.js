var float = document.querySelector(".float");
var admin;
var s1 = document.querySelector("#s1");
var s2 = document.querySelector("#s2");
function showFunction(a){
    float.style.display = "block";
    admin = a.parentElement;
    s1.innerHTML = admin.childNodes[3].textContent;
    s2.innerHTML = admin.childNodes[5].textContent;
}
function closeFunction(){
    float.style.display = "none";
    admin = undefined;
}
window.onclick = function(event){
    if(event.target == float){
        float.style.display = "none";
        admin = undefined;
    }
}