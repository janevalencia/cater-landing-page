// Grid Collapsable Menu (Mobile View)
const navToggle = (toggleID, navID) => {
    const toggle = document.getElementById(toggleID);
    const navMenu = document.getElementById(navID);

    // Proceed when elements exists
    if (toggle && navMenu) {
        toggle.addEventListener('click', () => {
            // Add/remove the show__menu class to div.nav__menu
            navMenu.classList.toggle('show__menu');
        })
    }
}

// Collapse the menu upon clicking the nav__link (Mobile View)
const navItemCollapse = (navItemsClass, navID) => {
    const navItems = document.querySelectorAll(navItemsClass);
    const navMenu = document.getElementById(navID);

    navItems.forEach(item => item.addEventListener('click', () => {
        navMenu.classList.remove('show__menu');
    }))
}

// Execute
navToggle('nav-toggle','nav-menu');
navItemCollapse('.nav__item', 'nav-menu');

