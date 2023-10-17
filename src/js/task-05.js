const refs = {
  textInput: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

refs.textInput.addEventListener("input", changeOutputText);

function changeOutputText(event) {
  if (refs.textInput.value === "") {
    refs.output.textContent = "Anonymous";
  } else {
    refs.output.textContent = event.currentTarget.value;
  }
}
