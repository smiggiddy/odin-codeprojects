import { modal } from "./components/modal.js";
import { addForm } from "./components/addForm.js";

const newItemLink = document.querySelector("a[href='/add']");
const modalElement = await modal();
let modalToggle = false;
async function handleDelete(e) {
  console.log(e.target);
}

document.querySelectorAll(".delete-button").forEach((button) =>
  button.addEventListener("click", async (e) => {
    const itemName = e.target.dataset.id;
    const data = new URLSearchParams(new FormData());
    data.append("name", itemName);

    const res = await fetch("/item", {
      method: "DELETE",
      body: data,
    });
    window.location.href = "/";
  }),
);

document.querySelectorAll(".edit-button").forEach((button) => {
  button.addEventListener("click", async (e) => {
    const itemId = e.target.parentNode.parentNode.dataset.itemId;

    window.location.href = `/item/${itemId}`;
  });
});

document.querySelectorAll(".delete-btn").forEach((button) => {
  button.addEventListener("click", async (e) => {
    const itemId = e.target.dataset.id;
    const data = new URLSearchParams(new FormData());
    data.append("id", itemId);

    const path = window.location.pathname;
    const res = await fetch(`${path}`, {
      method: "DELETE",
      body: data,
    });
    const message = await res.text();

    if (message.includes("error")) {
      alert("unable to delete as item is using category");
    } else {
      window.location.href = `${path}`;
    }
  });
});

newItemLink.addEventListener("click", (e) => {
  e.preventDefault();
  modalToggle
    ? (modalElement.style.display = "none")
    : (modalElement.style.display = "block");
  modalToggle = !modalToggle;
});

document.body.append(modalElement);
addForm();
