class DropDown {
    constructor(menu) {
        this.menu = menu;
    }

    title = 'Menu';
    clicked = false;

    getMenu = () => {
        this.div;
    }

    dropdownComponent() {
        // render items 
        this.createDropdownItems();
        this.createMenuButton();

        this.div = document.createElement('div');
        this.div.classList.add('menu-bar');
        this.div.style = 'margin-left: 50px; display: flex; flex-direction: column; width: 200px; align-items: center;';

        this.div.style.position = 'relative';

        this.div.append(this.button, this.dropdownItems);
        return this.div;
    }

    createDropdownItems() {
        this.dropdownItems = document.createElement('div');
        this.dropdownItems.classList.add('menu-items');

        this.dropdownItems.style.display = 'flex';
        this.dropdownItems.style.flexDirection = 'column';
        this.dropdownItems.style.visibility = 'hidden';
        this.dropdownItems.style.gap = '10px';
        this.dropdownItems.style.lineHeight = '1.7';
        this.dropdownItems.style.fontSize = '18px';
        this.dropdownItems.style.position = 'absolute';
        this.dropdownItems.style.top = '100px';
        this.dropdownItems.style.background = '#E8E8E8';
        this.dropdownItems.style.width = '100%';
        this.dropdownItems.style.alignItems = 'center';
        // this.dropdownItems.style.padding = '15px';

        this.menu.forEach(e => {
            const a = document.createElement('a');
            a.href = '#';
            a.textContent = e;
            a.style.textDecoration = 'none';
            a.style.display = 'inline-block';
            a.style.width = '100%';
            a.style.textAlign = 'center';
            a.style.padding = '5px';
            

            // a.addEventListener('mouseover', () => {
            //     a.style.background = '#E8E8E8'
            // })
            this.dropdownItems.appendChild(a)
        })
    }

    createMenuButton() {
        this.button = document.createElement('button');
        this.button.classList.add('menu-btn,btn');
        this.button.textContent = this.title;

        this.button.style = "padding: 20px; margin: 20px;"

        this.button.addEventListener('click', () => {
            this.clicked = !this.clicked
            let visibilityToggle = this.clicked ? 'visible' : 'hidden';
            this.dropdownItems.style.visibility = visibilityToggle;
        })
    }

}

export { DropDown }
