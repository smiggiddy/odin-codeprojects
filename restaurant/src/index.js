import { contactComponent } from "./components/contact";
import { carousel } from "./components/carousel"
import { menuBar as navbar } from "./components/navbar";
import { menuComponent } from "./components/menu";
import './style.css'

let _carousel = carousel.createComponent();

function website() {

    // Navbar
    document.body.appendChild(nav());

    loadPage();

}

function nav(){
    const element = document.createElement('header');
    const brandName = document.createElement('h1');

    let menu = new navbar();
    menu.addEventListener('click', e => loadPage(e.target.outerText));
    
    brandName.style.textAlign = 'center';
    brandName.textContent = 'This Wondrous Coffee';
    
    element.appendChild(brandName);
    element.appendChild(menu);
   
    return element;
};

function loadPage(page='home') {
    let home = _carousel;
    let menu = menuComponent();
    let contact = contactComponent();
    let contentData;

    switch(page.toLowerCase()){
        case 'menu':
            contentData = content(menu);
            break;
        case 'contact':
            contentData = content(contact);
            break;
        default:
            contentData = content(home);
            break;
        
    }        
    document.body.appendChild(contentData);
}

function content(data) {
    const old = document.querySelector('.content');
    if (old) {
        old.textContent = '';
        document.body.removeChild(old);
    }
    const _content = document.createElement('div');
    _content.classList.add('content');
    _content.appendChild(data);
    
    return _content;

};

website();
