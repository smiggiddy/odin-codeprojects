const menuItems = {
    "drinks": [
        {
            "item": "latte",
            "price": 2.99,
            "desc": "A nice homemade latte from the Breville."
        },
        {
            "item": "nespresso",
            "price": 2.49,
            "desc": "a nespresso pod coffee"
        },
        {
            "item": "tea",
            "price": 2,
            "desc": "a steeped tea for ninjas"
        }
    ],
    "snacks": [
        {
            "item": "cookies",
            "price": 3.99,
            "desc": "homemade chocolate chip cookies or another delicious treat"
        },
        {
            "item": "pumpkin cake",
            "price": 9.99,
            "desc": "homemade pumpkin cake, leaving you wanting more"
        }
    ]
}

function menuComponent(){
    const div = document.createElement('div');
    div.classList.add(['cards']);
    
    const drinkHeader = document.createElement('h2');
    const snackHeader = document.createElement('h2');
    drinkHeader.classList.add('header');
    snackHeader.classList.add('header');

    drinkHeader.textContent = 'Drinks';
    snackHeader.textContent = 'Snacks';

    let drinks = card(menuItems['drinks']);
    let snacks = card(menuItems['snacks']);

    div.appendChild(drinkHeader);
    drinks.forEach(e => div.appendChild(e));
    div.appendChild(snackHeader);
    snacks.forEach(e => div.appendChild(e));
    
    return div;

}

function card(item) {
    return item.map(element => {
        let div = document.createElement('div');
        div.classList.add(['card']);

        let item = document.createElement('p');
        let price = document.createElement('p');
        let desc = document.createElement('p');
        item.textContent = element.item;
        price.textContent = element.price;
        desc.textContent = element.desc;

        div.appendChild(item);
        div.appendChild(price);
        div.appendChild(desc);
        return div;
    });
}

export { menuComponent };
