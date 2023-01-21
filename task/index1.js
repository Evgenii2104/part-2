let mod = document.getElementById('modal_main');
let modal = document.getElementsByClassName('modal__close')[1]
//let modle = document.getElementsByClassName('btn btn_danger modal__close show-success')
//let mo = Array.from(modle)[0]
//console.log(mo)
setTimeout(() => {
    mod.classList.add('modal_active');
},1000);


mod.onclick = () => {
    modal.classList.remove('btn_danger', 'modal__close', 'show-success')
    modal.classList.add('btn_success')
    check()
    
}
//console.log(modle)
let cout = 1;
function check() {
    cout++
    if (cout > 2) {
        mod.classList.remove('modal_active')
    }

}

// Работает не так, как описано в задании

// Сейчас у тебя работает так:
// - При открытии страницы через 1 секунду открывается модальное окно modal_main.
// - При нажатии на ЛЮБОЕ место modal_main ты добавляешь/удаляешь классы у кнопки для закрытия modal__close
//   и таким образом ты МЕНЯЕШЬ ЕЕ ВНЕШНИЙ ВИД. Но тебе не нужно менять внешний вид ни кнопки, ни модального окна.
//   Тебе нужно СКРЫВАТЬ одно модальное окно и ОТКРЫВАТЬ другое.

// Должно работать вот так:
// - При открытии страницы через 1 секунду открывается модальное окно modal_main.
// - Если нажимаешь на кнопку закрытия modal__close в модальном окне modal_main, то
//   модальное окно modal_main закрывается и больше ничего не происходит.
// - Если нажимаешь на кнопку "Сделать хорошо" show-success
//   в модальном окне modal_main, то модальное
//   окно modal_main закрывается и после этого открывается модальное окно modal_success.
// - Если нажимаешь на кнопку закрытия modal__close в модальном окне modal_success,
//   то модальное окно modal_success закрывается.

// Дополнительные комментарии:
// - Привыкай использовать называть переменный так, чтобы название отображало суть переменной.
//   Например, у тебя есть вот такой код `let modal = document.getElementsByClassName('modal__close')[1]`.
//   Ты создаешь переменную "modal" и записываешь в нее объект КНОПКИ для закрытия модального окна modal__close.
//   Когда я читаю код и вижу переменную "modal", я ожидаю, что в переменной находится объект
//   модального ОКНА, но на самом деле в переменной КНОПКА. Т.е. название не соответствует содержимому.
//   Если это кнопка, то используй в названии слово "кнопка (button)". Если это кнопка с очень
//   определенным назначением (в данном случае для закрытия), то используй слово "закрыть (close)".
//   Назови ее как-нибудь "closeButton" или "closeBtn" или "modalCloseBtn"
//   или как-то еще, но чтобы название отражало суть. Используй такой подход всегда.
