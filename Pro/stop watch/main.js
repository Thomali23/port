let secondPassed = 0;
let interval = null;
const time  = document.getElementById('time')

function padStart(value){
    return String(value).padStart(2, "0")
}

function setTime(){
    const min = Math.floor(secondPassed / 60)
    const hr = Math.floor(min / 60)
    const sec = secondPassed % 60;
    time.innerHTML = `${padStart(hr)}:${padStart(min)}:${padStart(sec)}`
}


function timer() {
    secondPassed ++; 
    setTime()    
}

function startWatch() {
    if (interval) pauseWatch()
    interval = setInterval(timer, 1000)  
}

function pauseWatch() {
    clearInterval(interval)
}

function resetWatch() {
   pauseWatch()
   secondPassed = 0;
   setTime() 
}