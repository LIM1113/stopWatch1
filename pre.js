let reset = document.querySelector('.reset');
let start = document.querySelector('.start');
let stop = document.querySelector('.stop');
let addclock = document.querySelector('.clock');
let record = document.querySelector('.record');

let minute = 0;
let second = 0;

function clickFn(){
    second++;

    if(second<10){
      addclock.innerText = `0${minute}:0${second}`
    }
    if(second>=10){
      addclock.innerText = `0${minute}:${second}`
    }
    if(second >= 60){
      minute ++;
      second = 00;
      addclock.innerText = `0${minute}:0${second}`
    }
    if(minute >= 10 && second<10){
      addclock.innerText = `${minute}:0${second}`
    }
    if(minute >= 10 && second >= 10){
      addclock.innerText = `${minute}:${second}`
    }
  }
//-> 중복되는 코드가 많음.

start.addEventListener('click',function(){
  interval = setInterval(clickFn, 400);
});  //--> 한번 이상 클릭 시 오류 발생,,

stop.addEventListener('click',function(){
  clearInterval(interval);
});

addclock.addEventListener('click',function(){
  record.innerHTML += `<div>${minute}:${second}</div>`
})


reset.addEventListener('click',function(){
  clearInterval(interval);
  record.innerHTML = '';
  addclock.innerText = "00:00";
  second = 0;
  minute = 0;
})

/*
**추가 기능 구상**
-> 디자인 추가
-> 추가적으로 숫자클릭 시 숫자가 기록되는 기능 추가
-> 밀리초 추가
*/
