$(function () {
	var offset = $(document).scrollTop();
	if (offset>200) {
		$('header .inner').addClass('fixed_top');
	} else {
		$('header .inner').removeClass('fixed_top');
	}
	$(document).on('scroll', function(){
		var offset = $(document).scrollTop();
		if (offset>200) {
			$('header .inner').addClass('fixed_top');
		} else {
			$('header .inner').removeClass('fixed_top');
		}
	});	
	$('.services .block .item .name').on('click', function(){
		$(this).parent().children('.info').slideToggle();
	});
	$('.mains .block .item .hd').on('click', function(){
		location.href=$(this).attr('url');
	});

	$('#main_slider .item .url a').hover(
		function() {
			$(this).parents('.item').addClass('blur');
		}, function() {
			$(this).parents('.item').removeClass('blur');
		}
	);
});