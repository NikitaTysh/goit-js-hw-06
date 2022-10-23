const btnDecr = document.querySelector('[data-action="decrement"]');
const btnIncr = document.querySelector('[data-action="increment"]');
const value = document.querySelector("#value");
let valueNum = Number(value.textContent);
btnDecr.addEventListener("click", decrFunc);
btnIncr.addEventListener("click", incrFunc);
function decrFunc() {
  valueNum -= 1;
  value.textContent = valueNum;
}
function incrFunc() {
  valueNum += 1;
  value.textContent = valueNum;
}
