$(function(){  
// assign the slider to a variable  
var slider = $('#slider2').bxSlider({  
auto: true,  
pause: 5000,  
speed: 1000,  
mode: 'horizontal',  
prevText: '<',  
nextText: '>',  
pager: true,  
//easing: 'easeOutBounce',  
pagerCustom: '.bx-pager'  
});  
});