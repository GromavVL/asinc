'use strict';

const btns = document.querySelectorAll('button');

function btnClickHandler(e) {
    console.log(e.target.dataset.host); 
}

btns.forEach(b => b.onclick = btnClickHandler);

const colorBtns = document.querySelectorAll('div > button');

function changeColor(e) {
    document.body.style.backgroundColor = e.target.dataset.color;
}

colorBtns.forEach(b => b.onclick = changeColor);