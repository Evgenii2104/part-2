let tips = Array.from(document.querySelectorAll('.has-tooltip'))

console.log(tips)

tips.forEach((tip) => {
    tip.onclick = (event) => {
        event.preventDefault() 
        if(!document.querySelectorAll('.tooltip_active')) {
            console.log(document.querySelector('.tooltip_active'))
           document.querySelector('.tooltip_active').remove('tooltip_active')
        } else {
        
        let act = document.createElement("div")
        act.innerText = tip.title
        act.classList.add('tooltip')
        act.classList.add('tooltip_active')
        
        tip.appendChild(act)
       console.log(tip.title)
        }
        
    }
})