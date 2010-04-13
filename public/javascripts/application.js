// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
$(document).ready(function() {
	//hover effect for header
	$("#home a").hover(
                function(){$("#home_img").hide(); $("#home_img_hover").show();},
                function(){$("#home_img").show(); $("#home_img_hover").hide();}
                );
	$("#aboutus a").hover(
		function(){$("#aboutus_img").hide(); $("#aboutus_img_hover").show();},
                function(){$("#aboutus_img").show(); $("#aboutus_img_hover").hide();}
		);
	$("#contactus a").hover(
		function(){$("#contactus_img").hide(); $("#contactus_img_hover").show();},
                function(){$("#contactus_img").show(); $("#contactus_img_hover").hide();}
		);
	
	
	
	
	
	
});