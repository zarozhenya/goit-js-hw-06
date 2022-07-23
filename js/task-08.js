const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", (event) => {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (email.value === "" || password.value === "") {
    alert("All fields must be filled");
  } else {
    const fieldsObj = {
      email: email.value,
      password: password.value,
    };
    console.log(fieldsObj);
    event.currentTarget.reset();
  }
});
