jQuery(document).ready(function(){
	$('.slider').slick({
	  dots: true,
	  infinite: true,
	  speed: 500,
	  fade: true,
	  autoplay: true,
	  autoplaySpeed: 2500,
	  cssEase: 'linear',
	  arrows: true,
	  draggable: true,
	  	  
	});	
});
$(function() {
	var						 
		$window = $(window), 						 
		$target = $("#nav"),						 
		$h = 180; // Задаю координаты верха на котором надо фиксировать						 
		$window.on('scroll', function() {									
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;									
		if (scrollTop > $h) {						 
			$target.addClass("move-header");						 
				} else {     
					$target.removeClass("move-header");
					}
					});	
});
$(function($) {
	var						 
		$window = $(window), 						 
		$target = $("#logo-move"),						 
		$h = 180; 					 
		$window.on('scroll', function() {									
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;									
		if (scrollTop > $h) {						 
			$target.addClass("logo-size");						 
				} else {     
					$target.removeClass("logo-size");
					}
					});				
});	
$(function($) {
	var						 
		$window = $(window), 						 
		$target = $("#nav-ancor"),						 
		$h = 180; 					 
		$window.on('scroll', function() {									
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;									
		if (scrollTop > $h) {						 
			$target.addClass("ancor-menu-position");						 
				} else {     
					$target.removeClass("ancor-menu-position");
					}
					});				
});		
$(function () {
  $('[data-toggle="popover"]').popover()
});
$("img").mousedown(function(){
    return false;
});
								 