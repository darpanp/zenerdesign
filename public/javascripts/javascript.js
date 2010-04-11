$(document).ready(function() {
	//hover effect for header
	$("#home a").hover(
		function(){$("#home_img").attr({src:"images/images/btn_home_over.jpg"})},
		function(){$("#home_img").attr({src:"images/images/btn_home.jpg"})}
		);
	$("#aboutus a").hover(
		function(){$("#aboutus_img").attr({src:"images/images/btn_about_over.jpg"})},
		function(){$("#aboutus_img").attr({src:"images/images/btn_about.jpg"})}
		);
	$("#contactus a").hover(
		function(){$("#contactus_img").attr({src:"images/images/btn_contacts_over.jpg"})},
		function(){$("#contactus_img").attr({src:"images/images/btn_contacts.jpg"})}
		);
	
	
	
	
	
	
});