let star = document.querySelectorAll('.ratebutton__button');


for (let i = 0; i < star.length; i++) {
    const element = star[i];
    let over = function () {
        for (let j = 0; j <= i; j++) {
            const elemPlus = star[j];
            elemPlus.classList.add('ratebutton__button_active');
        }
        for (let k = star.length - 1; k > i ; k--) {
            const elemMinus = star[k];
            if ( elemMinus.classList.contains('ratebutton__button_active') ) {
                elemMinus.classList.remove('ratebutton__button_active');
            }
        } 
    };
    element.addEventListener('click', over);
}