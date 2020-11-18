let minus = document.querySelectorAll('.dropdown__minus');
let plus = document.querySelectorAll('.dropdown__plus');
let input = document.querySelectorAll('.dropdown__number');

for (let i = 0; i < minus.length; i++) {
    //Функции обработчика событий нажатия на кнопки minus
    function negative () {
        if (input[i].value > 0) {
            input[i].value -= 1;
        }
    }   
    //Обработчики событий кнопок minus
    minus[i].addEventListener('click', negative); 
}
for (let i = 0; i < plus.length; i++) {
    //Функции обработчика событий нажатия на кнопки plus
    function sum () {
        input[i].value = +input[i].value + 1;
    } 
    //Обработчики событий кнопок plus
    plus[i].addEventListener('click', sum);
}





