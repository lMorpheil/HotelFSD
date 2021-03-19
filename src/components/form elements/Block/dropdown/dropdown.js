const dropdown = document.querySelectorAll('.dropdown');

for (let i = 0; i < dropdown.length; i++) {
  const element = dropdown[i];

  const minus = element.querySelectorAll('.dropdown__minus');
  const plus = element.querySelectorAll('.dropdown__plus');
  const input = element.querySelectorAll('.dropdown__number');
  const mainInput = element.querySelector('.dropdown__input');
  const dropDownWindow = element.querySelector('.dropdown__window');
  const label = element.querySelector('.dropdown__label');
  const mainInputDataBorder = element.querySelector('input[data-border]');
  const clear = document.querySelectorAll('.dropdown .clear');
  const apply = document.querySelectorAll('.dropdown .apply');

  //  Задаём значение input если значение не задано
  for (let j = 0; j < input.length; j++) {
    if (input[j].value == '') {
      input[j].value = 0;
    }
  }
  getValue();
  for (let k = 0; k < minus.length; k++) {
  //  Функции обработчика событий нажатия на кнопки minus
    function negative () {
      if (input[k].value > 0) {
        input[k].value -= 1;
      }
    }
    //  Обработчики событий кнопок minus
    minus[k].addEventListener('click', negative);
    minus[k].addEventListener('click', getValue);
  }
  for (let i = 0; i < plus.length; i++) {
  //  Функции обработчика событий нажатия на кнопки plus
  function sum () {
    input[i].value = +input[i].value + 1;
  }
  //  Обработчики событий кнопок plus
    plus[i].addEventListener('click', sum);
    plus[i].addEventListener('click', getValue);
  }
  //  Работа с главным окном Input
  function getValue () {
  if (label.innerHTML == 'Взрослые') {
    let summa = +input[0].value + +input[1].value;
    let baby;
    switch (+input[2].value) {
    case(0):
      baby = "";
      break;
    case (1):
      baby = `${input[2].value} младенец`;
      break;
    case(2):
    case(3):
    case(4):
      baby = `${input[2].value} младенца`;
      break;
    default:
      baby = `${input[2].value} младенцев`;
    }
    switch (summa) {
    case(0):
      mainInput.value = "Сколько гостей " + baby;
      break;
    case (1):
      mainInput.value = `${summa} гость,${baby}`;
      break;
    case(2):
    case(3):
    case(4):
      mainInput.value = `${summa} гостя,${baby}`;
      break;
    default:
      mainInput.value = `${summa} гостей,${baby}`;
    }
  } else {
    mainInput.value = `${input[0].value} спальни, ${input[1].value} кровати, ${input[2].value} ванны`;
    if (mainInput.value.length > 20) {
    mainInput.value = mainInput.value.substr(0, 20) + '...';
    }
  }
  }
  //  Функция выпадающего окна
  function hidden () {
  dropDownWindow.classList.toggle('dropdown__window_hidden');
  }
  function hiddenOnDocument (event) {
  if ( event.target !== mainInput  && !event.target.matches('[data-window] *') ) {
    dropDownWindow.classList.remove('dropdown__window_hidden');
  }
  }
  function addBorder () {
  if (mainInputDataBorder) {
    mainInputDataBorder.classList.toggle('dropdown__input_border');
  }
  }
  function addwindowBorder (event) {
  if ( event.target !== mainInput  && !event.target.matches('[data-window] *') ) {
    if (mainInputDataBorder) {
    mainInputDataBorder.classList.remove('dropdown__input_border');
    }
  }
  }

  //  Обработчики события выпадающего окна
  mainInput.addEventListener('click', hidden);
  mainInputDataBorder.addEventListener('click', addBorder);
  window.addEventListener('click', addwindowBorder);
  window.addEventListener('click', hiddenOnDocument);
}