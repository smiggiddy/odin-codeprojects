class Menu {
    constructor(menuItems) {
        this.menuItems = menuItems;
        this.menu = document.createElement("nav");
        this.burgerIcon = document.createElement("i");
        this.container = document.createElement("div");

        this.setupMenuStructure();
        this.setupResizeListener();
    }

    setupMenuStructure() {
        this.container.classList.add("navbar");
        this.container.style.display = "flex";
        this.container.style.padding = "20px";

        // Determine if Burger Icon should show
        this.burgerIconStyles();
        this.burgerIconSetter();

        this.menuItems.forEach((element) => {
            const li = document.createElement("li");
            li.textContent = element;
            li.style.listStyleType = "none";

            this.container.appendChild(li);
        });

        this.menu.append(this.burgerIcon, this.container);
    }

    adjustStylesForSmallScreen() {
        this.container.style.flexDirection = "column";
        this.burgerIcon.style.display = "inline-block";
        this.container.style.gap = "20px";
        this.container.style.alignItems = "center";
        this.container.style.display = "none";
    }

    adjustStylesForLargeScreen() {
        this.container.style.display = "flex";
        this.container.style.flexDirection = "row";
        this.container.style.justifyContent = "space-around";
        this.burgerIcon.style.display = "none";
    }

    burgerIconStyles() {
        this.burgerIcon.classList.add("fas", "fa-bars", "fa-2x");
        this.burgerIcon.style.margin = "10px";
    }

    burgerIconSetter() {
        const isSmallScreen = window.innerWidth <= 600;
        if (isSmallScreen) {
            this.adjustStylesForSmallScreen();
            this.burgerIconClickListener();
        } else {
            this.adjustStylesForLargeScreen();
        }
    }

    burgerIconClickListener() {
        this.burgerIcon.addEventListener("click", () => {
            this.container.style.display =
                this.container.style.display === "none" ? "flex" : "none";
        });
    }

    setupResizeListener() {
        window.addEventListener("resize", () => this.burgerIconSetter());
    }

    buildMenu() {
        return this.menu;
    }
}

export { Menu };
