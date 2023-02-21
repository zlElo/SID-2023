var sec = 0;
var timer = setInterval(function(){
document.getElementById("counter").innerHTML = sec+" Sekunden";
    sec++;
    if (sec < 0) {
        clearInterval(timer);
    }

    if (sec == 10) {
        window.location.href = "5.html";
    }
}, 1000);