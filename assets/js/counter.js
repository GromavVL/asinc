// View - ViewModel - Model
const counterEl = document.getElementById('counter');
const [decBtn, incBtn] = document.querySelectorAll('.counterBtn');

class Counter {
    constructor(counter) {
        this.counter = counter;
    }
    inc() { this.counter++ };
    dec() { this.counter-- };
}

const count = new Counter(0);

// Model
let counter = 0;
counterEl.textContent = count.counter;
function decCount(e) {
    count.dec();
    apdateView();
}

function incCount(e) {
    count.inc();
    apdateView();
}

function apdateView() {
    counterEl.textContent = count.counter;
}

incBtn.addEventListener('click', incCount);
decBtn.addEventListener('click', decCount);