const hourEl = document.getElementById('hour');
const minuteEl = document.getElementById('minute');
const secondEl = document.getElementById('second');

function updateClock(){
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds(); 
    let ampm = 'AM'

    if(h > 12 && m>0 && s > 0)
    {
        h = h- 12;
        ampm = 'PM'
    }

    hourEl.textContent = `${h}`.padStart(2,0);
    minuteEl.textContent = `${m}`.padStart(2,0);
    secondEl.textContent = `${s}`.padStart(2,0);
}

updateClock();
setInterval(updateClock,1000);




