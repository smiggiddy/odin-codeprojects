function addForm() {
  let buttonClicked = true;
  const addFormClass = document.querySelector(".add-form");

  if (addFormClass != null) {
    const button = document.querySelector(".add-btn");

    button.addEventListener("click", () => {
      buttonClicked
        ? (addFormClass.style.display = " block")
        : (addFormClass.style.display = "none");
      buttonClicked = !buttonClicked;
    });
  }
}

export { addForm };
