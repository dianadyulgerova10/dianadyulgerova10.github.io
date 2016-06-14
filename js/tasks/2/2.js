// Problem 1. Odd or Even
// Write an expression that checks if given integer is odd or even.

function oddOrEven(number1){
	if(number1%2==0){
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


function divisibleBy(number2) {
	if((number2 % 7 == 0)&&(number2 % 5 == 0)){
		return true;
	}
	else {
		return false;
	}
}

console.log(divisibleBy(35));
console.log(divisibleBy(7));
console.log(divisibleBy(140));
console.log(divisibleBy(0));


// Problem 3. Rectangle area
// Write an expression that calculates rectangle’s area by given width and height.

function area(width,height){
	return width*height;
}

console.log(area(4,5));
console.log(area(10,5));
console.log(area(6,8));

// Problem 4. Third digit
// Write an expression that checks for given integer if its third digit (right-to-left) is 7.