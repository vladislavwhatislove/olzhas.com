$(document).ready(function(){
	$('.slider').slick({
		slidesToShow:2,
		autoplay:true,
		autoplaySpeed:5000,
		vertical:true,
	});
});

$(document).ready(function(){
	$('.header_burger').click(function(event){
		$('.header_burger,.nav__list,.navig').toggleClass('active');
		$('body').toggleClass('lock');
	});
});


$(window).scroll(function(){
      if ($(this).scrollTop() > 900) {
          $('.navig').addClass('fixed');
           $('.nav__logo__logo').addClass('fixed');
            $('.img11111').addClass('fixed');
             $('.nav__logo_number').addClass('fixed');
      } else {
          $('.navig').removeClass('fixed');
          $('.nav__logo__logo').removeClass('fixed');
          $('.img11111').removeClass('fixed');
          $('.nav__logo_number').removeClass('fixed');
      }
});