var typed = new Typed("#typed", {
  stringsElement: "#typed-strings",
  typeSpeed: 90,
  backSpeed: 80,
  backDelay: 1500,
  loop: true,
  loopCount: 0,
  showCursor: true,
  cursorChar: "|"
});

function run(interval, frames) {
  var int = 1;
  var headerImg = document.querySelector(".header__img");
  console.log(headerImg);
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
