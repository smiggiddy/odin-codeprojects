async function getData(path) {
  const categories = await fetch(`/${path}`);
  return await categories.json();
}

function selectComponent(data, select) {
  data.forEach((opt) => {
    const option = document.createElement("option");
    option.value = opt.name;
    option.textContent = opt.name;
    select.append(option);
  });
}

async function categoryPicker() {
  const selectQuery = document.querySelector(".categories-list-modal");
  if (selectQuery) document.body.remove(selectQuery);

  const categories = await getData("categories");

  const formItemDiv = document.createElement("div");
  formItemDiv.classList.add("form-item");

  const formLabel = document.createElement("label");
  formLabel.textContent = "categories";

  const select = document.createElement("select");
  select.classList.add("categories-list-modal");
  select.name = "category";

  selectComponent(categories, select);

  formItemDiv.append(formLabel, select);
  return formItemDiv;
}

async function storePicker() {
  const selectQuery = document.querySelector(".store-list-modal");
  if (selectQuery) document.body.remove(selectQuery);

  const stores = await getData("stores");

  const formItemDiv = document.createElement("div");
  formItemDiv.classList.add("form-item");

  const formLabel = document.createElement("label");
  formLabel.textContent = "stores";

  const select = document.createElement("select");
  select.classList.add("stores-list-modal");
  select.name = "store";

  selectComponent(stores, select);

  formItemDiv.append(formLabel, select);
  return formItemDiv;
}

export { categoryPicker, storePicker };
