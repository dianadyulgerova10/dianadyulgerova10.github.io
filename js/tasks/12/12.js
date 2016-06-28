// Task 1
// Create a function that takes an id or DOM element and:
// If an id is provided, select the element
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
// The provided DOM element is non-existant
// The id is either not a string or does not select any DOM element
console.log("Problem 1");

var input=document.getElementById('container');
changeContent(input);

function changeContent(input){
	try{
	if(typeof input !== 'string' && !(input instanceof HTMLElement)){
		throw Error;
	}
	if(typeof input === undefined){
		throw Error;
	}}
	catch(e){
		return console.log("Error!")
	}

	var buttons=document.getElementsByClassName('btn');
	var contents=document.getElementsByClassName('content');


for (var i=0; i <buttons.length; i++){		
		
		buttons[i].innerHTML='hide';

		buttons[i].addEventListener('click', function(event){
			console.log(event.target)
			var previous=(event.target).previousElementSibling;

			while(previous){
				if(previous.className==='content'){
				
					if(previous.style.display==='none'){
						previous.style.display='';
						(event.target).innerHTML='hide';
					}
					else{
						previous.style.display='none';
						(event.target).innerHTML='show';
					}
					
					break;					
				}
				else{
					previous=previous.previousElementSibling;					
				}
			}		
		})
		}
	}



