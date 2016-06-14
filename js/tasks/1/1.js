
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
var char="c";
var sym=Symbol();
var str1="'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'"
var str2='"Lorem ipsum dolor sit amet, consectetur adipiscing elit."'
var str3="\"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\""
var cat={color:"black"};
var dog={};
var city;
var person = undefined;
var address=null;
var dayOfWeek=["Monday", "Tuesday","Wednesday"];
var date=new Date();
var func=Function();
var numObj=new Number(4);
var infp=Infinity;
var infm=-Infinity;
var nan=NaN;


console.log("age=" + age + "," + typeof(age));
console.log("name=" + name + "," + typeof(name));
console.log("isMale=" + isMale + "," + typeof(isMale));
console.log("x=" + x + "," + typeof(x));
console.log("y=" + y + "," + typeof(y));
console.log("(x>y)=" + xy + "," + typeof(xy));
console.log("char=" + char + "," + typeof(char));
console.log("symbol " + typeof(sym));
console.log(str1+"\n"+str2+"\n"+str3);
console.log(typeof(str1));
console.log("cat=" + cat + "," + typeof(cat));
console.log("cat.color=" + cat.color + "," + typeof(cat.color));
console.log("dog=" + dog + "," + typeof(dog));
console.log("city=" + city + "," + typeof(city));
console.log("person=" + person + "," + typeof(person));
console.log("address=" + address + "," + typeof(address));
console.log("dayOfWeek=" + dayOfWeek+ ","+ typeof(dayOfWeek));
console.log("dayOfWeek[0]=" + dayOfWeek[0]+ ","+typeof(dayOfWeek[0]));
console.log("null instance of Object? " + (null instanceof(Object)));
console.log("null === undefined? " + (null===undefined)); 
console.log("null == undefined? " + (null==undefined)); 
console.log("date=" + date + "," + typeof(date));
console.log(func + "," + typeof(func));
console.log("numObj=" + numObj + "," + typeof(numObj));
console.log("undefined variable- " + typeof(none));
console.log("infinity="+ infp + "," + typeof(infp));
console.log("-infinity="+ infm + "," + typeof(infm));
console.log("NaN="+ nan + "," + typeof(nan));
console.log("NaN istance of Number? "+(NaN instanceof(Number)));

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

