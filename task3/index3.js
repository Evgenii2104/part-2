
/*xhr.upload.onprogress = function(event) {
    console.log(event.loaded + ' / ' + event.total);
  }
  xhr.send(form)*/


const submitFile = document.getElementById('form');
const progress = document.getElementById('progress');
//progress.value = 0.7
let i = 0;

function submitForm(e) {
    e.preventDefault();
    const form = new FormData(submitFile);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.addEventListener('progress', loaderForm);
    xhr.upload.onprogress = function(event) {
        i = i + 1;
        progress.value = i / 20
        console.log(progress.value)
        console.log(event.loaded + ' / ' + event.total)
    }
    xhr.send(form);
    
}

function loaderForm() {
    if (this.status === 200) {
        i = i + 1;
        progress.value = i / 20;

    }
}

form.addEventListener('submit', submitForm);