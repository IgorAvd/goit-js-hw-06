const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", () => {
  const dataLengthValue = inputEl.getAttribute("data-length");
  const inputValue = inputEl.value.length;
  inputEl.classList.remove("valid", "invalid");

  if (parseInt(dataLengthValue) === inputValue) {
    inputEl.classList.add("valid");
  } else if (inputValue === 0) {
    inputEl.classList.remove("valid");
  } else {
    inputEl.classList.add("invalid");
  }
});
