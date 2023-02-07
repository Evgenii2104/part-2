let but = document.querySelector('.dropdown__value')
let men = document.querySelector('.dropdown__list')

console.log(but, men)

but.onclick = () => {
    //let targget = event.targget
   // let targget = this.value
    console.log(but.textContent)
    //but.textContent = targget.parentNode 
    men.classList.toggle('dropdown__list_active')
    men.onclick = (event) => {
        //let targget = event.currentTargget
        console.log(this.targget, targget)
        but.textContent = men.event.textContent

    }

}

/*let c = document.querySelectorAll('.dropdown__list')
c.addEventListener('change', function(){  
    var getValue = this.value;
    // this в этом контексте - элемент, который запустил фукнцию. То же, что и select.value;
    console.log( getValue );
  });*/
