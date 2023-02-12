//https://webgolovolomki.com/poyavlenie-elementov-pri-skrolle/
//http://wordsmall.ru/jquery-javascript/animaciya-elementov-pri-prokrutke-stranicy-js-plaginy.html
//https://learn.javascript.ru/js-animation

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  
  for (let elm of elements) {
    observer.observe(elm);
  }