"use strict";

// slick
$('.single-item').slick({
  // dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});
$('.single-item2').slick({
  infinite: true,
  speed: 500 // autoplay: true,
  // autoplaySpeed: 2000

});
var left__nav__item = document.querySelectorAll(".left__nav li");
var left__nav__inner = document.querySelectorAll(".left__nav__inner");
var header__nav__about__item = document.querySelectorAll(".header__nav__about__item");

function active(array) {
  Array.from(array, function (item) {
    item.addEventListener("mousemove", function () {
      item.classList.add("active");
    });
    item.addEventListener("mouseout", function () {
      item.classList.remove("active");
    });
  });
}

function active2(array) {
  Array.from(array, function (item) {
    item.addEventListener("click", function () {
      for (var i = 0; i < array.length; i++) {
        array[i].classList.remove("active");
      }

      item.classList.add("active");
    });
  });
}

active(left__nav__item);
active(left__nav__inner);
active2(header__nav__about__item);