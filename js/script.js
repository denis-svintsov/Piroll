$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

	const popupLinks = document.querySelectorAll('.popup-link');
	const body = document.querySelector('body');
	const lockPadding = document.querySelectorAll('.lock-padding');
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	$('.popup-link').click(function (event) {
		$('.popup').addClass('open');
		$('body').addClass('lock-popup');
		body.style.paddingRight = lockPaddingValue;
	});

	$('.popup-close').click(function (event) {
		$('.popup').removeClass('open');
		$('body').removeClass('lock-popup');
		body.style.paddingRight = '0px';
	});

	$('.contact-form__btn').click(function (event) {
		$('.popup').removeClass('open');
		$('body').removeClass('lock-popup');
		body.style.paddingRight = '0px';
	});
});

jQuery(function ($) {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 40) {
			$('.header').addClass('fixed');
		}
		else if ($(this).scrollTop() < 40) {
			$('.header').removeClass('fixed');
		}
	});
});

//Иницилизируем слайдер SWIPER
new Swiper('.testimonails-slider', {
	/*
	toplay: {
	  delay: 3000,
	  disableOnInteraction: false,        
	},
	*/
	initialSlide: 1,
	//Навигация
	//Буллеты, текущее положение, прогрессбар
	pagination: {
		el: '.swiper-pagination',

		//Буллеты
		clickable: true,
		//Динамические буллеты
		//dynamicBullets: true,
		/*
		//Кастомные буллеты
		renderBullet: function (index, className) {
			 return '<span class="' + className + '">' + (index + 1) + '</span>';
		},
		*/
	},

	//включение/отключения перетаскивания/свайпа на пк
	simulateTouch: true,
	//Чувствительность свайпа
	touchRatio: 1,
	//Угол срабатывания свайпа
	touchAngle: 45,
	//Курсор перетаскивания
	grabCursor: false,

	// Переключение при клике на слайд
	slideToClickedSlide: true,
});

$('.link-scroll').on('click', function () {

	let href = $(this).attr('href');

	$('html, body').animate({
		scrollTop: $(href).offset().top
	}, {
		duration: 370,   // по умолчанию «400» 
		easing: "linear" // по умолчанию «swing» 
	});

	$('.header__burger,.header__menu').removeClass('active');
	$('body').removeClass('lock');

	return false;
});

let isMobile = {
	Android: function () { return navigator.userAgent.match(/Android/i); },
	BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
	iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
	Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
	Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
	any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};
let body = document.querySelector('body');
if (isMobile.any()) {
	body.classList.add('touch');
	let arrow = document.querySelectorAll('.arrow');
	let subArrow = document.querySelectorAll('.sub-menu__arrow');
	for (i = 0; i < arrow.length; i++) {
		let thisLink = arrow[i].previousElementSibling;
		let subMenu = arrow[i].nextElementSibling;
		let thisArrow = arrow[i];

		thisLink.classList.add('parent');
		arrow[i].addEventListener('click', function () {
			subMenu.classList.toggle('open');
			thisArrow.classList.toggle('active');
		});
	}
} else {
	body.classList.add('mouse');
}