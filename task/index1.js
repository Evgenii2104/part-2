/*let openn = document.getElementById('modal_main');
openn.onclick = function() {
    openn.classList.add('modal_active')
}
let modal = document.getElementsByClassName('modal__close')[0];

console.log(openn, modal)

openn.onclick = function() {
    modal.style.display = "block"
}


/*document.addEventListener('DOMContentLoaded', () => {
 
    // Кнопка по которой происходит клик
    let callBackButton = document.getElementById('modal_main');
   console.log(callBackButton)
    // Модальное окно, которое необходимо открыть
    //let modal1 = document.getElementById('modal');
    //console.log(modal1)
    // Кнопка "закрыть" внутри модального окна
    let closeButton = callBackButton.getElementsByClassName('modal__close')[0];
    console.log(closeButton)
    callBackButton.onclick = function () {
      modal1.classList.add('modal_active');
    }
   
    closeButton.onclick = function () {
      modal1.classList.remove('modal_active');
    }
  });*/

  /*let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
  let popup = document.querySelector('.popup'); // Само окно
  let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
  let closePopupButton = document.querySelector('.close-popup'); 

openPopupButtons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg.classList.add('active'); // Добавляем класс 'active' для фона
        popup.classList.add('active'); // И для самого окна
    })
});

closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupBg.classList.remove('active'); // Убираем активный класс с фона
    popup.classList.remove('active'); // И с окна
});*/


document.addEventListener('DOMContentLoaded', function() {
    // это то модальное окно, с которым и будем работать
    const modal = document.querySelector('#modal_main');
    console.log(modal)

    // назначаем обработчик события для клика по кнопке открытия окна
    document.querySelector('#myBtn').addEventListener('click', openModal);

    /*
     * Обработчик события клика по кнопке открытия модального окна
     */
    function openModal() {
        modal.classList.add('modal-open');
        // обработчики событий, которые работают, когда окно открыто
        attachModalEvents();
    }

    /*
     * Функция назначает обработчики событий к элементам модального окна при открытии
     */
    function attachModalEvents() {
        // закрывать модальное окно при нажатии на крестик
        modal.querySelector('.close').addEventListener('click', closeModal);
        // закрывать модальное окно при нажатии клавиши Escape
        document.addEventListener('keydown', handleEscape);
        // закрывать модальное окно при клике вне контента модального окна
        modal.addEventListener('click', handleOutside);
    }

    /*
     * Обработчик события клика по кнопке закрытия модального окна
     */
    function closeModal() {
        modal.classList.remove('modal-open');
        // окно закрыто, эти обработчики событий больше не нужны
        detachModalEvents();
    }

    /*
     * Функция удаляет обработчики событий к элементам модального окна при закрытии
     */
    function detachModalEvents() {
        modal.querySelector('.close').removeEventListener('click', closeModal);
        document.removeEventListener('keydown', handleEscape);
        modal.removeEventListener('click', handleOutside);
    }

    /*
     * Функция закрывает модальное окно при нажатии клавиши Escape
     */
   /* function handleEscape(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    }

    /*
     * Функция закрывает модальное окно при клике вне контента модального окна
     */
    /*function handleOutside(event) {
        const isClickInside = !!event.target.closest('.modal-content');
        if (!isClickInside) {
            closeModal();
        }
    }*/
});