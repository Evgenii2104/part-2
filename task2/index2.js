let modal = document.querySelector('.modal');

setTimeout(() => {
    modal.classList.add('modal_active');
}, 1000);

let closeModal = document.querySelector('.modal__close');

closeModal.onclick = () => {
    modal.classList.remove('modal_active');
};

console.log(document.cookie);




function getCookie(name) {
    let cookie_arr = document.cookie.split('; ');
    let cookie_obj = {};

    for (let i = 0; i < cookie_arr.length; i++) {
        let nv = cookie_arr[i].split('=');
        cookie_obj[nv[0]] = nv[1]; 
    }

    return cookie_obj[name];
}        

if ( getCookie('modal_active') == 'yes' ) {
    modal.style.display ='none';
}
//заприщаем показ модального окна
closeModal.addEventListener('click', function() { 
                
        let date = new Date(new Date().getTime() + 60 * 1000);
        document.cookie = "modal_active=yes; path=/; expires=" + date.toUTCString();

        modal.style.display ='none';
    });