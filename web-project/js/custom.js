//----------add active to navbar------------
$('.nav li a span').click(function(){
$('span').removeClass('act');
$(this).addClass('act');
});
//------------------------------------------
//-------------stop video when close modal---------
$('.close').click(function() {

	$('video')[1].pause(); //selects second video in the array(page) and pauses	
});
//--------------------------------------------------


        