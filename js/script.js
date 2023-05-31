let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.header__link');

burger.addEventListener('click',
  function () {

    burger.classList.toggle('header__burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
  });

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('header__burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
  });
});

let headerFormOpen = document.querySelector('.header__search');
let headerForm = document.querySelector('.header__form');
let headerFormClose = document.querySelector('.header__form-close');

headerFormOpen.addEventListener('click',
  function () {
    headerFormOpen.classList.add('hidden');

    headerForm.classList.add('header__form--active');
  });

headerFormClose.addEventListener('click',
  function () {
    headerFormOpen.classList.remove('hidden');

    headerForm.classList.remove('header__form--active');
  });

let tabsBtn = document.querySelectorAll('.stages__link');
let tabsItem = document.querySelectorAll('.stages__block');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('stages__link--active')});
    e.currentTarget.classList.add('stages__link--active');

    tabsItem.forEach(function(element){ element.classList.remove('stages__block--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('stages__block--active')
  });
});

const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

new Accordion('.accordion-container');
