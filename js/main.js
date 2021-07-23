// ---------- Yamdex Map API  -----------
ymaps.ready(init);

function init(){
  var myMap = new ymaps.Map("map", {
      center: [59.762796, 30.358813],
      zoom: 16
  }, {
      searchControlProvider: 'yandex#search'
  });
}

// ---------- Pralax for Newsletter-----------

$('.parallax-bg').parallax({imageSrc: 'img/newsletter-bg.jpg'});

  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    console.log('Click');
    document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom--visible");
});

// ---------- JQuery -----------
$(document).ready(function(){

  // ---------- Hotel Slider -----------

  const hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },

	speed: 700,
	autoplay: {delay: 4000},

	// Переключение слайдера клавиатурой
	keyboard: {
    enabled: true,
		onlyInViewport: false,
  },
});

const reviewSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },

	speed: 500,
	autoplay: {delay: 4000},

	// Переключение слайдера клавиатурой
	keyboard: {
    enabled: true,
		onlyInViewport: false,
  },
});

// ---------- Modal Window -----------

var modalButton = $('[data-toggle=modal]');
var closeModalButton = $('.modal__close');
modalButton.on('click', openModal);
closeModalButton.on('click', closeModal);

function openModal() {
  console.log($(this).attr('data-href'));
  var targetModal = $(this).attr('data-href');
  $(targetModal).find('.modal__overlay').addClass('modal__overlay--visible');
  $(targetModal).find('.modal__dialog').addClass('modal__dialog--visible');

  $('body').addClass('hold');
};


function closeModal(event) {
  event.preventDefault();
  var modalOverlay = $('.modal__overlay');
  var modalDialog = $('.modal__dialog');
  modalDialog.removeClass('modal__dialog--visible');
  modalOverlay.removeClass('modal__overlay--visible');
  $('body').removeClass('hold');
};

$('.modal').on('click', function(event) {
  var modalOverlay = $('.modal__overlay');
  var modalDialog = $('.modal__dialog');
  modalDialog.removeClass('modal__dialog--visible');
  modalOverlay.removeClass('modal__overlay--visible');
  $('body').removeClass('hold');
});

$(document).on('keydown', function(event) {
  var modalOverlay = $('.modal__overlay');
  var modalDialog = $('.modal__dialog');

  if (event.code == 'Escape') {
    modalDialog.removeClass('modal__dialog--visible');
    modalOverlay.removeClass('modal__overlay--visible');
    $('body').removeClass('hold');
  }
});

$('.modal__dialog').on('click', function(event) {
  event.stopPropagation();
});

});
