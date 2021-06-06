const date = new Date();
console.log(date);
const stopWatch = document.querySelector(".stopwatch-count");
let numero = 0;
setInterval(() => {
    stopWatch.innerHTML = numero;
    numero += 1; 
    if(numero  > 10) {
        numero = 0;
    }
}, 1000)
