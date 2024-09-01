var user = document.getElementById("user").innerText;
var userProfession = document.getElementById("user-profession").innerText;
var userAddress = document.getElementById("user-address").innerText;
var userEmail = document.getElementById("user-email").innerText;
var userNumber = document.getElementById("user-num").innerText;
//
document.forms.form.name.value = user;
document.forms.form.address.value = userAddress;
document.forms.form.email.value = userEmail;
document.forms.form.number.value = userNumber;
//
submitForm = () => {
    document.getElementsByClassName("float")[0].style.display = "none";
    //
    document.getElementById("user").innerHTML = document.forms.form.name.value;
    document.getElementById("user-profession").innerHTML = document.forms.form.profession.value;
    document.getElementById("user-address").innerHTML = document.forms.form.address.value;
    document.getElementById("user-email").innerHTML = document.forms.form.email.value;
    document.getElementById("user-num").innerHTML = document.forms.form.number.value;
    //
    var adobe = document.forms.form.adobe.value;
    var photography = document.forms.form.photography.value;
    var illustrator = document.forms.form.illustrator.value;
    var media = document.forms.form.media.value;
    //
    var eng = document.forms.form.eng.value;
    var spanish = document.forms.form.spanish.value;
    var german = document.forms.form.german.value;
    //
    if(adobe !== "null"){
        document.getElementsByClassName("fg")[0].style.width = adobe+"%";
        document.getElementsByClassName("fg")[0].innerHTML = adobe+"%";
    }else{
        document.getElementsByClassName("fg")[0].style.width = "90%";
        document.getElementsByClassName("fg")[0].innerHTML = "90%";
    }
    //
    if(photography !== "null"){
        document.getElementsByClassName("fg")[1].style.width = photography+"%";
        document.getElementsByClassName("fg")[1].innerHTML = photography+"%";
    }else{
        document.getElementsByClassName("fg")[1].style.width = "80%";
        document.getElementsByClassName("fg")[1].innerHTML = "80%";
    }
    //
    if(illustrator !== "null"){
        document.getElementsByClassName("fg")[2].style.width = illustrator+"%";
        document.getElementsByClassName("fg")[2].innerHTML = illustrator+"%";
    }else{
        document.getElementsByClassName("fg")[2].style.width = "75%";
        document.getElementsByClassName("fg")[2].innerHTML = "75%";
    }
    //
    if(media !== "null"){
        document.getElementsByClassName("fg")[3].style.width = media+"%";
        document.getElementsByClassName("fg")[3].innerHTML = media+"%";
    }else{
        document.getElementsByClassName("fg")[3].style.width = "50%";
        document.getElementsByClassName("fg")[3].innerHTML = "50%";
    }
    //
    if(eng !== "null"){
        document.getElementsByClassName("fg")[4].style.width = eng+"%";
    }else{
        document.getElementsByClassName("fg")[4].style.width = "100%";
    }
    if(spanish !== "null"){
        document.getElementsByClassName("fg")[5].style.width = spanish+"%";
    }else{
        document.getElementsByClassName("fg")[5].style.width = "55%";
    }
    if(german !== "null"){
        document.getElementsByClassName("fg")[6].style.width = german+"%";
    }else{
        document.getElementsByClassName("fg")[6].style.width = "25%";
    }
}