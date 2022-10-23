const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", func);
function func(evt) {
  output.textContent = evt.currentTarget.value;
  if (evt.currentTarget.value === "") {
    output.textContent = "Anonymous";
  }
}
