class Carousel {
    constructor() {
        this.container = document.createElement("div");

        this.setupCarouselStructure();
    }

    setupCarouselStructure() {
        this.container.classList.add("container");
        this.container.style.height = "60vh";

        this.carousel = document.createElement("div");
        this.carousel.classList.add("carousel");

        this.container.append(this.carousel);
    }

    getCarousel = () => this.container;
}

export { Carousel };
