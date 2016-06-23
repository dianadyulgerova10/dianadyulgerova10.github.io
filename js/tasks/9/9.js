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

var text="We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else.";

function parseTags(str){
	var newStr="";

 	for (var i = 0; i < str.length; i++){

            if (str[i] + str[i+1]==='<u') {
                i += 8;
                while (str[i] +str[i+1] + str[i+2]!=='</u'
                	) 
                {	
                    newStr += str[i].toUpperCase();
                    i+=1;
                }
                i += 8;
            }
            else if (str[i] +str[i+1]==='<l') {
                i+=9;
                while (str[i]+str[i+1] + str[i+2]!=='</l') {
                    newStr += str[i].toLowerCase();
                    i+=1;
                }
                i+=9;
            }
            else if (str[i] +str[i+1] ==='<m') {
                i += 9;
                while (str[i]+str[i+1] + str[i+2] !=='</m') {
                    if (i % 2===0) {
                        newStr+=str[i].toUpperCase();
                    } else {
                        newStr+=str[i].toLowerCase();
                    }
                    i+= 1;
                }
                i+= 9;
            }
       		else{
            	newStr+=str[i];
            }
    }
return newStr;
}

console.log(parseTags(text));

// Problem 5. nbsp
// Write a function that replaces non breaking white-spaces in a text with &nbsp;
console.log("Problem 5");
var text="A B C D";

function replaceWhiteSpaces(str){
	var regex = new RegExp(" ", 'gi');
    return text.replace(regex, "&nbsp")
}

console.log(replaceWhiteSpaces(text));

// Problem 6. Extract text from HTML
// Write a function that extracts the content of a html page given as text.
// The function should return anything that is in a tag, without the tags.
console.log("Problem 6");

function textFromHtml(htmlText){
	return htmlText.textContent;
}
console.log(textFromHtml(document.documentElement));

// Problem 7. Parse URL
// Write a script that parses an URL address given in the format: [protocol]://[server]/[resource] and extracts from it the [protocol], [server] and [resource] elements.
// Return the elements in a JSON object.
console.log("Problem 7");

function parseURL(url){

	var parse={ protocol: url.match(/(http(s)?)/gi),
				server: url.match(/:\/\/(.*?)\//)[1],
				resource: url.match(/[a-zA-Z](\/.*)/)[1],
	urlToString : function(){
			return "{ protocol: "+ this.protocol+ ", server: " + this.server + ", resource: " + this.resource + " }"; 
		}
	}
		return parse.urlToString();
	}

console.log(parseURL("http://telerikacademy.com/Courses/Courses/Details/239"));

// Problem 8. Replace tags
// Write a JavaScript function that replaces in a HTML document given as string all the tags <a href="…">…</a> with corresponding tags [URL=…]…/URL].
console.log("Problem 8");

var text='<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>'

function replaceTags(str){

	while(str.indexOf('<a href') != -1) {
        str = str.replace('<a href="', '[URL=')
       			 .replace('">', ']')
        		 .replace('</a>', '[/URL]');
    }
    return str;
}

console.log(replaceTags(text));



