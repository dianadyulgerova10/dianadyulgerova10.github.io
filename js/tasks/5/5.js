// Problem 1. Increase array members
// Write a script that allocates array of 20 integers and initializes each element by its index multiplied by 5.
// Print the obtained array on the console.
// console.log("Problem 1");

// var arr=new Array(20),
// 	i,
// 	len;

// for (i = 0, len=arr.length; i < len ; i += 1) {
// 	arr[i] = i * 5;
//  }
// for (i = 0, len=arr.length; i < len; i += 1) {
//      console.log(arr[i]);
// }

// // Problem 2. Lexicographically comparison
// // Write a script that compares two char arrays lexicographically (letter by letter).
// console.log("Problem 2");

// var arr1=["a","b","r","f","g"];
// var arr2=["a","b","c","e","r"];
// var str1=arr1.join("");
// var str2=arr2.join("");

// console.log(str1)
// if (str1 > str2) {
//     console.log("arr2");
//  }
// else if (str1 < str2) {
//             console.log("arr1 ");
//  }
// else {
//   console.log("equal");
//  }

// Problem 3. Maximal sequence
// Write a script that finds the maximal sequence of equal elements in an array.
console.log("Problem 3");
var arr=[2, 1, 1, 2, 3, 3, 2, 2, 2, 2, 1, 3, 3],
	cnt,
	bigCnt=0,
	number,
	i,
	len;
	
for(i=0, len=arr.length; i<len ; i += 1){
	if(arr[i]==arr[i+1]){
		cnt+=1;
		if(bigCnt<cnt){
			bigCnt=cnt;
			number=arr[i];
		}
	}
	else{
		cnt=0;
	}
}

if(bigCnt==0){
	console.log("no sequence");
}
else{
	var a=number.toString() + " ";
	console.log(a.repeat(bigCnt+1));
}

// Problem 4. Maximal increasing sequence
// Write a script that finds the maximal increasing sequence in an array. / 3, 2, 3, 4, 2, 2, 4
console.log("Problem 4")








