import _ from 'lodash';
import printMe from './print';
import './style.css';
import Icon from './gitlab.png';
import { functionOne } from './functionOne';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // add image to our file
    const myIcon = new Image();
    myIcon.src = Icon;

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(myIcon);
    element.appendChild(btn);

    return element;
}

functionOne();
document.body.appendChild(component());
