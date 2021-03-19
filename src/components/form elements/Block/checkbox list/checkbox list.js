const checkLists = Array.from(document.querySelectorAll('.checkboxlist'));
checkLists.forEach((element) => {
  const list = element.querySelector('.checkboxlist__listwrapper');
  const icon = element.querySelector('.checkboxlist__titlewrapper');
  const handleShowCheckboxlist = function () {
    list.classList.toggle('checkboxlist__listwrapper_onclick');
    icon.classList.toggle('checkboxlist__titlewrapper_onclick');
  };
  const handleHiddenCheckboxlist = function (event) {
    const result = event.target !== element && !event.target.matches('[data-hidden]') && !event.target.matches('[class^=checkbox]');
    if (result) {
      list.classList.remove('checkboxlist__listwrapper_onclick');
      icon.classList.remove('checkboxlist__titlewrapper_onclick');
    }
  };
  element.addEventListener('click', handleShowCheckboxlist);
  window.addEventListener('click', handleHiddenCheckboxlist);
});
