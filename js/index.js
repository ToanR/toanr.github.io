function run(interval, frames) {
  var int = 1;
  var headerImg = document.querySelector(".header__img");

  function func() {
    headerImg.style.backgroundImage = `url('../img/image-${int}.jpg')`;

    int++;
    if (int === frames) {
      int = 1;
    }
  }
  var swap = window.setInterval(func, interval);
}

run(10000, 3);
