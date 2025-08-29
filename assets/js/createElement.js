'use strict';

const section = document.createElement('section');


const divRoot = document.querySelector('#root');
divRoot.append(section);



section.textContent = 'lorem ipsum dolor sit amet';
section.style.backgroundColor = 'gray';


const article = document.createElement('article');
divRoot.prepend(article);
article.textContent = 'article is the firt child';

const button = document.createElement('button');
button.textContent = 'Click me';
button.style.marginTop = '10px';
divRoot.after(button);

const divForRemove = document.querySelector('.removaeble');

divForRemove.addEventListener('click', function() {
    this.remove();
})