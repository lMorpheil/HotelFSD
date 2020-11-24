let ul = document.querySelector('.pagination__list');
let countItems = ul.dataset.items;

for (let i = 0; i <= countItems; i++) {
    let li = document.createElement('li');
    let a = document.createElement('a');

    li.classList.add('pagination__items');
    a.href = "#";
    a.innerHTML = i;
    ul.append(li);
    li.append(a);
}

let li = document.querySelectorAll('.pagination__items');

li.forEach((element, item) => {
    if (item == 0) {
        element.classList.add('pagination__items_activ');
    } else if ( item == 1 || item == 2 ) {

    } else if ( item == 15 ) {

    } else if ( item == 14 ) {
        element.innerHTML = "...";
    } else {
        element.classList.add('pagination__items_ellipsis')
    }
});
