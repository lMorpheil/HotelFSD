let rates = document.querySelectorAll('.ratebutton');

for (let i = 0; i < rates.length; i++) {

    let item = rates[i];
    let star = item.querySelectorAll('.ratebutton__button');
    let data = item.dataset.ratebutton;
    
    //Начальные параметры рейтинга
    for (let i = 0; i < data ; i++) {
        const element = star[i];
        element.classList.add('ratebutton__button_active');
    }   
    //обработка события
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
}


