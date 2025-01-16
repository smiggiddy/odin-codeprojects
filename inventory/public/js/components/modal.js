import { categoryPicker, storePicker } from "./selectComponent.js";

function formInput(props) {
  const formItemDiv = document.createElement("div");
  formItemDiv.classList.add("form-item");
  const input = document.createElement("input");
  input.name = props.name;
  const label = document.createElement("label");
  label.textContent = props.labelText;
  formItemDiv.append(label, input);

  return formItemDiv;
}

async function modal() {
  const div = document.createElement("div");
  div.classList.add("modal");
  div.style = `
    display: none;
    positino: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 50vh;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
  `;

  const form = document.createElement("form");
  form.method = "POST";
  form.action = "/item";
  const name = formInput({ labelText: "Name", name: "name" });
  const price = formInput({ labelText: "Price", name: "price" });
  const qty = formInput({ labelText: "QTY", name: "qty" });

  const categories = await categoryPicker();
  const stores = await storePicker();

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.classList.add("btn");
  submitButton.textContent = "Add Item";

  const closeButton = document.createElement("button");
  closeButton.textContent = "Close";
  closeButton.addEventListener("click", () => {
    div.style.display = "none";
  });

  form.append(name, price, qty, categories, stores, submitButton, closeButton);
  div.append(form);

  return div;
}

export { modal };
