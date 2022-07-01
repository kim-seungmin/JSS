const inputForm = document.getElementById("localInputDiv");
const inputString = document.querySelector("#localInputDiv input");
const inputButton = document.getElementById("set");
const clearButton = document.getElementById("clean");

const printStr = document.getElementById("show");

window.onload = function(){
    str = document.getElementById("show");
    str.innerHTML = localStorage.getItem("inputString");
}

function saveOnLocal(){
    const value = inputString.value;
    if(value==''){
        alert("no input");
    }else{
        localStorage.setItem("inputString", value);
        printStr.innerHTML = localStorage.getItem("inputString");
    }
}
inputButton.addEventListener("click",saveOnLocal);

function cleanLocal(){
    localStorage.removeItem("inputString");
    printStr.innerHTML = localStorage.getItem("inputString");
}
clearButton.addEventListener("click",cleanLocal);
