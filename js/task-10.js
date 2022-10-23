function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const box = document.querySelector("#boxes");
const onClickAdd = document.querySelector("[data-create]");
onClickAdd.addEventListener("click", funcAdd);
const onClickRemove = document.querySelector("[data-destroy]");
onClickRemove.addEventListener("click", funcRemove);
const contEl = document.querySelector("#controls input");
const boxPar = {
  width: 30,
  height: 30,
};
function funcAdd() {
  for (let i = 0; i < contEl.value; i += 1) {
    const elToAd = document.createElement("div");
    elToAd.style.width = `${String(boxPar.width)}px`;
    elToAd.style.height = `${String(boxPar.height)}px`;
    elToAd.style.backgroundColor = getRandomHexColor();
    elToAd.classList.add("boxes__box");
    box.append(elToAd);
    boxPar.width += 10;
    boxPar.height += 10;
  }
}
function funcRemove() {
  const elToRemove = document.querySelectorAll(".boxes__box");
  elToRemove.forEach((el) => {
    el.remove();
  });
  boxPar.width = 30;
  boxPar.height = 30;
}
