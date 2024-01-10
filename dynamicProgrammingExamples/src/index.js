import { Carousel } from './components/imageCarousel';
import { DropDown } from './components/dropDown';
import { Menu } from './components/mobileMenu';
import Icon from './static/img1.jpg';
import Icon2 from './static/img2.jpg';
import Icon3 from './static/img3.jpg';
import Icon4 from './static/img4.jpg';
import './style.css';

function fontAwesome() {
    let script = document.createElement('script');
    script.src = 'https://kit.fontawesome.com/24f16b96cf.js';
    script.crossOrigin = 'anonymous';

    document.head.appendChild(script);
}

function website() {
    // create component objects and assets
    const images = [Icon, Icon2, Icon3, Icon4];
    const _menu = ['main', 'about', 'store', 'blog', 'contact'];
    const dropdown = new DropDown(_menu);
    const mobile = new Menu(_menu);
    const carouselObj = new Carousel(images);
    // render the things
    const div = dropdown.dropdownComponent();
    const h1 = document.createElement('h1');
    const carousel = carouselObj.getCarousel();

    h1.textContent = 'DEEZ NUTS MAN';

    const menuMobile = mobile.buildMenu();

    document.body.append(menuMobile, div, h1, carousel);
}

fontAwesome();
website();
