$(document).ready(function(){
	$(".btn-switch").click(function(event){
		event.preventDefault();
		$('.nab-mobile').toggleClass('nab-mobile-active');
	});

	$(".smooth").click(function(event){
		event.preventDefault();
		$('.nab-mobile').removeClass('nab-mobile-active');
	});
});
