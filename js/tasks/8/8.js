
// Problem 1. Make person
// Write a function for creating persons.
// Each person must have firstname, lastname, age and gender (true is female, false is male)
// Generate an array with ten person with different names, ages and genders
console.log("Problem 1");
// function problem1(){

function Person(firstName, lastName, age, gender){
	this.firstName=firstName;
	this.lastName=lastName;
	this.age=age;
	this.gender=gender;
	this.fullName=function(){return this.firstName + " " +this.lastName;};
	//console.log(firstName + " " + lastName+ " " + age + " " + gender);
}

function generatePeople(){
	var mFirstNames=["Ivan", "Petar" , "Dimitar"];
	var mLastNames=["Ivanov", "Petrov", "Dimitrov"];
	var fFirstNames=["Mariya", "Petya", "Simona"];	
	var fLastNames=["Ivanova", "Petrova", "Dimitrova"];
	var age=Math.random()*100 |0;
	var gender=!(Math.random()*2|0);
	var rnd=Math.random() * 3 |0 ;
	var rnd2=Math.random() *3| 0;

	function genarate(gen){
		if(gender===false){
		 var randomMale=new Person(mFirstNames[rnd], mLastNames[rnd2], age, gender);
		return randomMale;
		}	
		var randomFemale=new Person(fFirstNames[rnd], fLastNames[rnd2], age, gender);
		return randomFemale;
	}

	var n=genarate(gender);
	return n;
}

function personArr(len){
	var arr=[];
	for(var i=0; i<len; i++){
		arr.push(generatePeople());
		}
	return arr;
}

console.log(personArr(10));


// }
// problem1();

// Problem 2. People of age
// Write a function that checks if an array of person contains only people of age (with age 18 or greater)
// Use only array methods and no regular loops (for, while)
console.log("Problem 2");

function checkAge(arr){
	var arr2 = arr.filter(function(item, arr){
 						return item["age"]>=18;
 					}
 						)
	if(arr.length==arr2.length){
		return true;
	}
		return false;
}

console.log(checkAge(personArr(10)));

// Problem 3. Underage people
// Write a function that prints all underaged persons of an array of person
// Use Array#filter and Array#forEach
// Use only array methods and no regular loops (for, while)
console.log("Problem 3");

function underage(arr){
		var arr2 = arr.filter(function(item){
 								return item["age"]<18;
 							  });
		
 		arr2.forEach(function(entry){
 						return console.log(entry);
 					});
}

//underage(personArr(10));

// Problem 4. Average age of females
// Write a function that calculates the average age of all females, extracted from an array of persons
// Use Array#filter
// Use only array methods and no regular loops (for, while)
console.log("Problem 4");

 function averageAge(arr){
 	var cnt=0;
 	var sum=0;
	var arr2= arr.filter(function(item){
						if(item["gender"]===true){
							cnt++;
							sum+=item["age"]
						}
					});
	return sum/cnt;

 }
 console.log(averageAge(personArr(10)));

// Problem 5. Youngest person
// Write a function that finds the youngest male person in a given array of people and prints his full name
// Use only array methods and no regular loops (for, while)
// Use Array#find
console.log("Problem 5");

function findYoungest(arr){
	var male=arr.filter(function(item){
		return item["gender"]===false;
	 }).sort(function(a,b){
	 	return a["age"]-b["age"];
	 });

	return male[0]["age"] + " " + male[0]["firstName"] + " " + male[0]["lastName"];

}

console.log(findYoungest(personArr(10)));

// Problem 6. Group people
// Write a function that groups an array of persons by first letter of first name and returns the groups as a JavaScript Object
// Use Array#reduce
// Use only array methods and no regular loops (for, while)
// console.log("Problem 6");

// function groupPeople(arr){

// 	var arr2=arr.map(function(item){
// 		var arr3=[];
// 		if(item["firstName"].charAt(0)){}
// 	})


// }

// var arrr=personArr(5);
// console.log(arrr[0]["firstName"].charAt(0))
//
