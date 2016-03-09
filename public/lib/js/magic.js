/**
 * Custom JavaScript for our theme.
 *
 * Controls various style-related functionality.
 *
 * @package alignupnyc
 */
jQuery(document).ready(function($){

	/********************************************
	 * Change nav bar on scroll
	 ********************************************/
	$(window).on('scroll', function() {
		if($(window).scrollTop() > 100) {
			$('.navbar').addClass("navbar-light bg-white navbar-shadow");
			$('.navbar').removeClass("navbar-dark");
		} else {
			$('.navbar').removeClass("navbar-light bg-white navbar-shadow");
			$('.navbar').addClass("navbar-dark");
		}
	});

	/********************************************
	 * waypoints animation for home page tiles
	 ********************************************/
		//$("#home-tiles").addClass("opacity-0"); //hide on page load
	$("#home-tiles").waypoint(function() {
		$("#home-tiles").removeClass("opacity-0");
		$("#home-tile-1").addClass("fadeInLeft");
		$("#home-tile-2").addClass("fadeInUp");
		$("#home-tile-3").addClass("fadeInDown");
		$("#home-tile-4").addClass("fadeInRight");
	}, {offset: "50%"});

});