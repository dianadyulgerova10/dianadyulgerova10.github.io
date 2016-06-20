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
lastDigit(45399);

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
	  return console.log(document.querySelectorAll('div').length);
}
countDiv();

// Problem 5. Appearance count
// Write a function that counts how many times given number appears in given array.
// Write a test function to check if the function is working correctly.
console.log("Problem 5");

function countNumbers(number, arr){
	number= number || Number();
	arr= arr || [];
	var cnt=0;

	for(var i=0; i<=arr.length;i++){		
		if(arr[i]==number){
			cnt++;
		}		
	}
	console.log(cnt);
}

countNumbers(5,[1,2,3,5,6,7,4,5,5,5]);
countNumbers(1,[1,2,343,5,6,27,1,2,1,4,5,51,5]);

// Problem 6. Larger than neighbours
// Write a function that checks if the element at given position in given array of integers is bigger than its two neighbours (when such exist).
console.log("Problem 6");

function isBigger(index,arr){
		index= index || Number();
		arr=arr || [];

		if(index==0 || index>=arr.length){
			console.log("No neighbours")
		}
		else{
			if(arr[index]>arr[index+1] && arr[index]>arr[index-1]){
				console.log("Bigger");
			}
			else{
				console.log("Not bigger")
			}
		}
}

isBigger(3,[4,5,6,17,8,3,23,5,2,5]);
isBigger(3,[4,5,6,1,8,3,2,5,2,5]);
isBigger(0,[4,5,6,17,8,3,23,5,2,5]);

// Problem 7. First larger than neighbours
// Write a function that returns the index of the first element in array that is larger than its neighbours or -1, if there’s no such element.
// Use the function from the previous exercise.
console.log("Problem 7");

function firstBigger(arr){
	arr= arr || [];

	for(var i=1; i<=arr.length-1; i++){
		if(arr[i]>arr[i+1] && arr[i]>arr[i-1]){
			break;
		}
	}
	if(i>arr.length-1){
		return -1;
	}
	else{
		return i;
	}
}

console.log(firstBigger([3,4,4,7,7,5]));
console.log(firstBigger([3,4,44,7,7,5]));
