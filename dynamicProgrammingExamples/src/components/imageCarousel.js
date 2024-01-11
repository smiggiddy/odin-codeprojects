class Carousel {
    constructor(imgArr = []) {
        this.container = document.createElement('div');
        this.carousel = document.createElement('div');
        this.imgArr = imgArr;
        this.totalImages = imgArr.length;
        this.imagePointer = 0; // starting index
        this.careouselCards = [];

        // this.previousImage = this.previousImage.bind(this);
        // this.nextImage = this.nextImage.bind(this);

        // setup styling
        this.carouselPickerStyles();
        this.carouselLeftButton();
        this.carouselRightButton();

        // setup structure
        this.setupCarouselStructure();
    }

    setupCarouselStructure() {
        this.container.classList.add('container');
        this.container.style.maxHeight = '75vh';
        this.container.style.position = 'absolute';

        this.carousel.classList.add('carousel');
        this.carousel.style.maxHeight = '75vh';
        this.carousel.style.overflow = 'hidden';

        // generate an image thing for each item in carousel array
        this.imgArr.forEach((element, i) => {
            //TODO create method to load images from path
            const item = document.createElement('div');
            item.classList.add('carousel-item');
            item.dataset.itemNo = i;
            item.style.display = 'none';

            let img = new Image();
            img.classList.add('img', 'carousel-img');
            img.style.maxWidth = '100%';
            img.src = element;

            item.appendChild(img);
            this.carousel.appendChild(item);
            this.careouselCards.push(item);
        });

        // Make sure the first card renders

        this.showActiveSlide();
        this.container.append(this.carousel, this.rightButton, this.leftButton);
    }

    showActiveSlide() {
        this.careouselCards.forEach((e) => {
            if (Number(e.dataset.itemNo) === this.imagePointer) {
                e.style.display = 'block';
                e.firstChild.classList.add('active');
            } else {
                e.style.display = 'none';
                e.firstChild.classList.remove('active');
            }
        });
    }

    carouselPickerStyles() {
        this.pickerActive = document.createElement('i');
        this.pickerActive.classList.add('fas', 'fa-circle', 'carousel-active');

        this.pickerInActive = document.createElement('i');
        this.pickerInActive.classList.add('far', 'fa-circle');
    }

    carouselLeftButton() {
        this.leftButton = document.createElement('i');
        this.leftButton.classList.add(
            'carousel-left-btn',
            'fas',
            'fa-angle-left',
            'fa-10x',
        );
        this.leftButton.style.position = 'absolute';
        this.leftButton.style.top = '50%';
        this.leftButton.style.left = '2%';

        this.leftButton.addEventListener('click', () => this.previousImage());
    }

    carouselRightButton() {
        this.rightButton = document.createElement('i');
        this.rightButton.classList.add(
            'carousel-right-btn',
            'fas',
            'fa-angle-right',
            'fa-10x',
        );
        this.rightButton.style.position = 'absolute';
        this.rightButton.style.top = '50%';
        this.rightButton.style.right = '2%';

        this.rightButton.addEventListener('click', () => this.nextImage());
    }

    previousImage() {
        this.imagePointer =
            (this.imagePointer - 1 + this.totalImages) % this.totalImages;
        this.showActiveSlide();
    }

    nextImage() {
        this.imagePointer = (this.imagePointer + 1) % this.totalImages;
        this.showActiveSlide();
    }

    getCarousel = () => this.container;
}

export { Carousel };
