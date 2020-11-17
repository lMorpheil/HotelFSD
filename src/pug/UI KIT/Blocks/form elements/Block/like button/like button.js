const like = document.querySelectorAll('.likebutton');

for (let i = 0; i < like.length; i++) {
    const element = array[i];
    
}

//-----функции обработчика события----------
function likeButton () {
    this.classList.toggle('likebutton_onclick');
    let count = like.value;
    if (this.classList.contains('likebutton_onclick')) {
        like.value = +count + 1;
    } else {
        like.value = +count - 1;
    }
}

//-----------Обработчик события-----------
like.addEventListener('click', likeButton);
