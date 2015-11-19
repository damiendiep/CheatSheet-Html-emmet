$('a[href^="#"]').click(function(){
	var contact = $(this).attr("href");

	$('html, body').animate({
		scrollTop:$(contact).offset().top
	}, 'slow');
	return false;
});