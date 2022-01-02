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
window.addEventListener('scroll', function showScrollTop() {
    const scrollUp = document.getElementById('scrollUp');

    if (this.scrollY >= 560) {
        scrollUp.classList.add('show__scrollup');
    } else {
        scrollUp.classList.remove('show__scrollup');
    }
})

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

/* =========== DARK / LIGHT MODE ================ */
const themeToggle = document.getElementById('theme-toggle');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-toggle-right';

// Previously selected theme (if any)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeToggle.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right';

// When user has selected a theme, activate/deactive the theme accordingly
if (selectedTheme) {
  if (selectedTheme === 'dark') {
      document.body.classList.add(darkTheme);
  } else {
    document.body.classList.remove(darkTheme);
  }

  if (selectedIcon === 'bx-toggle-left') {
    themeToggle.classList.add(iconTheme);
  } else {
    themeToggle.classList.remove(iconTheme);
  }
}

// Activate / deactivate the theme manually with the button
themeToggle.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeToggle.classList.toggle(iconTheme);
    
    // Save the theme that the user has chosen in localStorage
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})