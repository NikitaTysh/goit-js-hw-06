function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btn = document.querySelector(".change-color");
const backGrnd = document.querySelector("body");
const text = document.querySelector(".color");
let color;
btn.addEventListener("click", chageColor);
function chageColor() {
  color = getRandomHexColor();
  backGrnd.style.backgroundColor = color;
  text.textContent = color;
}
