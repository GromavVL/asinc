
const h1 = document.getElementById('h1');
const buttons = document.getElementById('btn');
const imgInfo = document.getElementById('mainImg');
const h2 = document.querySelectorAll('h2');

const imgEl = {
    src: 'https://electro-mobility.com.ua/wp-content/uploads/2023/03/audi-e-tron-gt-3.webp',
    alt: 'audi',
}
imgInfo.src = imgEl.src;
imgInfo.alt = imgEl.alt;

function f(e) {
    imgInfo.style.width = '300px'
    imgInfo.style.height = '100px'
    imgInfo.style.objectFit = 'cover'
    h1.style.backgroundColor = 'orange'
    h2.forEach(h2 => {
        h2.style.color = 'green'
        h2.style.fontSize = '20px'
    });
}
buttons.onclick = f;

//-----------------------------------