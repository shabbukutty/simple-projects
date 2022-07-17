
function showTime(){
    var todayDate = new Date();
    var hour = todayDate.getHours();
    var minutes = todayDate.getMinutes();
    var seconds = todayDate.getSeconds();

    hour = hour < 10 ? 0 +""+hour : hour
    minutes = minutes < 10 ? 0 +""+ minutes : minutes
    seconds = seconds < 10 ? 0 + "" + seconds : seconds
    var clockTime = hour + ":" + minutes + ":" + seconds
   document.getElementById("timeContainer").innerText = clockTime
}
showTime()


function showDate (){
    var todayDate = new Date();
    document.getElementById("dateContainer").innerText = todayDate.toDateString();
}showDate()
var intervalRef;
function stopClock(){
clearInterval(intervalRef);
}
function startClock (){
   intervalRef = setInterval(showTime, 1000);
}