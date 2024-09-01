var y,m,d,h,date,min;
min = document.getElementById("date");
y = new Date().getFullYear();
m = new Date().getMonth()+1;
d = new Date().getDate();
h = new Date().getHours();
date = y+"-"+("0"+m).slice(-2)+"-"+("0"+d).slice(-2)+"T"+("0"+h).slice(-2)+":00:00";
//
min.setAttribute("value", date);
min.setAttribute("min", date);