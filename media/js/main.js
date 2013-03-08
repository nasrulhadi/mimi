
function is_touch_device() {
  return !!('ontouchstart' in window);
}

jQuery(window).load(function() {
	
	$('.doc-loader').fadeOut('slow');
	
	displayHints();	
	
	/******************************************************************************/
	/*  SLIDERS                                                                   */
	/******************************************************************************/
	$('#testimonials-slides').carouFredSel({	
		responsive: true,
		auto: false,
		align: 'center',
		height: 'variable',
		scroll: 1,	
		prev: '#testimonials-prev',
		next: '#testimonials-next',
		mousewheel: true,
		swipe: {
			onMouse: true,
			onTouch: true
		}, items: {
			height: 'variable'
		}
	});	
	
	$('#home-slides').carouFredSel({	
		responsive: true,
		auto: false,
		align: 'center',
		height: 'variable',
		scroll: 1,		
		next: '#home-next',
		mousewheel: true,
		swipe: {
			onMouse: true,
			onTouch: true
		}, items: {
			height: 'variable'
		}
	});	
	
	$('#about-left-slides').carouFredSel({	
		responsive: true,
		auto: false,
		align: 'center',
		height: 'variable',
		scroll: 1,		
		prev: '#about-left-prev',
		next: '#about-left-next',
		mousewheel: true,
		swipe: {
			onMouse: true,
			onTouch: true
		}, items: {
			height: 'variable'
		}
	});	
	
	$('#about-middle-slides').carouFredSel({	
		responsive: true,
		auto: false,
		align: 'center',
		height: 'variable',
		scroll: 1,		
		prev: '#about-middle-prev',
		next: '#about-middle-next',
		mousewheel: true,
		swipe: {
			onMouse: true,
			onTouch: true
		}, items: {
			height: 'variable'
		}
	});
	
	$('#about-right-slides').carouFredSel({	
		responsive: true,
		auto: false,
		align: 'center',
		height: 'variable',
		scroll: 1,		
		prev: '#about-right-prev',
		next: '#about-right-next',
		mousewheel: true,
		swipe: {
			onMouse: true,
			onTouch: true
		}, items: {
			height: 'variable'
		}
	});
	
	$('#news-slides').carouFredSel({	
		responsive: true,
		auto: false,
		align: 'center',
		height: 'variable',
		scroll: 1,	
		prev: '#news-prev',
		next: '#news-next',
		mousewheel: false,
		swipe: {
			onMouse: false,
			onTouch: false
		}, items: {
			height: 'variable'
		}
	});	
	
	/******************************************************************************/
	/*   BUTTON HOVER                                                             */
	/******************************************************************************/
	if(!(is_touch_device())){
		jQuery('#testimonials-prev, #testimonials-next, #home-next, #about-left-prev, #about-left-next, #about-middle-prev, #about-middle-next, #about-right-prev, #about-right-next, #news-prev, #news-next, .read-more').hover(function(){
			jQuery(this).css('background-position', 'left bottom');
		}, function() {
			jQuery(this).css('background-position', 'left top');
		});	
	}
	else {
		jQuery('#testimonials-prev, #testimonials-next, #home-next, #about-left-prev, #about-left-next, #about-middle-prev, #about-middle-next, #about-right-prev, #about-right-next, #news-prev, #news-next, .read-more').bind('touchstart touchend', function(e) {
			jQuery(this).toggleClass('hover_effect');
		});	
	}
	if(!(is_touch_device())){
		jQuery('.submit-btn, #subscribeButton').hover(function(){
			jQuery(this).css('background-color', '#dc543f');
		}, function() {
			jQuery(this).css('background-color', '#f05c45');
		});
	}
	else {
		jQuery('.submit-btn, #subscribeButton').bind('touchstart, touchend', function(e) {
			jQuery(this).toggleClass('hover_effect');
		});		
	}
	if(!(is_touch_device())){
		jQuery('.news h2').hover(function(){
			jQuery(this).css('color', '#ac4636');
		}, function() {
			jQuery(this).css('color', '#e95b37');
		});
	}
	
	/******************************************************************************/
	/*  PHOTOS ITEM IMAGE HOVER                                                   */
	/******************************************************************************/
	jQuery("ul.gallery li .item-overlay").hide();
	
	if( is_touch_device() ){
		jQuery("ul.gallery li").click(function(){
												  
			var items_before = jQuery(this).prevAll("li").length;
			var opacity = jQuery(this).find(".item-overlay").css("opacity");
			var display = jQuery(this).find(".item-overlay").css("display");
			
			if ((opacity == 0)||(display == "none")) {
				jQuery(this).find(".item-overlay").fadeTo(300, 0.9);
			} else {
				jQuery(this).find(".item-overlay").fadeTo(300, 0);
			}
				
			jQuery(this).parent().find("li:lt(" + items_before + ") .item-overlay").fadeTo(300, 0);
			jQuery(this).parent().find("li:gt(" + items_before + ") .item-overlay").fadeTo(300, 0);
		});	

	}
	else {
			jQuery("ul.gallery li").hover(function() {
					jQuery(this).find(".item-overlay").fadeTo(250, 0.9);
				}, function() {
					jQuery(this).find(".item-overlay").fadeTo(250, 0);		
			});
		
	}
	
	// countdown
	var year = "2013";
	var month = "3";
	var day = "14";
	var austDay = new Date();
	austDay = new Date(year, month -1, day);
	$('#countdown').countdown({
		until: austDay,
		format: "dHMS",
		labels: ['','','','','','',''],
		digits:['0','1','2','3','4','5','6','7','8','9']
	});
});

/******************************************************************************/
/*  HELPER METHODS                                                            */
/******************************************************************************/
var displayHints = function()
{
	if(jQuery().attachHint) {		
		jQuery('#subscriberEmail').attachHint('Enter your email to subcribe:');
	}
}
var ResetInput = function(){
    jQuery('input').each(function() {
        jQuery(this).val('').text('');
    });	
};
