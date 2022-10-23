const form = document.querySelector(".login-form");
const inputMail = form.querySelector('[name="email"]');
const inputPass = form.querySelector('[name="password"]');
const mqail = inputMail.getAttribute("name");
const pass = inputPass.getAttribute("name");
form.addEventListener("submit", func);
function func(evt) {
  let flag = false; //для ментор -> не придумал другого способоа , потому что перервать foreach нельщзя
  evt.preventDefault();
  const formEl = new FormData(evt.currentTarget);
  formEl.forEach((el) => {
    if (el === "") {
      flag = true;
    }
  });
  if (flag) {
    alert("все поля должны быть заполнены");
  } else {
    const obj = {};
    obj[mqail] = evt.currentTarget.elements.email.value;
    obj[pass] = evt.currentTarget.elements.password.value;
    console.log(obj);
    evt.target.reset();
  }
}
