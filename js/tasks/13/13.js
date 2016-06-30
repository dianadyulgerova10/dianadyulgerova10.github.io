//Task 1
// Create a function that takes a selector and COUNT, then generates inside a UL with COUNT LIs:
// The UL must have a class items-list
// Each of the LIs must:
// have a class list-item
// content "List item #INDEX"
// The indices are zero-based
// If the provided selector does not selects anything, do nothing
// Throws if
// COUNT is a Number, but is less than 1
// COUNT is missing, or not convertible to Number
// Example:
// Valid COUNT values:
// 1, 2, 3, '1', '4', '1123'
// Invalid COUNT values:
// '123px' 'John', {}, []
console.log("Problem 1");

function generate(selector,cnt){
	var selector=$(selector);
	var li=$('<li / >');
	var ul=$('<ul>');
	
	try{
		if(isNaN(parseFloat(cnt))|| cnt===undefined || cnt<=1){			
			throw Error;
		}
	}
	catch(e){
		return console.log("Error!")
	}

	ul.addClass('items-list');
	selector.append(ul);

	for(var i=0; i <cnt; i++){
           ul.append('<li class="list-item">' +  'List item #' + i + '</li>');        
        }       
	}

generate('#problem1',10);

// Task 2
// Create a function that takes a selector and:
// Finds all elements with class button or content within the provided element
// Change the content of all .button elements with "hide"
// When a .button is clicked:
// Find the topmost .content element, that is before another .button and:
// If the .content is visible:
// Hide the .content
// Change the content of the .button to "show"
// If the .content is hidden:
// Show the .content
// Change the content of the .button to "hide"
// If there isn't a .content element after the clicked .button and before other .button, do nothing
// Throws if:
// The provided ID is not a jQuery object or a string
// Use jQuery

console.log("Problem 2");

function find(selector){
	var select=$(selector);
	var btns=select.find('.btn');
	var btn=$('.btn');
	var content=$('.content');

	try{
		if(!selector || !(select.length) || typeof selector !== 'string'){
			throw Error;
		}
	}
	catch(e){
		return console.log("Error!")
	}

	btns.html('hide');	
	
	btn.on('click', function(){
		if(($(this).nextUntil($('.btn'))).length<($(this).nextUntil(($('.content')))).length){
			return 0;
		}
		$(this).nextAll('.content').first().toggleClass("hide");
		})
		.on('click',function(){
			if(($(this).nextUntil($('.btn'))).length<($(this).nextUntil(($('.content')))).length){
			return 0;
			}
			$(this).text(function(i,v){
				return v==="Show" ? "Hide" : "Show"
			})
		});     
}

find('#problem2');
