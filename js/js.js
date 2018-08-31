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
$(function($) {
	var						 
		$window = $(window), 						 
		$target = $("#object"),						 
		$h = 900; 					 
		$window.on('scroll', function() {									
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;									
		if (scrollTop > $h) {						 
			$target.addClass("slideUp");						 
				} else {     
					$target.removeClass("slideUp");
					}
					});				
});	
/*Переливающиеся фон-градиент*/
var colors = new Array(
  [62,35,255],
  [60,255,60],
  [255,35,98],
  [45,175,230],
  [255,0,255],
  [255,128,0]);

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient()
{
  
  if ( $===undefined ) return;
  
var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "rgb("+r1+","+g1+","+b1+")";

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "rgb("+r2+","+g2+","+b2+")";

 $('#gradient').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
  
  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    
    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
  }
}

setInterval(updateGradient,10);
/*Плавный скролл*/

$(document).ready(function(){
    $('.anim-menu about-one').click( function(){ 
	var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) { 
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 10); 
        }
	    return false;
    });
});