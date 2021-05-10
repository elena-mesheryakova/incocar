$(document).ready(function () {
	$('.header__bottom-burger').click(function() {
        $('.header__bottom-nav').toggleClass('active');
        $('.header__bottom-burger').toggleClass('active');
    });
});
