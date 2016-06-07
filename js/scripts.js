$(document).ready(function() {

	$('body').addClass('js');
	
	var $menu = $('#menu'),
    $menulink = $('.menu-link');
  
	$menulink.click(function() {
		
		$menulink.toggleClass('active');
		$menu.toggleClass('active');
		return false;
	  
	});
	
		var $search_link=$('#search_link');
		var $nav_search=$('#nav_search')
		
	$search_link.click(function(event){
		console.log('44');
		// event.preventDefaut();
		$nav_search.toggleClass('search_show');
	
	});
	
	  
	

});
