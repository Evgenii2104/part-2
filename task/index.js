let text = document.getElementById('editor')
let but = document.querySelector('.button')

console.log(text.value)
//console.log(document.querySelector('.button'))

/*text.onclick = () => {
    if(document.querySelector('.button') === null) {
    let but = document.createElement('button')
    but.classList.add('button')
    let question = 'Очистить'
    let questio = document.createTextNode(question)
    but.appendChild(questio)
    document.querySelector('.content').appendChild(but)
    console.log(document.querySelector('.button'))
    }
    clearText()
    
}*/


text.addEventListener('input', () => {
    localStorage.setItem(`customText`, `${text.value}`)
  })
  
  function setText(){
    if (localStorage.hasOwnProperty('customText')){
      text.value = `${localStorage.customText}`;
    }
  }
  
  window.addEventListener('load', setText())

but.onclick = () => {
            text.value = ''
            localStorage.clear()
            console.log(text.textContent)
        }
    
