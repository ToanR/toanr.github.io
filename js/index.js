function run(interval) {
  var int = 0;
  var increase = true;
  var headerImg = document.querySelector(".header__img");
  function func() {
    console.log(int);
    headerImg.style.filter = `saturate(${int}%)`;
    if (increase) {
      int += 50;
    } else {
      int -= 50;
    }
    if (int === 100) {
      increase = false;
    }
    if (int === 0) {
      increase = true;
    }
  }
  var swap = window.setInterval(func, interval);
}

run(5000);
