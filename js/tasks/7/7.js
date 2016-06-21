// Problem 1. Planar coordinates
// Write functions for working with shapes in standard Planar coordinate system.
// Points are represented by coordinates P(X, Y)
// Lines are represented by two points, marking their beginning and ending L(P1(X1,Y1), P2(X2,Y2))
// Calculate the distance between two points.
// Check if three segment lines can form a triangle.
console.log("Problem 1");

var a1=new Point(2,3);
var a2=new Point(1,4);
var a=new Line(a1,a2);

var b1=new Point(9,7);
var b2=new Point(3,2);
var b=new Line(b1,b2); 

var c1=new Point(7,-1);
var c2=new Point(-3,5);
var c=new Line(c1,c2); 

function Point(x,y){
	this.x=x;
	this.y=y;	
}

function Line(point1, point2){
 	this.point1=point1;
 	this.point2=point2;
	this.distance=function distance(){
		return (Math.sqrt( Math.pow((point1.x-point2.x),2) + Math.pow((point1.y-point2.y),2)).toFixed(2) );
	}
}

function Triangle(a,b,c){
	this.a=a;
	this.b=b;
	this.c=c;
	if(a+b>c && a+c>b && b+c>a){
	return console.log("Lines can form a triangle.");
	}
	return console.log("Lines cannot form a triangle.");

}

console.log(a.distance());
console.log(b.distance());
console.log(c.distance());
var triangle=new Triangle(a,b,c);

// Problem 2. Remove elements
// Write a function that removes all elements with a given value.
// Attach it to the array type.
// Read about prototype and how to attach methods.
// var arr = [1,2,1,4,1,3,4,1,111,3,2,1,'1'];
// arr.remove(1); //arr = [2,4,3,4,111,3,2,'1'];
console.log("Problem 2");

Array.prototype.remove= function(element){
	for(var i=0; i<this.length; i++){
		if(element===this[i]){
			this.splice(i,1);
		}
	}
}

var arr=[1,23,4,5,2,3,2,3,'2',6,67,3,2,21,2];
arr.remove(2);
console.log(arr);

// Problem 3. Deep copy
// Write a function that makes a deep copy of an object.
// The function should work for both primitive and reference types.
console.log("Problem 3");

var num=5;
var arr=[1,2,3,4,5];
var obj={a:1,b:2, point:{x:1, y:2}};

var arr2=clone(arr);
console.log(arr);
console.log(arr2);
arr[4]=10;
arr2[0]=10;
console.log(arr);
console.log(arr2);

var obj2=clone(obj);
console.log(obj);
console.log(obj2);
obj.c=3;
obj2.d=10;
console.log(obj);
console.log(obj2);


var date=new Date();
var date2=clone(date);
console.log(date);
console.log(date2);

function clone(element){
	var copy;

	if( "object" !=typeof(element) || element===null){
		return element;
	}

	if(element instanceof(Array)){
		copy=[];
		for(var i=0;i<element.length;i++){
			copy[i]=clone(element[i]);
		}
		return copy;
	}
	if(element instanceof(Date)){
		copy=new Date();
		copy.setTime(element.getTime());
		return copy;
	}
	if(element instanceof(Object)){
		copy={};
		for(var attr in element){
			if(element.hasOwnProperty(attr)){
				copy[attr]=clone(element[attr]);
			}
		}
		return copy;
	}	
}

// Problem 4. Has property
// Write a function that checks if a given object contains a given property.
console.log("Problem 4");





