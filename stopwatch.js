var appendTens;
var appendSeconds ;
var interval;
var tens = 0;
var seconds = 0;

function onLoad(){
 appendTens = document.getElementById("tens");
 appendSeconds = document.getElementById("seconds");
 interval;
}


function startTimer() {

    tens++;

    if (tens < 9) {
        appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
        appendTens.innerHTML = tens;
    }
    if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }
    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;

    }
}

function startBtnClick () {
    interval = setInterval(startTimer);

};

function buttonStop() {

    clearInterval(interval);
};

function buttonReset() {
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens
}; 
