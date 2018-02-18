jQuery(document).ready(function() {
	jQuery('ul.main-menu').superfish();
	jQuery(function() {
		// Dropdown toggle
		jQuery('.togglebar').click(function(){
		  jQuery('.responsive-menu').toggle();
		});
		jQuery(document).click(function(e) {
		  var target = e.target;
		  if (!jQuery(target).is('.togglebar') && !jQuery(target).parents().is('.togglebar')) {
		    jQuery('.responsive-menu').hide();
		  }
		});
	});
	jQuery('menu').on('mouseover',function(){
		jQuery('menu').css('height','200px');
	});
	jQuery('menu').on('mouseout',function(){
		jQuery('menu').css('height','40px');
	});
});