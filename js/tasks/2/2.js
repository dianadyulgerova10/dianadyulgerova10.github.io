// // // Problem 1. Odd or Even
// // // Write an expression that checks if given integer is odd or even.
console.log("Problem 1");

function oddOrEven(number1){
	if(number1%2==0){
		return console.log("The number is even!");
	}
	else{
		return console.log("The number is odd!");
		}
}
oddOrEven(15);
oddOrEven(8);
oddOrEven(-4);
oddOrEven(0);


// // // Problem 2. Divisible by 7 and 5
// // // Write a boolean expression that checks for given integer if it can be divided (without remainder) by 7 and 5 in the same time.
console.log("Problem 2");

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


// // // Problem 3. Rectangle area
// // // Write an expression that calculates rectangle’s area by given width and height.
console.log("Problem 3");

function area(width,height){
	return width*height;
}

console.log(area(4,5));
console.log(area(10,5));
console.log(area(6,8));

// Problem 4. Third digit
// Write an expression that checks for given integer if its third digit (right-to-left) is 7.
console.log("Problem 4");

function thirdDight(number3) {
	var numberStr=number3.toString();
	var numLength=number3.toString().length;

	if(numLength<3){
		return false;
	}
	else{
		if(numberStr.charAt(numLength-3)==7){
			return true;
			}
		else{
			return false;
		}
	}	
}

console.log(thirdDight(2724));
console.log(thirdDight(10));
console.log(thirdDight(222723));

// // Problem 5. Third bit
// // Write a boolean expression for finding if the bit #3 (counting from 0) of a given integer.
// // The bits are counted from right to left, starting from bit #0.
// // The result of the expression should be either 1 or 0.
console.log("Problem 5");

function thirdBit(number3){
       console.log( (number3 >> 3) & 1);
    }
thirdBit(8);
thirdBit(10);
thirdBit(0);
thirdBit(5343);

// Problem 6. Point in Circle
// Write an expression that checks if given point P(x, y) is within a circle K({0,0}, 5). //{0,0} is the centre and 5 is the radius
//x^2+y^2>=r^2
console.log("Problem 6");

function pointInCircle(x,y) {
	if(Math.pow(x,2)+Math.pow(y,2)<=25){
		return true;
	}
	else{
		return false;
	}
}

console.log(pointInCircle(0,1));
console.log(pointInCircle(-5,0));
console.log(pointInCircle(-4,5));
console.log(pointInCircle(0.9,-4.93));

// Problem 7. Is prime
// Write an expression that checks if given positive integer number n (n ≤ 100) is prime.
console.log("Problem 7");

function isPrime(number4){
	var isPr=true;
	for( var i=2; i<= Math.sqrt(number4);i++){
		if(number4 % i == 0){
			isPr=false;
			break;
		}
		else{isPr=true;}
	}
	console.log(isPr)
}

isPrime(7);
isPrime(-3);
isPrime(4);

// Problem 8. Trapezoid area
// Write an expression that calculates trapezoid's area by given sides a and b and height h.
console.log("Problem 8");

function trapezoidArea(a,b,h){
	return 0.5*(h*(a+b));
}
console.log(trapezoidArea(5,7,12));
console.log(trapezoidArea(2,1,33));


// Problem 9. Point in Circle and outside Rectangle
// Write an expression that checks for given point P(x, y) if it is within the circle K( (1,1), 3)
// and out of the rectangle R(top=1, left=-1, width=6, height=2).
console.log("Problem 9");

function pointIn(x,y){
	var isInCirle=Math.pow(x-1,2)+Math.pow(y-1,2)<=9;
	var isOutRectangle=x>1 && x<=5 && y>-1 && y>-1;

	if( isInCirle==true && isOutRectangle==false ){
		console.log("yes");
	}
	else{
		console.log("no");
	}
}

pointIn(1,4);
pointIn(2,0);