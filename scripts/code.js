document.styleSheets[4].disabled = true;

let hamburger = document.querySelector(".fas.fa-bars");
let hamburgerX = document.querySelector(".fas.fa-times");

window.addEventListener("resize", function () {
  if (window.outerWidth > 1290) {
    document.styleSheets[4].disabled = true;
    document.styleSheets[3].disabled = false;
    document.styleSheets[2].disabled = false;
  }
});

hamburger.addEventListener("click", function () {
  document.styleSheets[4].disabled = false;
  document.styleSheets[3].disabled = true;
  document.styleSheets[2].disabled = true;
});
hamburgerX.addEventListener("click", function () {
  document.styleSheets[4].disabled = true;
  document.styleSheets[3].disabled = false;
  document.styleSheets[2].disabled = false;
});
