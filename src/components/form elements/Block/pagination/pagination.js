const ul = document.querySelector('.pagination');
console.log(ul)
const countItems = ul.dataset.items;

for (let i = 0; i < countItems; i++) {
  let li = document.createElement('li');
  let a = document.createElement('a');

  li.classList.add('pagination__items');
  a.href = '#';
  a.innerHTML = i + 1;
  ul.append(li);
  li.append(a);
}

let li = document.querySelectorAll('.pagination__items');

li.forEach((element, item) => {
  if (item == 0) {
    element.classList.add('pagination__items_activ');
  } else if (item == 1 || item == 2 ) {

  } else if (item == (countItems - 1) ) {
    element.classList.add('pagination__items_arrow');
  } else if (item == (countItems - 2) ) {
    element.innerHTML = '...';
  } else {
    element.classList.add('pagination__items_ellipsis');
  }
});

function pagination () {
  let items = this.target || 0;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
  }
}
let elem = document.querySelector('.pagination__button');
elem.addEventListener('click', pagination);