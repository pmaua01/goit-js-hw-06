console.log("Задание 2");
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = ingredients.map((element) => {
  const newListEl = document.createElement("li");
  newListEl.textContent = element;
  newListEl.classList.add("item");

  return newListEl;
});

const ingrediensMarkupEl = document.querySelector("#ingredients");

ingrediensMarkupEl.append(...ingredientsEl);
