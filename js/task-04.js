let counterValue = 0;

const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  valueEl: document.querySelector("#value"),
};

refs.decrementBtn.addEventListener("click", onDecrementBtn);
refs.incrementBtn.addEventListener("click", onIncrementBtn);

function onDecrementBtn() {
  counterValue -= 1;
  refs.valueEl.textContent = counterValue;
}

function onIncrementBtn() {
  counterValue += 1;
  refs.valueEl.textContent = counterValue;
}
