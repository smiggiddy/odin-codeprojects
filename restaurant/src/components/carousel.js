class Carousel {
    constructor(items) {
        this.items = items;
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

carouselItems.forEach(e => new Items(e));
