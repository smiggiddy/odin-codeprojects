const menuItems = {
    "drinks": [
        {
            "item": "latte",
            "desc": "A nice homemade latte from the Breville."
        },
        {
            "item": "nespresso",
            "desc": "a nespresso pod coffee"
        },
        {
            "item": "tea",
            "desc": "a steeped tea for ninjas"
        }
    ],
    "snacks": [
        {
            "item": "cookies",
            "desc": "homemade chocolate chip cookies or another delicious treat"
        },
        {
            "item": "pumpkin cake",
            "desc": "homemade pumpkin cake, leaving you wanting more"
        },
        {
            "item": "cinnamon rolls",
            "desc": "delicious mouth watering cinnamon rolls"
        }
    ]
}

function menuComponent(){
    const div = document.createElement('div');
    const drinksDiv = document.createElement('div');
    const snacksDiv = document.createElement('div');
    div.classList.add(['cards']);
    drinksDiv.classList.add('drinks-container');
    snacksDiv.classList.add('snacks-container');
    
    const drinkHeader = document.createElement('h2');
    const snackHeader = document.createElement('h2');
    drinkHeader.classList.add(['header', 'drink-header']);
    snackHeader.classList.add(['header', 'snack-header']);

    drinkHeader.textContent = 'Drinks';
    snackHeader.textContent = 'Snacks';

    let drinks = card(menuItems['drinks']);
    let snacks = card(menuItems['snacks']);

    drinksDiv.appendChild(drinkHeader);
    drinks.forEach(e => drinksDiv.appendChild(e));
    snacksDiv.appendChild(snackHeader);
    snacks.forEach(e => snacksDiv.appendChild(e));

    div.appendChild(drinksDiv);
    div.appendChild(snacksDiv);
    
    return div;

}

function card(item) {
    return item.map(element => {
        let div = document.createElement('div');
        div.classList.add(['card']);

        let item = document.createElement('h3');
        let desc = document.createElement('p');
        item.textContent = element.item;
        desc.textContent = element.desc;

        div.appendChild(item);
        div.appendChild(desc);
        return div;
    });
}

export { menuComponent };
