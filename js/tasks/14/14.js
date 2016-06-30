// Task 1
// Create a dropdown list by a given select
(function($){
$.fn.dropdownList=function(){
	var $this=this;
	var $el=$this.children();

	$this.css({display:'none'});

	$('<div/>', {'class':'dropdown-list'}).appendTo('body');
	$this.appendTo('.dropdown-list');

	$('<div/>', {'class':'current', 'data-value':'','text':'menu'}).appendTo('.dropdown-list');



	$('<div/>',{'class':'options-container'}).css({
												position: 'absolute',
												display: 'none'
											}).appendTo('.dropdown-list');	


	for(var i=0;i<$el.length;i++){
		var dataValue="value-"+i;
		$('<div/>',{'class':'dropdown-item', 'data-value':dataValue, 'data-index':i, text: $this.children()[i].text}).appendTo('.options-container');
	 }


   $('.current').click(function(){
            $(this).html('menu');
            if($('.options-container').css('display') === 'none'){
                $('.options-container').css('display', '');
            }
            else{
                $('.options-container').css('display', 'none');
            }
        });

        $('.dropdown-item').click(function(){
            $('.options-container').css('display', 'none');
        });
   


	console.log($el[1].text)
	}
 }(jQuery));

 $('select').dropdownList();