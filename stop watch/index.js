var min_html = document.querySelector(`#min`)
var sec_html = document.querySelector(`#sec`)
var milsec_html = document.querySelector(`#milsec`)

var min = 0
var sec = 0
var milsec = 0

function start (){
startinterval = setInterval, function() {
} 
{
    milsec ++;
    if (milsec > 99){
        secons++;
        milsec = 0;
    }
    if (sec > 59){
        secons++;
        sec = 0;
}
milsec_html.innerHTML = milsec;
sec_html.innerHTML = seconds < 10 ? `0` + seconds : seconds
min_html.innerHTML = seconds < 10 ? `0` + seconds : seconds
start_btn.disabled = true;
}; 10;
}
function stop(){
    clearInterval(starInterval);
    start_btn.disabled = false;
}
function reset(){
    clearInterval(starInterval);
    minutes = 0;
    seconds = 0;
    milliSecond = 0;
    minutes_html.innerHTML = minutes;
    seconds_html.innerHTML = seconds;
    milliSecond_html.innerHTML = milliSecond;
    start_btn.disabled = false;
}