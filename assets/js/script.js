$(document).ready(function() {

  $('body').css('display', 'none');
  $('body').fadeIn(1500);

  $('.link').click(function() {

  event.preventDefault();

  newLocation = this.href;

  $('body').fadeOut(1500, newpage);

  });

  function newpage() {

  window.location = newLocation;

  }


  //Smooth-scrolling between links
  $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

  //Animations via Animate.css
  $(".arrow").addClass("animated bounce");
  $(".cal-icon").addClass("animated infinite pulse");
  $(".activist").addClass("animated infinite pulse");

});
