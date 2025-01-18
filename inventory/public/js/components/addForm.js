function addForm() {
  let buttonClicked = true;
  const addForm = document.querySelector(".add-form");
  const button = document.querySelector(".add-btn");

  button.addEventListener("click", () => {
    buttonClicked
      ? (addForm.style.display = " block")
      : (addForm.style.display = "none");
    buttonClicked = !buttonClicked;
  });
}

export { addForm };
