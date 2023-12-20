function contactComponent(){
    let div = document.createElement('contact');
    div.classList.add(['contact']);
    
    let name = document.createElement('h2');
    name.textContent = 'This Wondrous Life';

    let link = document.createElement('p');
    link.textContent = 'https://thiswondrouslife.com';

    div.appendChild(name);
    div.appendChild(link);

    return div;
}

export { contactComponent };
