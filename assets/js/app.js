"use strict";
"use strict";

var App = {
  init: function() {
    this.initBurgerHandler();
    var orderForm = document.getElementById('order-form');
    if (orderForm) {
      orderForm.addEventListener('submit', App.submitOrder);
    }
  },
  initBurgerHandler: function() {
    var navContainer = document.querySelector('.nav-container');
    var burger = document.querySelector('.burger');

    burger.addEventListener('click', function() {
      navContainer.classList.toggle('BurgerMenu--active');
    });
  },

  submitOrder: function(e) {
    e.preventDefault();
    var url = this.getAttribute('action');
    var data = {};
    this.querySelectorAll('input').forEach(function(field) {
      data[field.getAttribute('name')] = field.value;
    });
    var button = this.querySelector('button');
    button.disabled = true;
    button.innerHTML = '...einen Moment';

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(function(r) { return r.json() })
      .then(function(r) {
        if(r.success) {
          var anfragen = document.getElementById('anfragen');
          anfragen.scrollIntoView();
          scrollBy(0, -200); // scroll a bit further up
          anfragen.innerHTML = '<div class="success">Vielen Dank! Ich melde mich bei dir!</div>';
        } else {
          alert('Es ist leider ein Fehler aufgetreten. Bitte versuche es erneut');
        }
      });
  }

};

App.init();

