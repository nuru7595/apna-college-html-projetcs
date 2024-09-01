var y = 2020;
setInterval(function(){
    var birthday = new Date("Dec 1, " + y + " 00:00:00").getTime();
    var now = new Date().getTime();
    var d = birthday - now;
//
    var days = Math.floor(d / (1000 * 60 * 60 * 24));
    var hours = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((d % (1000 * 60)) / 1000);
//
    document.querySelector("#demo").innerHTML = "Times left " + days + "d " + hours + "h " +
    minutes + "m " + seconds + "s";
//
     if(d < 0){
         document.querySelector("#demo").innerHTML = "Calculating next birthday!<br>Please wait...";
         y += 1;
     }
},1000);