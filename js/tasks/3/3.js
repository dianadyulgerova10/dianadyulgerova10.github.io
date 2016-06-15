// Problem 1. Exchange if greater
// Write an if statement that takes two double variables a and b and exchanges their values if the first one is greater than the second.
// As a result print the values a and b, separated by a space.
console.log("Problem 1");

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
console.log("Problem 2");

function getSign(a,b,c){
	if(a==0 || b==0 || c==0){
		return console.log("0");
	}
	else if((a<0 && b>0 && c>0) || (a>0 && b<0 && c>0) || (a>0 && b>0 && c<0) || (a<0 && b<0 && c<0)){
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
console.log("Problem 3");

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
console.log("Problem 4");

function sortNumbers(a,b,c){
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
console.log("Problem 5");

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

// Problem 6. Quadratic equation
// Write a script that reads the coefficients a, b and c of a quadratic equation ax2 + bx + c = 0 and solves it (prints its real roots).
// Calculates and prints its real roots.
// Note: Quadratic equations may have 0, 1 or 2 real roots.
console.log("Problem 6");

function quadraticEquation(a,b,c){
	var d = (Math.pow(b,2) - 4*a*c);
	var x1;
	var x2;
	if(d<0){
		console.log("no real roots");
	}
	else if( d == 0 ){
		x1=(-b)/2*a;
		console.log("x1=x2=" + x1);
	}
	else{
		x1=((-b) + Math.sqrt(d,2))/(2*a);
		x2=((-b) - Math.sqrt(d,2))/(2*a);
		console.log("x1=" + x1 + "; x2=" + x2);
	}
}

quadraticEquation(2,5,-3);
quadraticEquation(5,1,8);
quadraticEquation(-5,3,2);
quadraticEquation(-1,3,0);

// Problem 7. The biggest of five numbers
// Write a script that finds the greatest of given 5 variables.
// Use nested if statements.
console.log("Problem 7");

function  biggestOfFive(a,b,c,d,e){
	var arr=[a,b,c,d,e];
	var biggest=arr[0];	    
	for (i = 1; i < arr.length; i++) {
		 if (biggest < arr[i]) {
			    biggest = arr[i];		   
		}	
	}console.log(biggest);
	 
}

biggestOfFive(1,5,6,2,3);
biggestOfFive(11,5,16,52,3);

// Problem 8. Number as words
// Write a script that converts a number in the range [0…999] to words, corresponding to its English pronunciation.
console.log("Problem 8");

function getWords(number){
var hundred = parseInt(number / 100);
var tenth = parseInt((number / 10) % 10);
var unit = parseInt(number % 10);
var result;
var tens = ['', '', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'];
var ones = ['', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten', 
 ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'];

if(number==0){
	return console.log("zero");
	}
else if (number>0 && number<20) {
	result=ones[number];
     }
else if(number>=20 && number<100){
	result=tens[tenth]+ones[unit];
}
else if(number>=100 && tenth==0 && unit==0){
 	result=ones[hundred]+ " hundreds ";
 }
else if(number>=100 && tenth==0 && unit!=0){
 	result=(ones[hundred]+ " hundreds and"+ ones[unit]);
 }
else if(number>=100 && tenth!=0){
 	result=	ones[hundred]+ " hundreds and" + tens[tenth] + ones[unit];
 }
  console.log(result);
}

getWords(733);
getWords(27);
getWords(999);
getWords(409);