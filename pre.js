let screenBox = document.querySelector('.screenBox')
let Btn2 =  document.querySelector('.Btn1')
let start =  document.querySelector('.start')
let stop =  document.querySelector('.stop')
let reset =  document.querySelector('.reset')
let record =  document.querySelector('.record')

let second = 0;
let minute = 0;
let hour = 0;

function clockBtn(){
    second++;
    if(second === 60){
      second = 0;
      minute++;

      if(minute === 60){
        minute = 0;
        hour++;
        if(hour === 60){
          hour = 0;
        }
      }
    }
    h = hour < 10 ? "0"+hour : hour;
    m = minute < 10 ? "0"+minute : minute;
    s = second < 10 ? "0"+second : second;

    screenBox.innerText = `${h}:${m}:${s}`
  }

start.addEventListener('click',function(){
  inter = setInterval(clockBtn,300);
})

stop.addEventListener('click',function(){
  clearInterval(inter);
})

reset.addEventListener('click',function(){
  clearInterval(inter);
  screenBox.innerText = "00:00:00"
  second = 0;
  minute = 0;
  hour = 0;
  record.innerHTML = '';
})

screenBox.addEventListener('click',function(){
  record.innerHTML += `<p>${h}:${m}:${s}</p>`
})
