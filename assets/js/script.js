const Hours = document.querySelector('#Hours')
const Minutes = document.querySelector('#Minutes')
const Seconds = document.querySelector('#Seconds')

let clock = setInterval(function time(){
    const data = new Date();
    let hr = data.getHours();
    let min = data.getMinutes();
    let sec = data.getSeconds();
    
    if(hr<10) hr = '0' + `${hr}`;
    if(min<10) min = '0' + `${min}`;
    if(sec<10) sec = '0' + `${sec}`;

    Hours.textContent = `${hr}`
    Minutes.textContent = `${min}`
    Seconds.textContent = `${sec}`
})