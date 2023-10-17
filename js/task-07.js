const inputEl = document.querySelector("#font-size-control");
const spanElText = document.querySelector("#text");

inputEl.addEventListener("input", () => {
  spanElText.style.fontSize = inputEl.value + "px";
});
