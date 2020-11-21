let minus = document.querySelectorAll('.dropdown__minus');
let plus = document.querySelectorAll('.dropdown__plus');
let input = document.querySelectorAll('.dropdown__number');
let mainInput = document.querySelector('.dropdown__input');
let dropDownWindow = document.querySelector('.dropdown__window');
let label = document.querySelector('.dropdown__label');
let mainInputDataBorder = document.querySelector('[data-border]');

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
    if (label.innerHTML == 'Взрослые') {
        mainInput.value = 'Сколько гостей';
    } else {
        mainInput.value = `${input[0].value} спальни, ${input[1].value} кровати, ${input[2].value} ванны`;
        if (mainInput.value.length > 20) {
            mainInput.value = mainInput.value.substr(0, 20) + '...';
        }
    } 
}
//Функция выпадающего окна
function hidden () {
    dropDownWindow.classList.toggle('dropdown__window_hidden');
}
function hiddenOnDocument (event) {
    if ( event.target !== mainInput  && !event.target.matches('[data-window]') ) {
        dropDownWindow.classList.remove('dropdown__window_hidden');
    }
}
function addBorder () {
    if (mainInputDataBorder) {
        mainInputDataBorder.classList.toggle('dropdown__input_border');
    }
}
function addwindowBorder (event) {
    if ( event.target !== mainInput  && !event.target.matches('[data-window]') ) {
        if (mainInputDataBorder) {
            mainInputDataBorder.classList.remove('dropdown__input_border');
        }
    }
}
//Обработчики события выпадающего окна
mainInput.addEventListener('click', hidden);
mainInputDataBorder.addEventListener('click', addBorder);
window.addEventListener('click', addwindowBorder );
window.addEventListener('click', hiddenOnDocument);