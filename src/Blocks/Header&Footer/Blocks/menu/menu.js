let menuButton = document.querySelector('.menu__burger');
let menuItems  = document.querySelectorAll('.menu__line');
let menuWindow = document.querySelector('.menu__wrapper');
// Вешаю событие
menuButton.addEventListener('click', getClick);
menuButton.addEventListener('click', viewMenu);
//Функции обработчики
function getClick() {
    menuItems[1].classList.toggle('menu__line_active');
    menuItems[0].classList.toggle('menu__line_before-active');
    menuItems[2].classList.toggle('menu__line_after-active');  
}
function viewMenu() {
    menuWindow.classList.toggle('menu__wrapper_active');
}

