let tex = document.querySelector('.tasks__input')
let buttAdd = document.querySelector('.tasks__add')

console.log(tex, buttAdd)

tex.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
        
        event.preventDefault()
        
        let div = document.createElement('div')
         div.classList.add('top')
        let inputTex = tex.value 
        let t = document.createTextNode(inputTex)
        div.appendChild(t)
        
        document.getElementById('tasks__list').appendChild(div)
        div.insertAdjacentHTML('beforeend', '<a href="#" class="task__remove">&times;</a>')
        tex.value = ''
        closDiv()
    }
})

function closDiv() {
let closes = Array.from(document.querySelectorAll('.task__remove'))

closes.forEach((clos) => {
    clos.onclick = () => {
        let divDo = document.querySelector('.top')
        console.log(divDo)
        divDo.remove()
    }
})
}













/*function newElem() {
    let div = document.createElement('div')
    let inputTex = tex.value 
    let t = document.createTextNode(inputTex)
    div.appendChild(t)
    if (inputTex === '') {
        alert('напишите текст')
    } else {
        document.getElementById('tasks__list').appendChild(div)
    }
    tex.value = ''

    let span = document.createElement('SPAN');
    let txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    div.appendChild(span);
}
*/
/*https://www.schoolsw3.com/howto/tryhow_js_todo.php
https://medium.com/@sshambir/%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D1%91%D0%BC-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-to-do-list-%D0%BD%D0%B0-%D1%87%D0%B8%D1%81%D1%82%D0%BE%D0%BC-javascript-9e81a0d60ab
https://web-standards.ru/articles/a-todo-list/
https://javascript.ru/forum/misc/75554-napishite-prostoe-todo-app-%E2%80%94-spisok-zadach.html
*/