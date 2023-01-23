console.log(document.getElementById('timer'));

const timerVal = document.getElementById('timer');


/*function initTimer() {
   let seconds = 5;
   const timer = setInterval(() => {
     if(seconds < 0) {
       timerVal.style.display = 'none';
       
       alert('Вы победили в конкурсе');
       clearInterval(timer);
     }
     timerVal.textContent = `До окончания курса осталось: 00:00:${seconds} секунд`;
     seconds -= 1;
   }, 1000);
}

initTimer();*/


let seconds = 900;

function chekTime() {
  const timer = setInterval(() => {
    
    if(seconds < 0) {
      timerVal.style.display = 'none';
      alert('Вы победили в конкурсе');
      clearInterval(timer);
    }
  let hour = 0;
  let min = 0;
  let sec = seconds;
  
   if ( sec > 60 && sec <= 3600) {
      min = Math.floor(seconds / 60);
      sec = seconds - (60 * min)
    } if (sec > 3600) {
      sec = Math.floor(seconds - (60 * 60)) 
      min = Math.floor(seconds / 60);
      hour = Math.floor(min / 60);
    }
  hour = hour < 10 ? '0' + hour : hour;
  min = min < 10 ? '0' + min : min;
  sec = sec < 10 ? '0' + sec : sec;

     timerVal.textContent = `До окончания курса осталось: ${hour + ':' + min + ':' + sec} секунд`;
     console.log(hour + ':' + min + ':' + sec)
     seconds -= 1
}, 1000)  
}
 
 chekTime()


