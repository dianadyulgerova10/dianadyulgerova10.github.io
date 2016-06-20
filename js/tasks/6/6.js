// Problem 1. English digit
// Write a function that returns the last digit of given integer as an English word.
console.log("Problem 1");

function lastDigit(number){
	var str=number.toString();
	var lastNumb=str[str.length-1];	
	var last=Number(lastNumb);

	switch(last){
		case 0: return console.log("Zero")
		 break;
		case 1: return console.log("One")
		 break;
		case 2: return console.log("Two")
		 break;
		case 3: return console.log("Three")
		 break;
		case 4: return console.log("Four")
		 break;
		case 5: return console.log("Five")
		 break;
		case 6: return console.log("Six")
		 break;
		case 7: return console.log("Seven")
		 break;
		case 8: return console.log("Eight")
		 break;
		case 9: return console.log("Nine")
		 break;
		default: return console.log("Not a digit")
		 break; 
	}
}

lastDigit(1233);

// Problem 2. Reverse number
// Write a function that reverses the digits of given decimal number.
console.log("Problem 2");

function reverseNumber(number){
	var str=number.toString();
	var arr=[];
	for(var i=str.length-1; i>=0; i--){
		arr.push(str[i]);
	}
	return console.log(arr.join(""));
}

reverseNumber(1234);

// Problem 3. Occurrences of word
// Write a function that finds all the occurrences of word in a text.
// The search can be case sensitive or case insensitive.
// Use function overloading.
console.log("Problem 3");

function occurresncesOfWord(word,isCaseSensitive){
	var text="Write a function that and finds all the AND occurrences of and";
      
    if(isCaseSensitive===true){
            re = new RegExp('\\b' + word + '\\b', "gi");
    }
    else{
    	var re = new RegExp('\\b' + word + '\\b', "g");
    }
 	return text.match(re);
}

console.log(occurresncesOfWord("and",false));
console.log(occurresncesOfWord("and",true));

// Problem 4. Number of elements
// Write a function to count the number of div elements on the web page
console.log("Problem 4");

function countDiv(){
	  return console.log(document.querySelectorAll('div').length)
}
countDiv();

