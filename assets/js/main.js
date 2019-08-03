	$('.header-navbar__hamburger').on('click', function(){
		$(this).toggleClass('active');
		$('header_navbar__list').
		stop(true, true).
		fadeToggle(500);
	});
