const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const emailForm = form.elements.email.value;
  const passwordForm = form.elements.password.value;
  const objValue = {
    Email: emailForm,
    Password: passwordForm,
  };

  if (emailForm === "" || passwordForm === "") {
    alert("Please fill in all the fields!");
    return;
  }
  console.log(objValue);
  form.reset();
}
