const body = document.body;
const section = document.querySelector('section');
const button = document.querySelector('button');

// let clickCount = 0;

function f(e) {
    console.log(this); // this = e.currentTarget
    console.log('e.target :>> ', e.target); // e.target - це той елемент, на якому відбулася подія
    console.log('e :>> ', e.currentTarget); // e.currentTarget - це той елемент, на якому висить обробник
    console.log('-----------------------------------');

    // body.style.backgroundColor = 'yellow';
    e.target.style.backgroundColor = 'red';
}

body.addEventListener('click', f, { capture: true });
section.addEventListener('click', f, {capture: true} );
button.addEventListener('click', f, {capture: true});

button.addEventListener('click', f);
section.addEventListener('click', f);
body.addEventListener('click', f);


// function btnClickHendler(event) {
//     console.log('event :>> ', event);
//     this.style.backgroundColor = 'red';
// }

// function f(e) {
//     this.style.backgroundColor = 'green';
// }

// button.addEventListener('click', f);
// section.addEventListener('click', btnClickHendler);

let clickCount = 0;

body.addEventListener('click', () => {
    clickCount++;
    console.log('clickCount :>> ', clickCount);
})


button.addEventListener('click', e => {
    e.stopPropagation();
})