jQuery(document).ready(function() {
	//hover effect for header
	jQuery("#home a").hover(
		function(){$("#home_img").attr({src:"../images/images/btn_home_over.jpg"})},
		function(){$("#home_img").attr({src:"../images/images/btn_home.jpg"})}
		);
	jQuery("#aboutus a").hover(
		function(){$("#aboutus_img").attr({src:"images/images/btn_about_over.jpg"})},
		function(){$("#aboutus_img").attr({src:"images/images/btn_about.jpg"})}
		);
	jQuery("#contactus a").hover(
		function(){$("#contactus_img").attr({src:"images/images/btn_contacts_over.jpg"})},
		function(){$("#contactus_img").attr({src:"images/images/btn_contacts.jpg"})}
		);
	
	
	
	
	
	
});