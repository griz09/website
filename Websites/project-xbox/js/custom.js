//----------add active to navbar------------
// $('.nav li a span').click(function(){
// $('span').removeClass('act');
// $(this).addClass('act');
// });

$("#nav-content a").filter(function(){
    return this.href == location.href.replace(/#.*/, "");
}).addClass("act");



//------------------------------------------
//-------------stop video when close modal---------
$('.close').click(function() {

	$('video')[1].pause(); //selects second video in the array(page) and pauses	
});
//--------------------------------------------------
//---------------create zoom effect on hover by adding and removing classes----
$('.unzoom').hover(function(){
$(this).removeClass('unzoom').addClass('zoom');
}, function(){
$(this).removeClass('zoom').addClass('unzoom');
});
//----------------------------------------------------
//---------------section-5 video controls via custom buttons-------------
// var video = $('.button');

// $('#pauseButton').hide();

// $('#playButton').click(function(){
// 	video.play();
// 	$('#pauseButton').show();
// 	$(this).hide();
// });
// $('#pauseButton').click(function(){
// 	video.pause();
// 	$('#playButton').show();
// 	$(this).hide();
// });

//-------------------iframe youtube video javascript---------------------
var player;
function onYouTubePlayerAPIReady() {
    player = new YT.Player('video', {
      events: {
        'onReady': onPlayerReady
      }
    });
}
function onPlayerReady(event){
  event.target.stopVideo(); // stopVideo so video doesnt play on load. 
  $('#pause-button').hide();
    $("#play-button").on('click', function() {
      player.playVideo();
      $('#play-button').hide();
      $('#pause-button').show();
    });
    $("#pause-button").on('click', function() {
      player.stopVideo();
      $('#pause-button').hide();
      $('#play-button').show();
    });
  }
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//-----------------------------------------------------------------------

//---------------------------------------------------------------------
//----------------------------skrollr----------------------------------
    // var s = skrollr.init({
    //     render: function(data) {
    //         //Debugging - Log the current scroll position.
    //         $('.scroll').text(data.curTop);
    //     }
    // });

//-------------------- slide-in-out animation-----------------------------
$.fn.offScreen = function(distance){
		
	    var $t				= $(this),
	    	$w				= $(window),
	    	viewTop			= $w.scrollTop(),
	    	viewBottom		= viewTop + $w.height(),
	    	_top			= $t.offset().top - distance,
	    	_bottom		= $t.offset().top + $t.height() + distance;
   
   return {
     top: _bottom <= viewTop,
     bottom: _top >= viewBottom
   }
	
};
    


var win = $(window);

var allMods = $(".text-image , .inner-content-wrapper");

allMods.each(function(i, el) {
  var el = $(el);
  if (!el.offScreen(10).bottom) {
    el.addClass("already-visible"); 
  } 
});

win.on("scroll resize",function(event) 
{
  
  allMods.each(function(i, el) {
    var el = $(el);
    if (!el.offScreen(10).top && !el.offScreen(10).bottom) 
    {
      el.removeClass("already-visible off-screen-top off-screen-bottom"); 
      el.addClass("come-in"); 
    } 
    else
    {
    
        if(el.offScreen(150).top)
        {
            el.addClass("off-screen-top"); 
        }
        else
        {
            el.addClass("off-screen-bottom"); 
        }
    }
  });//allMods.each()
  
});//win.scroll()

win.trigger("scroll");



//-----------------------------------
 