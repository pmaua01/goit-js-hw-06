console.log('Задание 9');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const color = getRandomHexColor();

const bodyChangeColorEl = document.body;

const buttonChangeColorElement = document.querySelector('.change-color');

const bodyColorEl = document.querySelector('.color');

buttonChangeColorElement.addEventListener('click', onButtonChangeColor);

function onButtonChangeColor(event) {
  bodyChangeColorEl.style.backgroundColor = color;
  bodyColorEl.textContent = color;
}
