'use strict';

// setTimeout
// setInterval

// function timeoutAction() {
//     console.log('Hello');
// }

// console.log('Before timeout');
// setTimeout(timeoutAction, 10000);

// let i = 0;

// function intervalHendler() {
//     if (i === 5) {
//         return clearInterval(setIntervald);
//     }
//     console.log(++i);
// }

// const setIntervald = setInterval(intervalHendler, 1000);

// const btn = document.querySelector('button');

// function deleteBtn(e) {
//     btn.remove();
// }

// function newColorbtn() {
//     btn.style.backgroundColor = 'green';
// }

// setInterval(deleteBtn, 5000);

// btn.addEventListener('click', () => {setInterval(newColorbtn, 2000)});


const timeEl = document.querySelector('.time');
const [startBtn, stopBtn, resetBtn] = document.querySelectorAll('.btn-container > button');

let time = new Date(0);

let setIntervald = null;

function startBtnHendler() {
    function tick() {
        time.setMilliseconds(time.getMilliseconds() + 1);
        updateTime(time);
    }
    if (!setIntervald) {
        setIntervald = setInterval(tick, 1);
    }
}

function stopBtnHendler() {
    clearInterval(setIntervald);
    setIntervald = null;
}

function resetBtnHendler() {
    time = new Date(0);
    updateTime(time);
}

function updateTime(time) {
    timeEl.textContent = `${time.getMinutes()}:${time.getSeconds()}:${time.getMilliseconds()}`;
}

startBtn.onclick = startBtnHendler;
stopBtn.onclick = stopBtnHendler;
resetBtn.onclick = resetBtnHendler;
