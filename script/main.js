const stopWatch = document.querySelector(".stopwatch-count");
const buttons = document.getElementsByTagName("button");

console.log(buttons);
let millisecond = 0;
let timer;

function timeStart() {
    stopWatch.style.color = "#ffffff";
    clearInterval(timer);
    timer = setInterval(() => {

        millisecond += 10;

        let dateTimer = new Date(millisecond);

        stopWatch.innerHTML = 
        ('0'+dateTimer.getUTCHours()).slice(-2) + ':' +
        ('0'+dateTimer.getUTCMinutes()).slice(-2) + ':' +
        ('0'+dateTimer.getUTCSeconds()).slice(-2) + ':' +
        ('0'+dateTimer.getUTCMilliseconds()).slice(-3,-1);
    }, 10);
}

function timePause() {
    stopWatch.style.color = "red";
    clearInterval(timer);
}

function timeReset() {
    setInterval(timer);
    stopWatch.style.color = "white";
    millisecond = 0;
    stopWatch.innerHTML = "00:00:00:00";
} 
for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (event) => {
        const buttonClicked = event.target;
    
        if(buttonClicked.className == "start-button") {
            timeStart();
        }
            
        if(buttonClicked.className == "stop-button") {
            timePause();
        }
            
        if(buttonClicked.className == "reset-button") {
            timeReset();
        }
            
    });
}
