// Problem 1. Exchange if greater
// Write an if statement that takes two double variables a and b and exchanges their values if the first one is greater than the second.
// As a result print the values a and b, separated by a space.

function ifGreater(a,b){

	if(b>a){
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