
/*const menuItems = Array.from(document.querySelectorAll('.menu_main > .menu__item'))


menuItems.forEach((menuItem) => {
    let link = menuItem.querySelector('a')
    let menuSub = menuItem.querySelector('.menu_sub')
    if (menuSub !== undefined) {
        link.onclick = (event) => {
            menuSub.classList.toggle('menu_active')
            event.preventDefault()
        }
    }
})*/


const menuItems = Array.from(document.querySelectorAll('.menu_main > .menu__item'))


menuItems.forEach((menuItem) => {
    let link = menuItem.querySelector('a')
    link.onclick = (event) => {
        let menuSub = menuItem.querySelector('.menu_sub')
        if (menuSub !== undefined) {
            let menuActs = Array.from(document.querySelectorAll('.menu_sub.menu_active'))
            console.log(menuActs)
            if (menuActs.length > 0) {
                menuActs.forEach((menuAct) => {
                menuAct.classList.remove('menu_active')
            })
        } else {
            menuSub.classList.add('menu_active')
            event.preventDefault()
        }
        //menuSub.classList.add('menu_active')
        //event.preventDefault()        
        }
    }
})









/*let but = document.querySelectorAll('ul .menu_sub')
let butt = document.querySelectorAll('.menu__item + .menu_sub')
//let button = document.getElementsByClassName('menu menu_main')[0]
//let butt = button.querySelector('.menu__item')
//let button1 = button.querySelector('.menu menu_sub')
let links = Array.from(document.querySelectorAll('a'))
//let links = link.querySelector('.menu__link')
console.log(butt)
console.log(but)
*/
/*links.forEach((link) => {
    link.onclick = (event) => {
        console.log(link)
        event.preventDefault()
    }
})
*/

/*butt.forEach((but) => {
    but.onclick = (but.target) => {
        console.log(but.target)
        //but.classList.add('menu_active')
        //but.nextSibling.add('menu_active')
        //butt.children.add('menu_active')
    }
})*/
















/*document.querySelector('.menu').addEventListener("click", function(event) {
                let target = event.target;
                if (target = target.closest(".menu_active")) {
                    let parent = target.parentNode;
                    let children = parent.parentNode.children;
                    [...children].forEach(el => el.classList[ el === parent ? "toggle" : "remove"]("menu_sub"))
                }
            });
    */




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