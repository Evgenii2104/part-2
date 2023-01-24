
let holes = Array.from(document.getElementsByClassName('hole'));
 holes.forEach((hole) => {
    hole.onclick = (event) => {
        console.log(event.target.classList.contains('hole_has-mole'))
        checClick()
    }

})

let kill = 0;
let miss = 0;

function checClick() {
  if (event.target.classList.contains('hole_has-mole')) {
        kill++
         document.getElementById('dead').innerHTML = kill;
        if (kill > 9) {
            alert ('you win');
            document.location.reload()
        }
         
    } else {
        miss++
        document.getElementById('lost').innerHTML = miss;
        if (miss > 4) {
            alert ('you loser');
            document.location.reload()
        }
    }
}

// Доработки:
// - После победы/поражения игра не обнуляется – я не могу сыграть еще раз.
//   По заданию это должно быть реализовано.
// - В функции checkClick ты обращаешься к значению event. Но оно у тебя
//   не передается в функцию в качестве аргумента. Т.е. ты обращаешься
//   к значению event, которое не существует. Программа то работает,
//   но это происходит из-за одной вещи, которую ты еще не проходил (если бы не это,
//   то функция checkClick бы не работала).
//   Короче, посмотри на функцию checkClick и разберись, откуда у тебя в ней
//   появляется event и доработай. Если непонятно, что я имею ввиду, то давай
//   созвонимся. Я расскажу, в чем ошибка и почему с этой ошибокой все же работает программа.
// - В начале программы ты объявляешь переменную res и записываешь в нее результат работы
//   forEach. Напиши мне в скайпе ответ на вопрос: "Что возвращает forEach?". Ну и убери
//   неиспользуемую переменную.

