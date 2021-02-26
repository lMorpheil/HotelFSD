let slider = document.querySelectorAll('.room__slider');

for (let i = 0; i < slider.length; i++) {
    let images = slider[i].querySelectorAll('.room__image');
    let slides = [];
    for (let j = 0; j < images.length; j++) {
        slides[j] = images[j].src;
        images[j].remove();
    }
    let step = 0;
    let offset = 0;
    function draw () {
        let img = document.createElement('img');
        img.src = slides[step];
        img.classList.add('room__image');
        img.style.left = offset*270 + 'px';
        slider[i].appendChild(img);
        
        if (step == slides.length - 1) {
            step = 0;
        } else {
            step++;
        }
        offset = 1;
    }
    function move() {
        let slidesView = slider[i].querySelectorAll('.room__image');
        let offsetView = 0;
        for (let k = 0; k < slidesView.length; k++) {
            slidesView[k].style.left = offsetView*270 - 270 + 'px';
            offsetView++;    
        }
        setInterval(() => {
            slidesView[0].remove();
        }, 2000);
        
        draw();
    }
    draw();
    draw();
    let timerMove = setInterval(move, 1000);
    
}

