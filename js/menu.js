$(function () {
	var link = $('.m-nav-btn'),
		menu = $('.m-nav'),
		close = $('.close-nav');

		function active() {
			menu.toggleClass('m-nav__active');
			close.removeClass("remove")
			$(this).addClass("remove");
			close.addClass("active");
		}

		function noActive(){
			menu.toggleClass('m-nav__active');
			$(this).addClass("remove");
			link.removeClass("remove");
		}

	link.on('click', active);
	close.on('click', noActive);
})