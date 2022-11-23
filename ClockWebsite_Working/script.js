let userName = prompt("İsminizi Girebilir misiniz?")
let info = document.querySelector("#info")
info.innerHTML = `${userName}`
let myClock = document.querySelector("#myClock")
window.onload = startTime;

function startTime(){

    var today=new Date();
    var gunler=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"] 
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();

        h=checkTime(h);
        m=checkTime(m);
        s=checkTime(s);
        myClock.innerHTML=h+":"+m+":"+s+"-"+gunler[today.getDay()];
        t=setTimeout('startTime()',1000);
}

function checkTime(i)
{
if (i<10)
 {
  i="0" + i;
 }
return i;
}