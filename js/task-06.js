const inputRef = document.querySelector("#validation-input");
inputRef.addEventListener("blur", (event) => {
  const {
    classList,
    value,
    dataset: { length },
  } = event.currentTarget;
  classList.remove("valid", "invalid");
  if (value.length === Number(length)) {
    classList.add("valid");
  } else {
    classList.add("invalid");
  }
});
