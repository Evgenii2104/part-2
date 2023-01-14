
function useCounter() {
    let count = 0;
 
    return function() {
        count++;
        return document.getElementById("clik").innerHTML = `Количество кликов ${count}`
    }; 
}
 
let counter = useCounter();
 
function count() {
  alert(counter());
}

function mouseDown() {
    document.getElementById("image").style.width = "120px";
  }
  
  function mouseUp() {
    document.getElementById("image").style.width = "100px";
  }
