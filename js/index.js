	//  =========================================================
	//  search bar
	//  =========================================================
	$(document).ready(function(){
		$(".default_option").click(function(){
		  $(".dropdown ul").addClass("active");
		});

		$(".dropdown ul li").click(function(){
		  var text = $(this).text();
		  $(".default_option").text(text);
		  $(".dropdown ul").removeClass("active");
		});
	});
	
	$(document).ready(function(){
		$('.hero-slider').slick({
		  arrows: true,
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  appendArrows: $(".hero-container"),
		  prevArrow: '<button type="button" class="slick-prev">Previous</button>',
		  nextArrow: '<button type="button" class="slick-next">Next</button>',
		  responsive: [
			{
			  breakpoint: 768,
			  settings: {
				arrows: true,
				dots: false
			  }
			}
		  ]
		});
	  });
	  
	  

// =====================================================
	// BACK TO TOP BUTTON
	// =====================================================
	function scrollToTop() {
		$('html, body').animate({
			scrollTop: 0
		}, 500, 'easeInOutExpo');
	}

	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 100) {
			$('#toTop').fadeIn('slow');
		} else {
			$('#toTop').fadeOut('slow');
		}
	});

	$('#toTop').on('click', function () {
		scrollToTop();
		return false;
	});

	// =====================================================
	// NAVBAR
	// =====================================================
	$(window).on('scroll load', function () {

		if ($(window).scrollTop() >= 1) {
			$('.main-header').addClass('active');
		} else {
			$('.main-header').removeClass('active');
		}

	});

	// Sticky nav
	$('.sticky-nav').stick_in_parent({
		offset_top: 0
	});

	// =====================================================
	// STICKY SIDEBAR SETUP
	// =====================================================
	$('#mainContent, #sidebar').theiaStickySidebar({
		additionalMarginTop: 90,
		updateSidebarHeight: false,
	});


	// =====================================================
	// FAQ ACCORDION
	// =====================================================
	function toggleChevron(e){
		$(e.target).prev('.card-header').find('i.indicator').toggleClass('icon-minus icon-plus');
	}
	$('.faq-accordion').on('hidden.bs.collapse shown.bs.collapse', toggleChevron);

