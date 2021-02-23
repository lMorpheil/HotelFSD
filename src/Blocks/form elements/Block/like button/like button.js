const like = document.querySelectorAll('.likebutton');

for (let i = 0; i < like.length; i++) {
    const element = like[i];
    //-----функция обработчика события----------
    let likeButton = function  () {
        this.classList.toggle('likebutton_onclick');
        let count = this.value;
        if (this.classList.contains('likebutton_onclick')) {
            this.value = +count + 1;
        } else {
            this.value = +count - 1;
        }
    };
    element.addEventListener('click', likeButton); //Обработчик события элементов массива
}






