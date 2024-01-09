import { DropDown } from "./components/dropDown";
import './style.css';

const dropdown = new DropDown(['main', 'about', 'store', 'blog']);

const div = dropdown.dropdownComponent();
const h1 = document.createElement('h1');
h1.textContent = 'DEEZ NUTS MAN';

document.body.appendChild(div);
document.body.appendChild(h1);
