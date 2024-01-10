import { DropDown } from "./components/dropDown";
import { Menu } from "./components/mobileMenu";
import './style.css';


function fontAwesome() {
    let script = document.createElement('script');
    script.src = 'https://kit.fontawesome.com/24f16b96cf.js';
    script.crossOrigin = 'anonymous';

    document.head.appendChild(script);
}

fontAwesome();

const _menu = ['main', 'about', 'store', 'blog', 'contact'];
const dropdown = new DropDown(_menu);
const mobile = new Menu(_menu);

const div = dropdown.dropdownComponent();
const h1 = document.createElement('h1');
h1.textContent = 'DEEZ NUTS MAN';


const menuMobile = mobile.buildMenu();
document.body.appendChild(menuMobile);
document.body.appendChild(div);
document.body.appendChild(h1);

