console.log("Задание 8");

const loginFormEl = document.querySelector(".login-form");

loginFormEl.addEventListener("submit", onLoginForm);

function onLoginForm(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email === "" || password === "") {
    return alert("Все поля должны быть заполнены!");
  }
  const dataForm = {
    email,
    password,
  };

  console.log(dataForm);
}
