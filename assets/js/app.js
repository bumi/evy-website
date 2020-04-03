"use strict";
"use strict";

var App = {
  init: function() {
    this.initBurgerHandler();
    this.stickyNavigationHandler();
  },
  initBurgerHandler: function() {
    var navContainer = document.querySelector('.nav-container');
    var burger = document.querySelector('.burger');

    burger.addEventListener('click', function() {
      navContainer.classList.toggle('BurgerMenu--active');
    });
  },
  stickyNavigationHandler: function() {
    var scrollPosition = 0;
    var mainContainer = document.querySelector('.main-container');
    var navContainer = document.querySelector('.nav-container');

    var updateNavigationView = function() {
      var currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
      var isUpDirection = (currentScrollPos && currentScrollPos < scrollPosition);

      if (isUpDirection) {
        mainContainer.classList.add('stickyNavigation');
      } else {
        mainContainer.classList.remove('stickyNavigation');
      }

      if (currentScrollPos > scrollPosition) {
        navContainer.classList.remove('BurgerMenu--active');
      }

      scrollPosition = currentScrollPos;
    };

    window.addEventListener('scroll', updateNavigationView);
  }
};

App.init();

