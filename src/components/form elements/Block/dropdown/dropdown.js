const dropdown = document.querySelectorAll('.dropdown');

for (let i = 0; i < dropdown.length; i++) {
  const element = dropdown[i];

  const minus = element.querySelectorAll('.dropdown__minus');
  const plus = element.querySelectorAll('.dropdown__plus');
  const input = Array.from(element.querySelectorAll('.dropdown__number'));
  const mainInput = element.querySelector('.dropdown__input');
  const dropDownWindow = element.querySelector('.dropdown__window');
  const label = element.querySelector('.dropdown__label');
  const mainInputDataBorder = element.querySelector('input[data-border]');
  const clear = Array.from(document.querySelectorAll('.dropdown .clear'));
  const apply = Array.from(document.querySelectorAll('.dropdown .apply'));
  //  Работа с главным окном Input
  const getValue = function () {
    if (label.innerHTML === 'Взрослые') {
      const summa = +input[0].value + +input[1].value;
      let baby;
      switch (+input[2].value) {
      case (0):
        baby = '';
        break;
      case (1):
        baby = `${input[2].value} младенец`;
        break;
      case (2):
      case (3):
      case (4):
        baby = `${input[2].value} младенца`;
        break;
      default:
        baby = `${input[2].value} младенцев`;
      }
      switch (summa) {
      case (0):
        mainInput.value = `Сколько гостей ${baby}`;
        break;
      case (1):
        mainInput.value = `${summa} гость,${baby}`;
        break;
      case (2):
      case (3):
      case (4):
        mainInput.value = `${summa} гостя,${baby}`;
        break;
      default:
        mainInput.value = `${summa} гостей,${baby}`;
      }
    } else {
      mainInput.value = `${input[0].value} спальни, ${input[1].value} кровати, ${input[2].value} ванны`;
      if (mainInput.value.length > 20) {
        mainInput.value = `${mainInput.value.substr(0, 20)}...`;
      }
    }
  };
  getValue();
  //  Задаём значение input если значение не задано
  for (let j = 0; j < input.length; j++) {
    if (input[j].value === '') {
      input[j].value = 0;
    }
  }
  for (let k = 0; k < minus.length; k++) {
  //  Функции обработчика событий нажатия на кнопки minus
    const negative = function () {
      if (input[k].value > 0) {
        input[k].value -= 1;
      }
    };
    //  Обработчики событий кнопок minus
    minus[k].addEventListener('click', negative);
    minus[k].addEventListener('click', getValue);
  }
  for (let l = 0; l < plus.length; l++) {
    //  Функции обработчика событий нажатия на кнопки plus
    const sum = function () {
      input[l].value = +input[l].value + 1;
    };
    // Обработчики событий кнопок plus
    plus[l].addEventListener('click', sum);
    plus[l].addEventListener('click', getValue);
  }
  //  Функция выпадающего окна
  const hidden = function () {
    dropDownWindow.classList.toggle('dropdown__window_hidden');
  };
  const hiddenOnDocument = function (event) {
    const result = event.target !== mainInput && !event.target.matches('[data-window] *');
    if (result) {
      dropDownWindow.classList.remove('dropdown__window_hidden');
    }
  };
  const addBorder = function () {
    if (mainInputDataBorder) {
      mainInputDataBorder.classList.toggle('dropdown__input_border');
    }
  };
  const addWindowBorder = function (event) {
    const result = event.target !== mainInput && !event.target.matches('[data-window] *');
    if (result) {
      if (mainInputDataBorder) {
        mainInputDataBorder.classList.remove('dropdown__input_border');
      }
    }
  };
  //  Обработчики события выпадающего окна
  mainInput.addEventListener('click', hidden);
  mainInputDataBorder.addEventListener('click', addBorder);
  window.addEventListener('click', addWindowBorder);
  window.addEventListener('click', hiddenOnDocument);
  //  Работа с кнопками
  //  Обработчик кнопки apply
  const handleHiddenDropdown = function () {
    dropDownWindow.classList.remove('dropdown__window_hidden');
  };
  apply.forEach((applyButton) => {
    applyButton.addEventListener('click', handleHiddenDropdown);
  });
  //  Обработчики кнопки clear
  const handleClearInputClear = function () {
    input.forEach((elem) => {
      elem.value = 0;
    });
  };
  const handleClearMainInputClear = function (event) {
    const parent = event.target.closest('.dropdown');
    const changeInput = parent.querySelector('.dropdown__input');
    if (label.innerHTML === 'Взрослые') {
      changeInput.value = 'Сколько гостей';
    } else {
      changeInput.value = 'Удобства';
    }
  };
  clear.forEach((clearButton) => {
    clearButton.addEventListener('click', handleClearInputClear);
    clearButton.addEventListener('click', handleClearMainInputClear);
  });
}
