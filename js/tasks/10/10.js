// Problem 1. Format with placeholders
// Write a function that formats a string. The function should have placeholders, as shown in the example
// Add the function to the String.prototype
console.log("Problem 1");

if(!String.prototype.format){
	String.prototype.format=function(options,str){
		var str=this;
		for(var arg in options){
			if(options[arg]===""){
				return "No args"
			}
			var placeHolder=new RegExp('#{'+ arg +'}','g');
			str=str.replace(placeHolder,options[arg]);
		}return str;
	}
}

var options1 = {name: 'John'};
var str1='Hello, there! Are you #{name}?'.format(options1);
 console.log(str1);

var options2 = {name: 'John', age: 13};
var str2='My name is #{name} and I am #{age}-years-old'.format(options2);
console.log(str2); 




// Problem 2. HTML binding
// Write a function that puts the value of an object into the content/attributes of HTML tags.
// Add the function to the String.prototype
console.log("Problem 2");

if(!String.prototype.bind){
	
	String.prototype.bind= function(args){
		str=this;
		for(var arg in args){
		var content=  new RegExp('(<.*?data-bind-content="' + arg + '".*?>)(.*?)(<\\s*/.*?>)', 'g');
		var href = new RegExp('(<.*?data-bind-href="' + arg + '".*?)>', 'g');
        var classRE = new RegExp('(<.*?data-bind-class="(' +arg + ')".*?)>', 'g');

		 str=str.replace(content,('$1'+' $2 ' + args[arg]) +'$3') 
       	 		.replace(href,('$1'  +' href="' + args[arg] + '">'))
    	 		.replace(classRE, ('$1 '+ ' class="' + args[arg] + '">'))
    }
    return str.toString();	
	}
}

var str1='<div data-bind-content="name"></div>';
var args1={name:'Steven'};
console.log(str1.bind(args1));

var str2='<a data-bind-content="name" data-bind-href="link" data-bind-class="name"></a>';
var args2={name:'Elena', link: 'http://telerikacademy.com'};
console.log(str2.bind(args2));


