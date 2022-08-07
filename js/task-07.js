console.log("Задание 7");

const fontSizeEl = document.querySelector("#font-size-control");

const outputTextSizeEl = document.querySelector("#text");

fontSizeEl.addEventListener("input", onFontSizeChange);

function onFontSizeChange(event) {
  outputTextSizeEl.style.fontSize = `${event.currentTarget.value}px`;
}
