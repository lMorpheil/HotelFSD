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
  } else if (item === 1 || item === 2) {
    // Условие при котором не чего не нужно делать
  } else if (item === (countItems - 1)) {
    element.classList.add('pagination__items_arrow');
  } else if (item === (countItems - 2)) {
    element.innerHTML = '...';
  } else {
    element.classList.add('pagination__items_ellipsis');
  }
});

function pagination() {
  let items = this.target || 0;
  for (let i = 0; i < li.length; i++) {
    console.log(li.length)
  }
}
let elem = document.querySelector('.pagination__button');
elem.addEventListener('click', pagination);