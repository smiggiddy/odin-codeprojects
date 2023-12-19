function menuBar() {
    const items = [
        "home",
        "menu",
        "contact"
    ];

    const navbar = document.createElement('div');
    navbar.classList.add(['nav']);
    
    const ul = document.createElement('ul');
    ul.classList.add('navbar');

    items.forEach(e => {
        let li = document.createElement('li');
        li.textContent = e;

        ul.appendChild(li);
    });
    
    navbar.appendChild(ul);
    return navbar;
    
}

export { menuBar };
