// Task 1
// Create a function that takes an id or DOM element and an array of contents
// If an id is provided, select the element
// Add divs to the element
// Each div's content must be one of the items from the contents array
// The function must remove all previous content from the DOM element provided

// Throws if:
// The provided first parameter is neither string or existing DOM element
// The provided id does not select anything (there is no element that has such an id)
// Any of the function params is missing
// Any of the function params is not as described
// Any of the contents is neither string nor number
// In that case, the content of the element must not be changed


var element=document.getElementById('change');
var arr=[1,2,3,4,5,6,7];
var undef;

 function checkIfUndefined(input){
      if (input === undefined){
            throw Error
        }
    }
function validateArray(input){
     if (Array.isArray(input)){
        var i, len;
         for (i = 0; len = input.length, i < len; i++) {
            checkIfUndefined(input[i]);
              if (typeof input[i] !== 'string'){
                  if (typeof input[i] !== 'number'){
                     throw Error
                  }
              }if (typeof input[i] !== 'number'){
                 if (typeof input[i] !== 'string'){
                     throw Error
                  }
              }
            }
        }else{
            throw Error
        }
    }

function changeContent(el, arr){
	try{
		validateArray(arr);
		checkIfUndefined(el);

		el.innerHTML='';
		var fragment=document.createDocumentFragment();
		for(var i=0;i<arr.length;i++){
			var div=document.createElement('div');
			div.innerHTML=arr[i];
			fragment.appendChild(div);
		}
		el.appendChild(fragment);
	}
	catch(e){
		return console.log("Error");
	}
}

changeContent(element,arr);
changeContent(undef);