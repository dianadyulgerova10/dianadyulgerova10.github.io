$(document).ready(function() {
	$('#clothing').mouseover(function() {
						$('.drop-down').css("display","block");
						})
				.mouseout(function(){
					$('.drop-down').css("display","none");
						})
	;
})