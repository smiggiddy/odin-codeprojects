import { MainWebsite } from './components/website';
import './style.css';

const api = 'bd5d23eea5751c12b0ef75344e3df932';
const web = new MainWebsite(api);

function fonts() {
    let fontLink = document.createElement('link');
    fontLink.rel = 'preconnect';
    fontLink.href = 'https://fonts.googleapis.com';

    let fontLinkTwo = document.createElement('link');
    fontLinkTwo.rel = 'preconnect';
    fontLinkTwo.href = 'https://fonts.gstatic.com';
    fontLinkTwo.crossOrigin = true;

    let style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href =
        'https://fonts.googleapis.com/css2?family=Indie+Flower&family=Inter:wght@100..900&display=swap';

    document.head.appendChild(fontLink);
    document.head.appendChild(fontLinkTwo);
    document.head.appendChild(style);
}

fonts();
document.body.appendChild(web.websiteStructure());
