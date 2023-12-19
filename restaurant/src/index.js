import { carousel } from "./components/carousel"
import { menuBar as navbar } from "./components/navbar";
import './style.css'

function nav(){
    const element = document.createElement('header');
    const brandName = document.createElement('h1');
    let menu = new navbar();

    brandName.style.textAlign = 'center';
    brandName.textContent = 'This Wondrous Coffee';
    
    element.appendChild(brandName);
    element.appendChild(menu);
   
    return element;
}

function content(data) {
    const content = document.createElement('div');
    content.classList.add('content');
    
    console.log(data);

    return content;

}
let carouselComponent = carousel.createComponent();
document.body.appendChild(nav());
document.body.appendChild(carouselComponent);
