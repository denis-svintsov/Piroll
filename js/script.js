$(elements).lazyLoadXT();
$(document).ready(function () {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

jQuery(function($) {
	        $(window).scroll(function(){
	            if($(this).scrollTop()>40){
	                $('.header').addClass('fixed');
	            }
	            else if ($(this).scrollTop()<40){
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

$('.content-head__link').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 370,   // по умолчанию «400» 
        easing: "linear" // по умолчанию «swing» 
    });

    return false;
});

let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};
		let body=document.querySelector('body');
if(isMobile.any()){
		body.classList.add('touch');
		let arrow=document.querySelectorAll('.arrow');
		let subArrow=document.querySelectorAll('.sub-menu__arrow');
	for(i=0; i<arrow.length; i++){
			let thisLink=arrow[i].previousElementSibling;
			let subMenu=arrow[i].nextElementSibling;
			let thisArrow=arrow[i];

			thisLink.classList.add('parent');
		arrow[i].addEventListener('click', function(){
			subMenu.classList.toggle('open');
			thisArrow.classList.toggle('active');
		});
	}
}else{
	body.classList.add('mouse');
}