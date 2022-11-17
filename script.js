const open = document.querySelector(".open");
const close = document.querySelector(".close");
const forUL = document.querySelector(".forUL");

open.addEventListener("click", () => {
  forUL.style.right = "0px";
});
close.addEventListener("click", () => {
  forUL.style.right = "-300px";
});
