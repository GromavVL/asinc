'use strict';


console.log('before timeout');
setTimeout(() => {
    console.log('in timeout');
}, 1000);

console.log('ather timeout');

function f1() {
    console.trace();
    console.log('end');
}

function f() {
    console.trace();
    f1();
}

f();