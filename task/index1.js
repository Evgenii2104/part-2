let mod = document.getElementById('modal_main');
let modal = document.getElementsByClassName('modal__close')[1]
//let modle = document.getElementsByClassName('btn btn_danger modal__close show-success')
//let mo = Array.from(modle)[0]
//console.log(mo)
setTimeout(() => {
    mod.classList.add('modal_active');
},1000);


mod.onclick = () => {
    modal.classList.remove('btn_danger', 'modal__close', 'show-success')
    modal.classList.add('btn_success')
    check()
    
}
//console.log(modle)
let cout = 1;
function check() {
    cout++
    if (cout > 2) {
        mod.classList.remove('modal_active')
    }

}

//
