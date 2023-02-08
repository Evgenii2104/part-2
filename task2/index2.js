let win = document.querySelector('.status__wins')
let loss = document.querySelector('.status__loss')

console.log(win, loss)

let strs = Array.from(document.querySelectorAll('.word > .symbol'))

console.log(strs)

function curretTru (event) {
    //console.log(event)
    //console.log(event instanceof KeyboardEvent)
    console.log(event.key) //
    //console.log(event.code)
    strs.forEach((str) => {
        console.log(str)
        if (event.key === str) {
            str.classList.add('symbol_correct')
            win.innerHTML += 1
        } else {
            str.classList.add('word_incorrect')
            loss.innerHTML += 1
        }
    })
}

document.addEventListener('keydown', curretTru)