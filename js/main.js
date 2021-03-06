$(document).ready(function() {


	// Scroll Events
	$(window).scroll(function(){

		var wScroll = $(this).scrollTop();

		// Activate menu
		if (wScroll > 20) {
			$('#main-nav').addClass('active');
			$('#main-nav').addClass('animated fadeInDown');
			$('#slide_out_menu').addClass('scrolled');
		}
		else {
			$('#main-nav').removeClass('active');
			$('#main-nav').removeClass('animated fadeInDown');
			$('#slide_out_menu').removeClass('scrolled');
		};


		//Scroll Effects

	});


	// Navigation
	$('#navigation').on('click', function(e){
		e.preventDefault();
		$(this).addClass('open');
		$('#slide_out_menu').toggleClass('open');

		if ($('#slide_out_menu').hasClass('open')) {
			$('.menu-close').on('click', function(e){
				e.preventDefault();
				$('#slide_out_menu').toggleClass('animated fadeOut');
				$('#slide_out_menu').removeClass('open');
			})
			$('#slide_out_menu').removeClass('animated fadeOut');
		}
	});


	// Price Table
	var individual_price_table = $('#price_tables').find('.individual');
	var company_price_table = $('#price_tables').find('.company');


	$('.switch-toggles').find('.individual').addClass('active');
	$('#price_tables').find('.individual').addClass('active');

	$('.switch-toggles').find('.individual').on('click', function(){
		$(this).addClass('active');
		$(this).closest('.switch-toggles').removeClass('active');
		$(this).siblings().removeClass('active');
		individual_price_table.addClass('active');
		company_price_table.removeClass('active');
	});

	$('.switch-toggles').find('.company').on('click', function(){
		$(this).addClass('active');
		$(this).closest('.switch-toggles').addClass('active');
		$(this).siblings().removeClass('active');
		company_price_table.addClass('active');
		individual_price_table.removeClass('active');			
	});


	// Wow Animations
    wow = new WOW(
      {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
    }
    )
    wow.init();


    // Menu For Xs Mobile Screens
    if ($(window).height() < 450) {
    	$('#slide_out_menu').addClass('xs-screen');
    }

    $(window).on('resize', function(){
	    if ($(window).height() < 450) {
	    	$('#slide_out_menu').addClass('xs-screen');
	    } else{
	    	$('#slide_out_menu').removeClass('xs-screen');
	    }
    });


    // Magnific Popup
    $(".lightbox").magnificPopup();


	$('.ankr').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $(this).attr('href') ).offset().top
	    }, 1000);
	    return false;
	});


    $(window).bind('load resize', function(){
	    if ($(window).width() < 667) {
	    	$('section.bg-mobile').css({'background-image'   : 'url("images/placeit.jpg")',
	    		       				   'background-position' : 'top center',
	    		       				   'background-size'     : 'cover',
	    		       				   'background-repeat'     : 'no-repeat',
	    		       				   'background-blend-mode'     : 'overlay',
									   'background-color'     : '#fff',
	    		       				   'background-color'     : 'hsla(360, 100%, 0%, 0.8)'
	    		       					});
	    } else{
	    	$('section.bg-mobile').css({'background-image'   : 'none',
	    								'background-color'     : '#fff'
	    							     });
	    }
    });

    // $(window).bind('load resize', function(){
	   //  if ($(window).width() > 667) {
	   //  	$('#contact-header').css({'background-image'   : 'url("images/rawpixel-com-252127.png")',
	   //  		       				   'background-position' : 'top center',
	   //  		       				   'background-size'     : 'cover',
	   //  		       				   'background-repeat'     : 'no-repeat',
	   //  		       				   'background-blend-mode'     : 'overlay',
				// 					   'background-color'     : '#fff',
	   //  		       				   'background-color'     : 'hsla(360, 100%, 0%, 0.5)'
	   //  		       					});
	   //  } else{
	   //  	$('#contact-header').css({'background-image'   : 'none',
	   //  								'background-color'     : '#fff'
	   //  							     });
	   //  }
    // });

});









