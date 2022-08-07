console.log("Задание 6");

const inputFormCheckEl = document.querySelector("#validation-input");

inputFormCheckEl.addEventListener("blur", onBlurFocus);

function onBlurFocus(event) {
  inputFormCheckEl.classList.add("invalid");
  if (
    event.currentTarget.value.length ===
    Number(inputFormCheckEl.getAttribute("data-length"))
  ) {
    inputFormCheckEl.classList.remove("invalid");
    inputFormCheckEl.classList.add("valid");
  }
}
