const grayHeart = document.querySelector(".gray-heart");
const redHeart = document.querySelector(".red-heart");
const clickMe = document.querySelector(".click")

grayHeart.addEventListener("click", () => {
  redHeart.classList.add("animation");
  grayHeart.classList.add("fill-color");
  clickMe.classList.add("click-js")
});

redHeart.addEventListener("click", () => {
  redHeart.classList.remove("animation");
  grayHeart.classList.remove("fill-color");
  clickMe.classList.remove("click-js")
});