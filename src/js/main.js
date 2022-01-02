/* ============= SITE NAVIGATION ================= */
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

/* ============= SITE SCROLLING ================= */
// Add active-link CSS to the nav-menu being selected by user
// Query all sections with element ID
const sections = document.querySelectorAll('section[id]');

// Scrolling event
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const height = current.offsetHeight;
        const top = current.offsetTop - 50;

        sectionID = current.getAttribute('id');

        if (scrollY > top && scrollY <= top + height) {
            document.querySelector('.nav__menu a[href*=' + sectionID + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionID + ']').classList.remove('active-link');
        }
    })
})