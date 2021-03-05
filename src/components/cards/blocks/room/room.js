const slider = document.querySelectorAll('.room__slider');

for (let i = 0; i < slider.length; i++) {
  const images = slider[i].querySelectorAll('.room__image');
  const items = slider[i].querySelectorAll('.room__item');
  const slides = [];
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
  function itemMove() {
    for (let z = 0; z <= items.length - 1; z++) {
      if (items[z].classList.contains('room__item_active')) {
        items[z].classList.remove('room__item_active');
        if (z == items.lenght - 1) {
          z = 0;
          items[z].classList.add('room__item_active');
        } else {
          items[++z].classList.add('room__item_active');
        }
      }
    }
  }
  function move() {
    let slidesView = slider[i].querySelectorAll('.room__image');
    let offsetView = 0;
    for (let k = 0; k < slidesView.length; k++) {
      slidesView[k].style.left = offsetView * 270 - 270 + 'px';
      offsetView++;
    }
    itemMove();
    setInterval(() => {
      slidesView[0].remove();
    }, 1000);
    draw();
  }
  draw();
  draw();
  let timerMove = setInterval(move, 2000);
}