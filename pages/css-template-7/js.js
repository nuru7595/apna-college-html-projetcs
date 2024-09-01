var float = document.getElementsByClassName("float")[0];
subsOpen = () => {
    float.style.display = "block";
}
subsClose = () => {
    float.style.display = "none";
}
window.onclick = function(event){
    if(event.target == float){
        float.style.display = "none";
    }
}
//float.....
liked = (me) => {
    me.innerHTML = "✓ Liked";
}
//like......
repClose = (me) => {
    me.setAttribute("onclick", "repOpen(this)");
    me.parentElement.parentElement.childNodes[13].style.display = "none";
}
repOpen = (me) => {
    me.setAttribute("onclick", "repClose(this)");
    me.parentElement.parentElement.childNodes[13].style.display = "block";
}
//replies......
var repCount = document.querySelectorAll("button span");
for(i = 0; i < repCount.length; i++){
    var nodeList = repCount[i].parentElement.parentElement.parentElement.childNodes[13].childNodes;
    var array = Array.prototype.slice.call(nodeList);
    filter = (value) => {return value == "[object HTMLDivElement]"}
    var count = array.filter(filter).length;
    repCount[i].innerHTML = count;
}
//replies count.....

