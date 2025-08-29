const burgerBtn = document.querySelector('.burgerMenuBtn');
const burgerMenu = document.querySelector('.burgerMenuContainer')


function burgerClick(event) {
    burgerMenu.classList.toggle('burgerMenuContainerHide');
    burgerMenu.classList.toggle('burgerMenuContainerActive');
}

burgerBtn.addEventListener('click', burgerClick);