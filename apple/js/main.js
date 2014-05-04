var $body = $('body'),
	productbrowser = $('#pb-mac');

$(document).ready(function() {

	var slide = $('.ul-slider');
		
	$(slide).eq(0).addClass('active'); //add active class		
});

function init() {
	
	// start up after 2sec no matter what
    window.setTimeout(function(){
        start();
    }, 2000);
}

// fade in experience
function start() {
	
	$('html').removeClass("loading");
	
	var products = $(".ul-slider.active li");
		tl = new TimelineMax();
	tl.staggerFrom(products, 0.5, {css:{y:'-=150',x:'-30',opacity:'0'}, ease:Bounce.easeOut }, 0.05);
	
}

 $(window).load(function() {
	
// 	// fade in page
 	init();
	
 });

