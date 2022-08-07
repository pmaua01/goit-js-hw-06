console.log("Задание 5");

const inputFormEl = document.querySelector("#name-input");

const outputFormEl = document.querySelector("#name-output");

inputFormEl.addEventListener("input", OnInputForm);

function OnInputForm(event) {
  if (event.currentTarget.value === "") {
    return (outputFormEl.textContent = "Anonymous");
  }
  outputFormEl.textContent = event.currentTarget.value;
}
