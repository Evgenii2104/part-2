
let modalMain = document.getElementById('modal_main');
let modalSuccess = document.getElementById('modal_success')
//let modal = document.getElementsByClassName('modal__close')[0];
let button = document.getElementsByClassName('show-success')[0]
//let button1 = document.getElementsByClassName('btn btn_success')

let modalMainClose = modalMain.querySelector('.modal__close')
let modalSuccessClose = modalSuccess.querySelector('.modal__close')

console.log(modalMainClose, modalSuccessClose)


setTimeout(() => {
    modalMain.classList.add('modal_active');
},1000);

modalMainClose.onclick = () => {
    modalMain.classList.remove('modal_active');
}

button.onclick = () => {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active'); 
}

modalSuccessClose.onclick = () => {
    modalSuccess.classList.remove('modal_active');
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
