let checkList = document.querySelectorAll('.checkboxlist');
let list = document.querySelectorAll('.checkboxlist__listwrapper');
let iconDrop = document.querySelectorAll('.checkboxlist__titlewrapper');

for (let i = 0; i < checkList.length; i++) {
    const element = checkList[i];
    const elem = list[i];
    const icon = iconDrop[i];
    let showList = function () {
        elem.classList.toggle('checkboxlist__listwrapper_onclick');
        icon.classList.toggle('checkboxlist__titlewrapper_onclick');
    };   

    let hiddenList = function (event) {
        if ( event.target !== element  && !event.target.matches('[data-hidden]') && !event.target.matches('[class^=checkbox]') ) {
            console.log(event.target)
            elem.classList.remove('checkboxlist__listwrapper_onclick');
            icon.classList.remove('checkboxlist__titlewrapper_onclick');
        }
    };
    element.addEventListener('click', showList);
    window.addEventListener('click', hiddenList);
}