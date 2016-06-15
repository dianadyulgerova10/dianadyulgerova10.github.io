// Problem 1. Exchange if greater
// Write an if statement that takes two double variables a and b and exchanges their values if the first one is greater than the second.
// As a result print the values a and b, separated by a space.

function ifGreater(a,b){

	if(b<a){
		var c=a;
		a=b;
		b=c;
		console.log(a + " " + b);
	}
	else{
		return console.log(a + " " + b);
	}
}
ifGreater(8,7);
ifGreater(3,14);

// Problem 2. Multiplication Sign
// Write a script that shows the sign (+, - or 0) of the product of three real numbers, without calculating it.
// Use a sequence of if operators.

function getSign(a,b,c){
	if(a==0 || b==0 || c==0){
		return console.log("0");
	}
	else if((a<0 && b>0 && c>0) || (a>0 && b>0 && c>0) || (a>0 && b>0 && c<0)){
		return console.log("-");
	}
	else{
		return console.log("+");
	}
}

getSign(-1,5,8);
getSign(3,0,9);
getSign(-5,6,-7);

// Problem 3. The biggest of Three
// Write a script that finds the biggest of three numbers.
// Use nested if statements.

function biggestNumber(a,b,c){
	 var bigNumber;
	if(a>b){
		bigNumber=a;
		if(bigNumber>c){
			return console.log(bigNumber);
		}
		else{
			bigNumber=c;
			return console.log(bigNumber);
		}
	}
	else{
		bigNumber=b;
		if (bigNumber>c) {
			return console.log(bigNumber);
		}
		else{
			bigNumber=c;
			if(bigNumber>a){
				return console.log(bigNumber);
			}
			else{
				bigNumber=a;
				return console.log(bigNumber);
			}
		}
	}
}
biggestNumber(5,8,10);
biggestNumber(100,54,6);
biggestNumber(7,15,4);

// Problem 4. Sort 3 numbers
// Sort 3 real values in descending order.
// Use nested if statements.
// Note: Don’t use arrays and the built-in sorting functionality.

function sortNumbers(a,b,c){
	var a1=a;
	var b1=b;
	var c1=c;

	if(a>b && a>c){
		if(b>c){
			console.log(a + " " + b + " " + c);
		}
		else console.log(a + " " + c + " " + b);
	}
	else if(b>a && b>c){
		if(a>c){
			console.log(b + " " + a + " " + c);
		}
		else console.log(b + " " + c + " " + a);
	}
	else if(c>a && c>b){
		if(b>a){
			console.log(c + " " + b + " " + a);
		}
		else console.log(c + " " + a + " " + b);
	}
}

sortNumbers(4,2,1);
sortNumbers(4,2,10);
sortNumbers(4,12,1);

// Problem 5. Digit as word
// Write a script that asks for a digit (0-9), and depending on the input, shows the digit as a word (in English).
// Print “not a digit” in case of invalid input.
// Use a switch statement.

function getWord(number){
	switch(number){
		case 0: console.log("Zero")
		 break;
		case 1: console.log("One")
		 break;
		case 2: console.log("Two")
		 break;
		case 3: console.log("Three")
		 break;
		case 4: console.log("For")
		 break;
		case 5: console.log("Five")
		 break;
		case 6: console.log("Six")
		 break;
		case 7: console.log("Seven")
		 break;
		case 8: console.log("Eight")
		 break;
		case 9: console.log("Nine")
		 break;
		default: console.log("Not a digit")
		 break; 
	}
}

getWord(1);
getWord(10);
getWord(5);

