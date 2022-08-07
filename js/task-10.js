function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

console.log("Задание 10");

const buttonCreateEl = document.querySelector(`[data-create]`);
const buttonDestroyEl = document.querySelector(`[data-destroy]`);
const divBoxesEl = document.querySelector("#boxes");

buttonCreateEl.addEventListener("click", getValue);

buttonDestroyEl.addEventListener("click", Destroy);

function getValue() {
  let getAmount = Number(document.querySelector("#controls input").value);
  console.log(getAmount);
  createBoxes(getAmount);
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement("div");
    const basicWidth = 30;
    const basicHeight = 30;
    newDiv.style.width = `${basicWidth + i * 10}px`;
    newDiv.style.height = `${basicHeight + i * 10}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    console.log(newDiv);
    divBoxesEl.append(newDiv);
  }
}

function Destroy() {
  divBoxesEl.innerHTML = "";
}
