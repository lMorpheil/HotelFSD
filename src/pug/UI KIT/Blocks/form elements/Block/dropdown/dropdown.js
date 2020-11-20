const { event } = require("jquery");

let minus = document.querySelectorAll('.dropdown__minus');
let plus = document.querySelectorAll('.dropdown__plus');
let input = document.querySelectorAll('.dropdown__number');
let mainInput = document.querySelector('.dropdown__input');
let dropDownWindow = document.querySelector('.dropdown__window');

//Задаём значение input если значение не задано
for (let i = 0; i < input.length; i++) {
    if (input[i].value == '') {
        input[i].value =0;
    } 
}
getValue();
for (let i = 0; i < minus.length; i++) {
    //Функции обработчика событий нажатия на кнопки minus
    function negative () {
        if (input[i].value > 0) {
            input[i].value -= 1;
        }
    }   
    //Обработчики событий кнопок minus
    minus[i].addEventListener('click', negative);
    minus[i].addEventListener('click', getValue);
}
for (let i = 0; i < plus.length; i++) {
    //Функции обработчика событий нажатия на кнопки plus
    function sum () {
        input[i].value = +input[i].value + 1;
    } 
    //Обработчики событий кнопок plus
    plus[i].addEventListener('click', sum);
    plus[i].addEventListener('click', getValue);
}
//Работа с главным окном Input
function getValue () {
    mainInput.value = `${input[0].value} спальни, ${input[1].value} кровати, ${input[2].value} ванны`;
}
//Функция выпадающего окна
function hidden () {
    dropDownWindow.classList.toggle('dropdown__window_hidden');
}
function hiddenOnDocument (event) {
    if ( event.target !== mainInput  && !event.target.matches('dropdown__window>*')) {
        dropDownWindow.classList.remove('dropdown__window_hidden');
    }
}
//Обработчики события выпадающего окна
mainInput.addEventListener('click', hidden);
window.addEventListener('click', hiddenOnDocument);