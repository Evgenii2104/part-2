console.log(document.getElementById('timer'));

const timerVal = document.getElementById('timer');


function initTimer() {
   let seconds = 30;
   const timer = setInterval(() => {
     if(seconds < 0) {
       timerVal.style.display = 'none';
       let massag = prompt('Вы победили в конкурсе', '');
       alert(massag);
       clearInterval(timer);
     }
     timerVal.textContent = `До окончания курса осталось: 00:00:${seconds} секунд`;
     seconds -= 1;
   }, 1000);
}

initTimer();