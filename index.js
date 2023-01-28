//let but = Array.from(document.querySelector('li'))
let button = document.getElementsByClassName('menu menu_main')[0]
let butt = button.querySelector('.menu__item')
//let button1 = button.querySelector('.menu menu_sub')
let links = Array.from(document.querySelectorAll('a'))
//let links = link.querySelector('.menu__link')
console.log(button)
console.log(butt)

links.forEach((link) => {
    link.onclick = (event) => {
        console.log(link)
        event.preventDefault()
    }
})


   /*button.onmouseover = () => {
        console.log()
        button.classList.add('menu_active')
    }
*/
/*function sub(event) {
    event.type = 0
if (event.type == 'mouseover') {
    event.target.classList.add('menu_active')
  }
  if (event.type == 'mouseout') {
    event.target.classList.remuv('menu_active')
  }
  console.log(event.type)
}

sub()*/