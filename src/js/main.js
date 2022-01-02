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
window.addEventListener('scroll', function scrollActiveLink() {
    const sections = document.querySelectorAll('section[id]');

    sections.forEach(current => {
        const height = current.offsetHeight;
        const top = current.offsetTop - 50;

        sectionID = current.getAttribute('id');

        if (this.scrollY > top && this.scrollY <= top + height) {
            document.querySelector('.nav__menu a[href*=' + sectionID + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionID + ']').classList.remove('active-link');
        }
    })
})

// Show Scroll Top Icon


// Show Scroll Bottom Icon


// Change background header upon scrolling
window.addEventListener('scroll', function scrollHeader() {
    const siteHeader = document.getElementById('header');

    // When scroll is greater than 200 viewport in height, add scroll-header CSS to header
    if (this.scrollY >= 200) {
        siteHeader.classList.add('scroll-header');
    } else {
        siteHeader.classList.remove('scroll-header');
    }
})