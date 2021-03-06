$('.parallax-bg').parallax({imageSrc: 'img/newsletter-bg.jpg'});
// ---------- JQuery -----------

$(document).ready(function(){
if (document.getElementById('map_container')) {
  let map_container = document.getElementById('map_container');
    let options_map = {
        once: true,//запуск один раз, и удаление наблюдателя сразу
        passive: true,
        capture: true
    };
    map_container.addEventListener('click', start_lazy_map, options_map);
    map_container.addEventListener('mouseover', start_lazy_map, options_map);
    map_container.addEventListener('touchstart', start_lazy_map, options_map);
    map_container.addEventListener('touchmove', start_lazy_map, options_map);

    let map_loaded = false;
    function start_lazy_map() {
        if (!map_loaded) {
            let map_block = document.getElementById('ymap_lazy');
            map_loaded = true;
            map_block.setAttribute('src', map_block.getAttribute('data-src'));
            map_block.removeAttribute('data_src');
            console.log('YMAP LOADED');
        }
    }
}

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

	speed: 700,
	autoplay: {delay: 5000},

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
  autoHeight: true,
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

jQuery.validator.addMethod(
    "emailcorect",
    function (value, element) {
      return (
        this.optional(element) ||
        /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i.test(
          value
        )
      );
    },
    "Email format: name@domain.com"
  );

$(".form").each(function () {
		$(this).validate({
			errorClass: "invalid",
            rules: {
                mail: {
                  emailcorect: true,
                },
            },
			messages: {
				name: {
					required: "Please specify your name",
					minlength: "Name must be at least 2 letters long",
				},
				phone: {
					required: "Please specify your phone number",
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