$(document).ready(function() {
	//small navigation bar reveal when scroll past header
	var mobNav = $("#mob-nav");
	var headerHeight = $("#header").height();


	console.log(headerHeight);

	$(window).scroll(function() {
		if($(window).scrollTop() > headerHeight) {
			//show nav bar
			mobNav.show();
		} else {
			mobNav.hide();
		}
	});

	//smooth scrolling
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing');
	});
});