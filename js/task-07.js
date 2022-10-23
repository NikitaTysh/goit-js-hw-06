const textEl = document.querySelector("#text");
const controlSize = document.querySelector("#font-size-control");
console.log(controlSize.value);
controlSize.addEventListener("input", () => {
  textEl.style.fontSize = `${controlSize.value}px`;
});
