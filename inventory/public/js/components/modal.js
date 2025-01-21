import { categoryPicker, storePicker } from "./selectComponent.js";

function formInput(props) {
  const formItemDiv = document.createElement("div");
  formItemDiv.classList.add("form-item");
  const input = document.createElement("input");
  input.name = props.name;
  input.required = true;
  input.type = props.type;
  if (props.type === "number") input.step = "0.01";
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
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(15px);
  `;

  const form = document.createElement("form");
  form.method = "POST";
  form.action = "/item";
  const name = formInput({ labelText: "name", name: "name", type: "text" });
  const price = formInput({
    labelText: "price",
    name: "price",
    type: "number",
  });
  const qty = formInput({ labelText: "qty", name: "qty", type: "number" });

  const categories = await categoryPicker();
  const stores = await storePicker();

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.classList.add("btn");
  submitButton.textContent = "Add Item";

  const closeButton = document.createElement("button");
  closeButton.classList.add("btn");
  closeButton.textContent = "Close";
  closeButton.type = "button";
  closeButton.addEventListener("click", () => {
    div.style.display = "none";
  });

  const btns = document.createElement("div");
  btns.classList.add("form-item");
  btns.style.flexDirection = "row";
  btns.append(submitButton, closeButton);

  form.append(name, price, qty, categories, stores, btns);
  div.append(form);

  return div;
}

export { modal };
