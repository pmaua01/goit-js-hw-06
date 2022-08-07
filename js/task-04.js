console.log("Задание 4");
let counterValue = 0;

const buttonDecrementEl = document.querySelector(`[data-action="decrement"]`);
const buttonIncrementEl = document.querySelector(`[data-action="increment"]`);
const counterValueEl = document.querySelector("#value");

buttonDecrementEl.addEventListener("click", onButtonDecrement);

function onButtonDecrement() {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
}

buttonIncrementEl.addEventListener("click", onButtonIncrementEl);

function onButtonIncrementEl() {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
}
