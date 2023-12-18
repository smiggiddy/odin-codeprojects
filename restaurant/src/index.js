function component(){
    const element = document.createElement('div');
    
    element.textContent = 'Testing';

    return element;
}

document.body.appendChild(component());
