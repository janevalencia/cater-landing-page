// Grid Collapsable Menu (Mobile View)
const navToggle = (toggleID, navID) => {
    const toggle = document.getElementById(toggleID);
    const nav = document.getElementById(navID);

    // Proceed when elements exists
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            // Add/remove the show__menu class to div.nav__menu
            nav.classList.toggle('show__menu');
        })
    }
}

// Collapse the menu upon clicking the nav__link (Mobile View)
const navItemCollapse = (navItemsClass, navID) => {
    const links = document.querySelectorAll(navItemsClass);
    const nav = document.getElementById(navID);

    links.forEach(link => link.addEventListener('click', () => {
        nav.classList.remove('show__menu');
    }))
}

// Execute
navToggle('nav-toggle','nav-menu');
navItemCollapse('.nav__item', 'nav-menu');

