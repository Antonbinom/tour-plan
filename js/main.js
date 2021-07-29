// ---------- Pralax for Newsletter-----------

$('.parallax-bg').parallax({imageSrc: 'img/newsletter-bg.jpg'});


// ---------- JQuery -----------

$(document).ready(function(){

// ---------- Burger Menu -----------

  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    console.log('Click');
    document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom--visible");
  });

  // ---------- Hotel Slider -----------

  const hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },

	// speed: 700,
	// autoplay: {delay: 4000},

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

	// speed: 500,
	// autoplay: {delay: 4000},

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

var modalOverlay = $('.modal__overlay');
var modalDialog = $('.modal__dialog');

function openModal() {
    modalOverlay.addClass("modal__overlay--visible");
		modalDialog.addClass("modal__dialog--visible");

  $('body').addClass('hold');
};


function closeModal(event) {
  event.preventDefault();
		modalOverlay.removeClass("modal__overlay--visible");
		modalDialog.removeClass("modal__dialog--visible");

  $('body').removeClass('hold');
};

$('.modal').on('click', function(event) {
  modalDialog.removeClass('modal__dialog--visible');
  modalOverlay.removeClass('modal__overlay--visible');

  $('body').removeClass('hold');
});

$(document).on('keydown', function(event) {
  if (event.code == 'Escape') {
    modalDialog.removeClass('modal__dialog--visible');
    modalOverlay.removeClass('modal__overlay--visible');
    $('body').removeClass('hold');
  }
});

$('.modal__dialog').on('click', function(event) {
  event.stopPropagation();
});

// ---------- Form Validation -----------

var formValidate = $('.form');
$(".form").each(function () {
		$(this).validate({
			errorClass: "invalid",
			messages: {
				name: {
					required: "Please specify your name",
					minlength: "Name must be at least 2 letters long",
				},
				phone: {
					required: "We need your phone number to contact you",
					minlength: "Your phone must be 11 digits long",
				},
				mail: {
					required: "We need your email address to contact you",
					email: "This email is not correct",
				},
			},
		});
	});
$(document).ready(function () {
  $(".input-phone").mask("+7 (000) 000-00-00");
});
  AOS.init();
});
