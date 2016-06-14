// Problem 1. Odd or Even

// Write an expression that checks if given integer is odd or even.

function oddOrEven(number){
	if(number%2==0){
		return console.log("The number is even!");
	}
	else{
		return console.log("The number is odd!");
		}
}
oddOrEven(5);
oddOrEven(8);
oddOrEven(-4);
oddOrEven(0);


// Problem 2. Divisible by 7 and 5

// Write a boolean expression that checks for given integer if it can be divided (without remainder) by 7 and 5 in the same time.