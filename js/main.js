const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },

	speed: 700,
	autoplay: {delay: 4000},

	// Переключение слайдера клавиатурой
	keyboard: {
    enabled: true,
		onlyInViewport: false,
  },

});

ymaps.ready(init);

function init(){
  var myMap = new ymaps.Map("map", {
      center: [59.762796, 30.358813],
      zoom: 16
  }, {
      searchControlProvider: 'yandex#search'
  });
}
