class Carousel {
    constructor(items) {
        this.items = items;
    };
    
    carouselDiv = document.createElement('div');
    createComponent() {
        this.carouselDiv.classList.add(['carousel']);

        this.items.forEach(element => {
            let div = document.createElement('div');
            div.classList.add(['carousel-item']);

            let heading = document.createElement('h1');
            let desc = document.createElement('p');
            let link = document.createElement('a');

            heading.textContent = element.heading;
            desc.textContent = element.desc;
            link.textContent = element.link;

            div.appendChild(heading);
            div.appendChild(desc);
            div.appendChild(link);

            this.carouselDiv.appendChild(div);
        });
        return this.carouselDiv;
    };
};


class Items {
    constructor(heading, desc, link) {
        this.heading = heading;
        this.desc = desc;
        this.link = link;

        this._item = {
            heading: this.heading,
            desc: this.desc,
            link: this.link
        }
    }

    get item() {
        return this._item;
    }
}

let carouselItems = [
    {
        "heading": "Specialty Baked Goods",
        "desc": "Exclusively delicious baked goods, homemade and all that",
        "link": "Order Now!"
    },
    {
        "heading": "Subscribe and Save today!",
        "desc": "We offer flexible subscription plans to meet your needs",
        "link": "Get started"
    },
    {
        "heading": "Explore our blog",
        "desc": "This Wondrous Life teaches you how to dream, inspire, and embrace life",
        "link": "Embrace this"
    }
]

let items = carouselItems.map(e => new Items(e.heading, e.desc, e.link));
let carousel = new Carousel(items);

export { carousel };


