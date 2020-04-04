"use strict";
"use strict";

var App = {
  init: function() {
    this.initBurgerHandler();
  },
  initBurgerHandler: function() {
    var navContainer = document.querySelector('.nav-container');
    var burger = document.querySelector('.burger');

    burger.addEventListener('click', function() {
      navContainer.classList.toggle('BurgerMenu--active');
    });
  },
};

App.init();

