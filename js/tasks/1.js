

// 1.1. JavaScript literals
// Assign all the possible JavaScript literals(boolean/floating-point/integer/object/string) to different variables.

// 1.2. Quoted text
// Create a string variable with quoted text in it.
// For example: `'How you doin'?', Joey said'.

// 1.3. Typeof variables
// Try typeof on all variables you created.

// 1.4. Typeof null
// Create null, undefined variables and try typeof on them.


var age=10;
var name="Pesho";
var isMale=true;
var x=0.5;
var y=10;
var xy=(x>y);
var str1="'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'"
var str2='"Lorem ipsum dolor sit amet, consectetur adipiscing elit."'
var str3="\"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\""
var cat={color:"black"};
var dog={};
var city;
var person = undefined;
var address=null;


console.log(age + "," + typeof(age));
console.log(name + "," + typeof(name));
console.log(isMale + "," + typeof(isMale));
console.log(x + "," + typeof(x));
console.log(y + "," + typeof(y));
console.log(xy + "," + typeof(xy));
console.log(str1+"\n"+str2+"\n"+str3);
console.log(typeof(str1));
console.log(cat + "," + typeof(cat));
console.log(cat.color + "," + typeof(cat.color));
console.log(dog + "," + typeof(dog));
console.log(city + "," + typeof(city));
console.log(person + "," + typeof(person));
console.log(address + "," + typeof(address));
console.log(null === undefined); 
console.log(null  == undefined); 


var a=5;
var b=4;
console.log("a=" + a + "," +typeof(a));
console.log("b=" + b + "," +typeof(b));
console.log("a+b=" + a +b + "," + typeof(a+b));
a="abv";
console.log("a=" + a + "," +typeof(a));
console.log("a+b=" + a +b + "," + typeof(a+b));
a="3";
console.log("a=" + a + "," +typeof(a));
console.log("a+b=" + a + b + "," + typeof(a+b));
console.log("a*b=" + a * b + "," + typeof(a*b));

