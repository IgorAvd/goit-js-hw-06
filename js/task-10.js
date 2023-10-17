function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  inputEl: document.querySelector("#controls input"),
  boxesContainer: document.querySelector("#boxes"),
};

let size = 30;

refs.createBtn.addEventListener("click", () => {
  createBoxes(refs.inputEl.value);
});

refs.destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");
    divEl.style.height = size + "px";
    divEl.style.width = size + "px";
    divEl.style.backgroundColor = getRandomHexColor();
    size += 10;
    refs.boxesContainer.append(divEl);
  }
}

function destroyBoxes() {
  refs.boxesContainer.remove();
}
