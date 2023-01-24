
//let start = new Date().getTime()
//console.log(start)


function useCounter() {
    let countr = 0;
    let start = new Date().getSeconds()
 
    return function() {
      
        countr++;
        if (countr % 2 !== 0) {
          document.getElementById("image").style.width = "120px";
          
          } else {
            document.getElementById("image").style.width = "100px";
            
          }
          
          let end = new Date().getSeconds()
          let speed = countr / (end - start) 
          console.log(start, end) ;
          
        return (document.getElementById("click_speed").innerHTML = `Скорость клика: ${speed}`,
         document.getElementById("click_count").innerHTML = `Количество кликов: ${countr}`);
    }; 
}

let counter = useCounter();
 
function count() {
  counter();
}




// Доработки:
// - Нужно исправить названия id элементов. Подробно об этом я написал в задании 2.1. Твой код:
//   `
//     <p id="clik">Количество кликов</p>
//     <button id="clik1" onclick="count()">
//   `
//   Первый элемент – это количество кликов. Количество/счет на английском count, клик – click.
//   Собираем вместе и получается click_count. Аналогично придумай хорошее название для второго
//   элемента – кнопки.
// - Логика работы не такая, как описано в задании. Ты показываешь alert после каждого клика,
//   а по заданию этого делать не нужно. Ты увеличиваешь/уменьшаешь размер печенья при
//   наведении/отведении мыши, а тебе нужно увеличивать/уменьшать при каждом клике.
//   Т.е. ты нажал первый раз – печень увеличилось, нажал второй раз – уменьшилось,
//   нажал третий раз – снова увеличилось.
// - Ты в своем решении использовал функции mouseDown и mouseUp в HTML документе.
//   Это работает, но в рамках текущего курса тебе нужно другой подход использовать.
//   Ты должен применить эти функции в JS документе, а не в HTML. Тебе нужно найти
//   элемент на странице, к которому ты хочешь их применить и записать их в соответствующее
//   свойство объекта найденного элемента.
// - Ты не сделал вторую часть задания – нужно рассчитать скорость клика.
