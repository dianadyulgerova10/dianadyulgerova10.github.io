// Problem 1. Reverse string
// Write a JavaScript function that reverses a string and returns it.
console.log("Problem 1");

function reverseString(str){
	var newString="";
	for(var i=str.length-1; i>=0; i--){
		newString += str[i];
	}
	return newString;
}
console.log(reverseString("stringString"));

// Problem 2. Correct brackets
// Write a JavaScript function to check if in a given expression the brackets are put correctly.
// Example of correct expression: ((a+b)/5-d). Example of incorrect expression: )(a+b)).
console.log("Problem 2");

function correctBrackets(str){
	var newString="";
	var cnt=0;

	for(var i=0; i<str.length; i++){
		if(str[i]=='('){
			cnt++;
		}
		else if(str[i]==')'){
			cnt--;
		}	
	}

	if(cnt!=0){
		return false;
		}
	return true;
}

console.log(correctBrackets("(a+b)/5-d)+)(a+b))"));
console.log(correctBrackets("(a+b)+(1+b)"));


// Problem 3. Sub-string in text
// Write a JavaScript function that finds how many times a substring is contained in a given text (perform case insensitive search).
// Example:
// The target sub-string is in
// The text is as follows: We are living in an yellow submarine. We don't have anything else. inside the submarine is very tight.
//  So we are drinking all the day. We will move out of it in 5 days.
console.log("Problem 3");

var text="We are living in an yellow submarine. We don't have anything else. inside the submarine is very tight.So we are drinking all the day. We will move out of it in 5 days."

function substringInText(str,substr){
	var regex = new RegExp(substr, 'ig');
    return (str.match(regex)).length;
}

console.log(substringInText(text, "in"));

// Problem 4. Parse tags
// You are given a text. Write a function that changes the text in all regions:
// <upcase>text</upcase> to uppercase.
// <lowcase>text</lowcase> to lowercase
// <mixcase>text</mixcase> to mix casing(random)
// Example: We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else.
// The expected result:
// We are LiVinG in a YELLOW SUBMARINE. We dOn'T have anything else.
// Note: Regions can be nested.
console.log("Problem 4");

