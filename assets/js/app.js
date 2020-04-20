"use strict";

var App = {
  init: function() {
    this.initBurgerHandler();
    var orderForm = document.getElementById('order-form');
    if (orderForm) {
      orderForm.addEventListener('submit', App.submitOrder);
    }

    var images = document.querySelectorAll('.order-samples img');
    images.forEach(function(img) {
      img.addEventListener('click', App.zoomImage);
    });
    document.getElementById("lightbox-back").addEventListener("click", function(){
      this.classList.remove("show");
    });
  },
  initBurgerHandler: function() {
    var navContainer = document.querySelector('.nav-container');
    var burger = document.querySelector('.burger');

    burger.addEventListener('click', function() {
      navContainer.classList.toggle('BurgerMenu--active');
    });
  },

  zoomImage: function(e) {
    e.preventDefault();

    var img = document.createElement('img');
    img.src = this.dataset.target;
    var lb = document.getElementById("lightbox-content");
    lb.innerHTML = "";
    lb.appendChild(img);

    // Show lightbox
    lb = document.getElementById("lightbox-back");
    lb.classList.add("show");

  },

  submitOrder: function(e) {
    e.preventDefault();
    var url = this.getAttribute('action');
    var data = new FormData(this);

    var button = this.querySelector('button');
    button.disabled = true;
    button.innerHTML = '...einen Moment bitte';

    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        if (this.status !== 200) {
          alert('Es ist leider ein Fehler aufgetreten. Bitte versuche es erneut');
          return;
        }
        var response = JSON.parse(xhr.responseText);
        // Request finished. Do processing here.
        if(response.success) {
          var anfragen = document.getElementById('anfragen');
          anfragen.scrollIntoView();
          scrollBy(0, -200); // scroll a bit further up
          anfragen.innerHTML = '<div class="success">Vielen Dank! Ich melde mich bei dir!</div>';
        } else {
          alert('Es ist leider ein Fehler aufgetreten. Bitte versuche es erneut');
        }
      }
    };
    xhr.send(data);
  }
};

window.addEventListener("DOMContentLoaded", function(){
  App.init();
});

