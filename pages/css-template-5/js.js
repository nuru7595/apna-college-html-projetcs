var owner = prompt("Enter your name here:","");
if(owner !== "" && owner != null){
    document.querySelectorAll(".name")[0].innerHTML = owner.toUpperCase();
    document.querySelectorAll(".name")[1].innerHTML = owner.toUpperCase();
}
// Setting site name.....
function showComments(own){
    var a = own.parentElement.parentElement.childNodes[9];
    var b = a.childNodes[5];
    if(b == undefined){
        a.childNodes[5].innerHTML = "<br><hr><br>No comments available!";
    }
    a.style.display = "block";
    own.innerHTML = "Read less <i class='fas fa-angle-double-down'></i>";
    own.setAttribute("onclick","hideComments(this)");
}
function hideComments(own){
    var a = own.parentElement.parentElement.childNodes[9];
    a.style.display = "none";
    own.innerHTML = "Read more <i class='fas fa-angle-double-right'></i>";
    own.setAttribute("onclick","showComments(this)");
}
// show comments and hide comments.....
function cCount(){
        var comment = document.getElementsByClassName("c-count");
    for(i = 0; i < comment.length; i++){
        var count = comment[i];
        var details = count.parentElement.parentElement.parentElement.childNodes[9];
        var nodeList = details.childNodes[5].childNodes;
        var arr = Array.prototype.slice.call(nodeList);
        function ccFunction(value){
            return value == "[object HTMLDivElement]";
        }
        var cblk = arr.filter(ccFunction);
        var commentCount = cblk.length;
        count.innerHTML = commentCount;
    }
}
cCount();
// Counting Comments in each post......
function addComment(btn){
    var value = btn.previousSibling.previousSibling.value;
    if(value !== ""){
        var createChild = document.createElement("div");
        createChild.setAttribute("class","c-blk");
        createChild.innerHTML = value;
        var commentSec = btn.parentElement.parentElement.childNodes[5];
        commentSec.appendChild(createChild);
        cCount();
        btn.previousSibling.previousSibling.value = "";
    }
}
// Write a new Comment.....
var blogActive1 = document.getElementsByClassName("blog-active")[0];
var blogActive2 = document.getElementsByClassName("blog-active")[1];
function checkBtn(){
var blogActive1 = document.getElementsByClassName("blog-active")[0];
var blogActive2 = document.getElementsByClassName("blog-active")[1];
    var checkPre = blogActive1.previousSibling.previousSibling;
    if(checkPre == null){
        document.getElementById("p-btn").setAttribute("disabled","");
    }else{
        document.getElementById("p-btn").removeAttribute("disabled");
    }
    var checkNext = blogActive2.nextSibling.nextSibling;
    if(checkNext == null){
        document.getElementById("n-btn").setAttribute("disabled","");
    }else{
        document.getElementById("n-btn").removeAttribute("disabled");
    }
}
checkBtn();
//
function previousFunction(){
    var blogActive1 = document.getElementsByClassName("blog-active")[0];
    var blogActive2 = document.getElementsByClassName("blog-active")[1];
    var cPre = blogActive1.previousSibling.previousSibling;
    blogActive2.classList.remove("blog-active");
    cPre.classList.add("blog-active");
    checkBtn();
}
function nextFunction(){
    var blogActive1 = document.getElementsByClassName("blog-active")[0];
    var blogActive2 = document.getElementsByClassName("blog-active")[1];
    var cNext = blogActive2.nextSibling.nextSibling;
    blogActive1.classList.remove("blog-active");
    cNext.classList.add("blog-active");
    checkBtn();
}
// Next post & Previous post.....