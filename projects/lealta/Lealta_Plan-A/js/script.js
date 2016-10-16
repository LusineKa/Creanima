jQuery(document).ready(function () {
	$('input.input_action').on('focus', function(){
		$(this).prev("span").css({display: 'block'});
		$(this).addClass('transparent_placeholder');
	});
	$('input.input_action').on('focusout', function(){
		if($(this).val().length == 0) {
			$(this).prev("span").css({display: 'none'});
			$(this).removeClass('transparent_placeholder');
		} else {
			$(this).prev("span").css({display: 'block'});
			$(this).addClass('transparent_placeholder');
		}
	});
});