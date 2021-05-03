let leftColor = document.getElementById("leftcolor");
let rightColor = document.getElementById("rightcolor");
let cssText = document.getElementById("csstext");
let button = document.querySelector(".button");
let container = document.querySelector(".container");

const s = "0123456789abcdef";

function randomColor(){
    let str = "#";
    for(let i=0; i<6; i++){
        let j = Math.floor((Math.random()*100)%16);
        str = str+s[j];
    }
    return str;
}

function generate(){
    let lftColor = randomColor();
    let rgtColor = randomColor();
    leftColor.value = lftColor;
    rightColor.value = rgtColor;
    container.style.background = `linear-gradient(to right, ${lftColor}, ${rgtColor})`;
    cssText.innerHTML = `background: linear-gradient(to right, ${lftColor}, ${rgtColor});`;
}

function generate1(){
    container.style.background = `linear-gradient(to right, ${leftColor.value}, ${rightColor.value})`;
    cssText.innerHTML = `background: linear-gradient(to right, ${leftColor.value}, ${rightColor.value});`;
}

button.addEventListener("click",generate);
leftColor.addEventListener("change",generate1);
rightColor.addEventListener("change",generate1);