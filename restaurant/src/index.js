import { menuBar } from "./menu";
import './style.css'

function navbar(){
    const element = document.createElement('div');
    let menu = new menuBar();

    element.classList.add(['container']);
    element.appendChild(menu);
   
    return element;
}

function content(data) {
    const content = document.createElement('div');
    content.classList.add('content');
    
    console.log(data);

    return content;

}

document.body.appendChild(navbar());
