let win = document.querySelector('.status__wins')
let loss = document.querySelector('.status__loss')

console.log(win, loss)

let strs = Array.from(document.querySelectorAll('.word > .symbol'))
//let strTexts = strs.textContent
console.log(strs)
let count = 0
let countWin = 0
    let countLoss = 0
function curretTru (event) {
    
    
    //console.log(event)
    //console.log(event instanceof KeyboardEvent)
    console.log(event.key) //

    if (count < strs.length) {
            let str = strs[count]
            console.log(str, count)
        
        if (event.key === str.textContent) {
           str.classList.add('symbol_correct'),
            countWin++,
            count++
            
        } else {
            str.classList.add('word_incorrect'),
            countLoss++,
            count++
        }
        
    } else {
        alert(`Правильно введённых слов:${countWin}
        Неправильно введённых слов:${countLoss} `)
    }
    
    win.innerHTML = `${countWin}`, 
    loss.innerHTML = `${countLoss}`
}

document.addEventListener('keydown', curretTru)