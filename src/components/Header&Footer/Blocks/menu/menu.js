const menuButton = document.querySelector('.menu__burger');
const menuItems = document.querySelectorAll('.menu__line');
const menuWindow = document.querySelector('.menu__wrapper');
//  Функции обработчики
function getClick() {
  menuItems[1].classList.toggle('menu__line_active');
  menuItems[0].classList.toggle('menu__line_before-active');
  menuItems[2].classList.toggle('menu__line_after-active');
}
function viewMenu() {
  menuWindow.classList.toggle('menu__wrapper_active');
}
//  Вешаю событие
menuButton.addEventListener('click', getClick);
menuButton.addEventListener('click', viewMenu);
