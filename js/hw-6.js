console.log('hw-6');
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
console.log('Задание 1');
const listEl = document.querySelector('ul');
const arrayListEl = listEl.children.length;
console.log(`Number of categories:${arrayListEl}`);

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).

const titleEl = document.querySelectorAll('.item');

titleEl.forEach(element => {
  const titileForEchEl = element.querySelector('h2').textContent;
  const totalForEchEl = element.querySelector('ul').children.length;
  console.log(`Category:${titileForEchEl}`);
  console.log(`Elements:${totalForEchEl}`);
});
// Напиши скрипт, который для каждого элемента массива ingredients:
console.log('Задание 2');
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = ingredients.map(element => {
  const newListEl = document.createElement('li');
  newListEl.textContent = element;
  newListEl.classList.add('item');

  return newListEl;
});

const ingrediensMarkupEl = document.querySelector('#ingredients');

ingrediensMarkupEl.append(...ingredientsEl);

// Напиши скрипт для создания галереи изображений по массиву данных. В HTML есть список ul.gallery.
console.log('Задание 3');
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imgEl = images
  .map(
    ({ url, alt }) =>
      `<li class="gallery__item"><img src=${url} alt=${alt}></li>`,
  )
  .join('');

const galleryEl = document.querySelector('.gallery');
galleryEl.classList.add('gallery__flex');

galleryEl.insertAdjacentHTML('afterbegin', imgEl);

//Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.
console.log('Задание 4');
let counterValue = 0;

const buttonDecrementEl = document.querySelector(`[data-action="decrement"]`);
const buttonIncrementEl = document.querySelector(`[data-action="increment"]`);
const counterValueEl = document.querySelector('#value');

buttonDecrementEl.addEventListener('click', onButtonDecrement);

function onButtonDecrement() {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
}

buttonIncrementEl.addEventListener('click', onButtonIncrementEl);

function onButtonIncrementEl() {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
}
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".
console.log('Задание 5');

const inputFormEl = document.querySelector('#name-input');

const outputFormEl = document.querySelector('#name-output');

inputFormEl.addEventListener('input', OnInputForm);

function OnInputForm(event) {
  outputFormEl.textContent = event.currentTarget.value;
}

// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

console.log('Задание 6');

const inputFormCheckEl = document.querySelector('#validation-input');

inputFormCheckEl.addEventListener('blur', onBlurFocus);

function onBlurFocus(event) {
  if (
    event.currentTarget.value.length ===
    Number(inputFormCheckEl.getAttribute('data-length'))
  ) {
    return inputFormCheckEl.classList.add('valid');
  }
  inputFormCheckEl.classList.add('invalid');
}

// ex 7
console.log('Задание 7');

const fontSizeEl = document.querySelector('#font-size-control');

const outputTextSizeEl = document.querySelector('#text');

fontSizeEl.addEventListener('input', onFontSizeChange);

function onFontSizeChange(event) {
  outputTextSizeEl.style.fontSize = `${event.currentTarget.value}px`;
}

// ex8
console.log('Задание 8');

const loginFormEl = document.querySelector('.login-form');

loginFormEl.addEventListener('submit', onLoginForm);

function onLoginForm(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email === '' || password === '') {
    return alert('Все поля должны быть заполнены!');
  }
  const dataForm = {
    email,
    password,
  };
}

// ex 9
console.log('Задание 9');
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyChangeColorEl = document.body;

const buttonChangeColorElement = document.querySelector('.change-color');

buttonChangeColorElement.addEventListener('click', onButtonChangeColor);

function onButtonChangeColor(event) {
  bodyChangeColorEl.style.backgroundColor = getRandomHexColor();
}

// ex10
console.log('Задание 10');

const buttonCreateEl = document.querySelector(`[data-create]`);
const buttonDestroyEl = document.querySelector(`[data-destroy]`);
const divBoxesEl = document.querySelector('#boxes');

buttonCreateEl.addEventListener('click', getValue);

buttonDestroyEl.addEventListener('click', Destroy);

function getValue() {
  let getAmount = Number(document.querySelector('#controls input').value);
  console.log(getAmount);
  createBoxes(getAmount);
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement('div');
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
  divBoxesEl.innerHTML = '';
}
