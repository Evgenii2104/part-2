/*const menuItems = Array.from(document.querySelectorAll('.menu_main > .menu__item'))


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
        
        }
    }
})*/

/*let button = Array.from(document.getElementsByClassName('dropdown__value'))
console.log(button)
button.addEventListener('clic', function() {
    console.log(this.dropdown__list)
})
*/


