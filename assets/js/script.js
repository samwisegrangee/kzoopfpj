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


  //Modal Drop Downs by Id: Make sure the <a>'s all have id="[modal tag]-open"
  //$(function() {
  //  $("[id$=-open]").click(function() {
  //    var id = this.id;
  //    var targetId = id.replace('-open', '');
  //    var $target = $('#' + targetId);
  //    $($target).css("display", "block");
  //    $($target).css("overflow-y", "auto");
  //    $("body").css("overflow", "hidden");
  //    $(".modal-container").css("display", "block");
  //    $("html, body").animate({
  //      scrollTop: 0
  //    }, "slow"); //
  //  });
  //});

  //$(function() {
  //  $(".close").click(function(e) {
  //    e.preventDefault();
  //    $(".modal").css("display", "none");
  //    $(".modal").css("overflow-y", "");
  //    $("body").css("overflow", "");
  //    window.location.hash = $("#trigger").attr("id"); //
  //  });
  //});


});

$(".arrow").addClass("animated bounce");
$(".cal-icon").addClass("animated infinite pulse");
$(".activist").addClass("animated infinite pulse");
