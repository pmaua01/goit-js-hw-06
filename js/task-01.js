console.log("Задание 1");
const listEl = document.querySelector("ul");
const arrayListEl = listEl.children.length;
console.log(`Number of categories:${arrayListEl}`);

const titleEl = document.querySelectorAll(".item");

titleEl.forEach((element) => {
  const titileForEchEl = element.querySelector("h2").textContent;
  const totalForEchEl = element.querySelector("ul").children.length;
  console.log(`Category:${titileForEchEl}`);
  console.log(`Elements:${totalForEchEl}`);
});
