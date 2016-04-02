// скроллер
$(document).ready(function(){

	$(window).scroll(function(){ // отображение/угасание кнопки
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});
	 
	$('.scrollup').click(function(){ // вверх 
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});
 
});
