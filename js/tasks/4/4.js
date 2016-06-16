// Problem 1. Numbers
// Write a script that prints all the numbers from 1 to N.
console.log("Problem 1");

function printNumber(n){
	var i;
	for(i=1; i<=n; i+=1){
		console.log(i);
	}
}
printNumber(5);
printNumber(4);

// Problem 2. Numbers not divisible
// Write a script that prints all the numbers from 1 to N, that are not divisible by 3 and 7 at the same time
console.log("Problem 2");

function notDivisible(n){
	var i;
	for(i=1; i<=n; i+=1){
		if(i%3==0 && i%7==0){
			continue;
		}
		console.log(i);
	}
}

 notDivisible(22);
// notDivisible(42);

// Problem 3. Min/Max of sequence
// Write a script that finds the max and min number from a sequence of numbers.
console.log("Problem 3");

// var arr=[1,5,6,8,54,1,0]
// var minAndMax=Math.min(arr)+ " " + Math.max(arr);

function minAndMax(arr){
	console.log(Math.min.apply(null,arr) + " " + Math.max.apply(null,arr) );
}
var arrInput=[1,5,78,2,8,6,8,0];
minAndMax(arrInput);

// Problem 4. Lexicographically smallest
// Write a script that finds the lexicographically smallest and largest property in document, window and navigator objects.
console.log("Problem 4");

function findSmallest(object) {
    var smallest = 'zzzzz';
    for (var property in object) {
         if (property<smallest) {
             smallest = property;
        }
    }
   console.log("The smallest lexicographically property in "+object+ " is "+smallest);
}

function findBiggest(object) {
     var biggest = 'a';
      for (var property in object) {
         if (property > biggest) {
          biggest = property;
      	 }
	   }
    console.log("The biggest lexicographically property in " + object + " is " + biggest);
}

findSmallest(window);
findBiggest(window);
findSmallest(navigator);
findBiggest(navigator);
findSmallest(document);
findBiggest(document);