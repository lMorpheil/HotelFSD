const ul = document.querySelector('.pagination__list');
const countItems = ul.dataset.items;
for (let i = 0; i < countItems; i++) {
  const li = document.createElement('li');
  li.classList.add('pagination__items');
  li.innerHTML = i + 1;
  ul.append(li);
}
const li = document.querySelectorAll('.pagination__items');
li.forEach((element, item) => {
  if (item === 0) {
    element.classList.add('pagination__items_active');
  }
});
function checkState() {
  for (let item = 0; item < li.length; item++) {
    const active = li[item].matches('.pagination__items_active');
    if (active) {
      //  Если активен первый элемент
      if (item === 0) {
        li.forEach((element, items, pages) => {
          const id = items === 0 || items === 1 || items === 2 || items === pages.length - 1;
          if (id) {
            pages[0].classList.remove('pagination__items_transform');
          } else if (items === pages.length - 2) {
            element.innerHTML = '...';
          } else {
            element.classList.add('pagination__items_hidden_true');
          }
        });
        //  Если активен последний элемент
      } else if (item === li.length - 1) {
        li.forEach((element, items, pages) => {
          const id = (items === pages.length - 2 || items === pages.length - 3);
          if (id) {
            element.classList.remove('pagination__items_hidden_true');
            element.innerHTML = items + 1;
          } else if (items === 0) {
            element.classList.remove('pagination__items_hidden_true');
            element.classList.add('pagination__items_transform');
            element.innerHTML = '';
          } else if (items === 1) {
            element.classList.remove('pagination__items_hidden_true');
            element.innerHTML = '...';
          } else if (items === li.length - 1) {
            element.innerHTML = items + 1;
          } else {
            element.classList.add('pagination__items_hidden_true');
          }
        });
        //  Если активный элемент находится внутри
      } else {
        li.forEach((element, items, pages) => {
          const id = element.matches('.pagination__items_active');
          const nextSiblingId = (pages[items - 1] != null && pages[items - 1] !== undefined) ? pages[items - 1].matches('.pagination__items_active') : false;
          if (id) {
            pages[items].classList.remove('pagination__items_hidden_true');
            pages[items].innerHTML = items + 1;
            pages[items - 1].classList.remove('pagination__items_hidden_true');
            pages[items - 1].innerHTML = items;
          } else if (nextSiblingId) {
            pages[items].classList.remove('pagination__items_hidden_true');
            pages[items].innerHTML = items + 1;
          } else if (items === li.length - 2) {
            pages[items].innerHTML = '...';
          } else if (items === 0 && !pages[items + 1].matches('.pagination__items_active')) {
            element.classList.remove('pagination__items_hidden_true');
            element.classList.add('pagination__items_transform');
            element.innerHTML = '';
          } else if (items === li.length - 1) {
            element.classList.remove('pagination__items_hidden_true');
          } else {
            element.classList.add('pagination__items_hidden_true');
          }
        });
      }
    }
  }
}
checkState();
// Обработчик события кнопки вперёд
function handleMovePaginationButton() {
  for (let i = 0; i < li.length; i++) {
    if (i === li.length - 1) {
      checkState();
      break;
    } else if (li[i].matches('.pagination__items_active')) {
      li[i].classList.remove('pagination__items_active');
      li[i + 1].classList.add('pagination__items_active');
      checkState();
      break;
    }
  }
}
const paginationButton = document.querySelector('.pagination__button');
paginationButton.addEventListener('click', handleMovePaginationButton);
//  Обработчик кнопки влево
function handleMoveLeftPaginationButton() {
  for (let i = li.length - 1; i >= 0; i--) {
    if (i === 0) {
      checkState();
      break;
    } else if (li[i].matches('.pagination__items_active')) {
      li[i].classList.remove('pagination__items_active');
      li[i - 1].classList.add('pagination__items_active');
      checkState();
      break;
    }
  }
}
const paginationButtonLeft = li[0];
paginationButtonLeft.addEventListener('click', handleMoveLeftPaginationButton);
