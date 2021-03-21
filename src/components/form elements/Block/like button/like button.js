const likes = Array.from(document.querySelectorAll('.likebutton'));
//  функция обработчик события
function likeButton(event) {
  const count = event.currentTarget.value;
  event.currentTarget.classList.toggle('likebutton_onclick');
  if (event.currentTarget.classList.contains('likebutton_onclick')) {
    event.currentTarget.value = +count + 1;
  } else {
    event.currentTarget.value = +count - 1;
  }
}
likes.forEach((element) => {
  element.addEventListener('click', likeButton);
});
