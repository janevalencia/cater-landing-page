// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"d6sW":[function(require,module,exports) {
/* ============= SITE NAVIGATION ================= */
// Grid Collapsable Menu (Mobile View)
var navToggle = function navToggle(toggleID, navID) {
  var toggle = document.getElementById(toggleID);
  var navMenu = document.getElementById(navID); // Proceed when elements exists

  if (toggle && navMenu) {
    toggle.addEventListener('click', function () {
      // Add/remove the show__menu class to div.nav__menu
      navMenu.classList.toggle('show__menu');
    });
  }
}; // Collapse the menu upon clicking the nav__link (Mobile View)


var navItemCollapse = function navItemCollapse(navItemsClass, navID) {
  var navItems = document.querySelectorAll(navItemsClass);
  var navMenu = document.getElementById(navID);
  navItems.forEach(function (item) {
    return item.addEventListener('click', function () {
      navMenu.classList.remove('show__menu');
    });
  });
}; // Execute


navToggle('nav-toggle', 'nav-menu');
navItemCollapse('.nav__item', 'nav-menu');
/* ============= SITE SCROLLING ================= */
// Add active-link CSS to the nav-menu being selected by user

window.addEventListener('scroll', function scrollActiveLink() {
  var _this = this;

  var sections = document.querySelectorAll('section[id]');
  sections.forEach(function (current) {
    var height = current.offsetHeight;
    var top = current.offsetTop - 50;
    sectionID = current.getAttribute('id');

    if (_this.scrollY > top && _this.scrollY <= top + height) {
      document.querySelector('.nav__menu a[href*=' + sectionID + ']').classList.add('active-link');
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionID + ']').classList.remove('active-link');
    }
  });
}); // Show Scroll Top Icon

window.addEventListener('scroll', function showScrollTop() {
  var scrollUp = document.getElementById('scrollUp');

  if (this.scrollY >= 560) {
    scrollUp.classList.add('show__scrollup');
  } else {
    scrollUp.classList.remove('show__scrollup');
  }
}); // Change background header upon scrolling

window.addEventListener('scroll', function scrollHeader() {
  var siteHeader = document.getElementById('header'); // When scroll is greater than 200 viewport in height, add scroll-header CSS to header

  if (this.scrollY >= 200) {
    siteHeader.classList.add('scroll-header');
  } else {
    siteHeader.classList.remove('scroll-header');
  }
});
/* =========== DARK / LIGHT MODE ================ */

var themeToggle = document.getElementById('theme-toggle');
var darkTheme = 'dark-theme';
var iconTheme = 'bx-toggle-right'; // Previously selected theme (if any)

var selectedTheme = localStorage.getItem('selected-theme');
var selectedIcon = localStorage.getItem('selected-icon'); // We obtain the current theme that the interface has by validating the dark-theme class

var getCurrentTheme = function getCurrentTheme() {
  return document.body.classList.contains(darkTheme) ? 'dark' : 'light';
};

var getCurrentIcon = function getCurrentIcon() {
  return themeToggle.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right';
}; // When user has selected a theme, activate/deactive the theme accordingly


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
} // Activate / deactivate the theme manually with the button


themeToggle.addEventListener('click', function () {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeToggle.classList.toggle(iconTheme); // Save the theme that the user has chosen in localStorage

  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});
/* =========== FOOTER COPYRIGHT YEAR ============= */

document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()));
},{}]},{},["d6sW"], null)
//# sourceMappingURL=main.8231a030.js.map