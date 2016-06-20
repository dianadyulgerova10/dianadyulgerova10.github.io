// Problem 1. Increase array members
// Write a script that allocates array of 20 integers and initializes each element by its index multiplied by 5.
// Print the obtained array on the console.
console.log("Problem 1");

var arr=new Array(20),
	i,
	len;

for (i = 0, len=arr.length; i < len ; i += 1) {
	arr[i] = i * 5;
 }
for (i = 0, len=arr.length; i < len; i += 1) {
     console.log(arr[i]);
}

// Problem 2. Lexicographically comparison
// Write a script that compares two char arrays lexicographically (letter by letter).
console.log("Problem 2");

var arr1=["a","b","r","f","g"];
var arr2=["a","b","c","e","r"];
var str1=arr1.join("");
var str2=arr2.join("");

console.log(str1)
if (str1 > str2) {
    console.log("arr2");
 }
else if (str1 < str2) {
            console.log("arr1");
 }
else {
  console.log("equal");
 }

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
console.log("Problem 4");


var arr=[3,1, 2, 3, 4,5,6,7,8,9, 2, 2,1,2,3,4,5,4],
	cnt,
	bigCnt=0,
	number,
	i,
	len,
	start=Number.MAX_VALUE;
	
for(i=0, len=arr.length; i<len ; i += 1){
	if(arr[i]+1==arr[i+1]){
		cnt+=1;
		if(bigCnt<cnt){
			bigCnt=cnt;
			number=arr[i];
			if(start>number){
				start=number;
			}		
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
	var sequence=[];
	var a=0;
	for(i=start; a<bigCnt+1; i++){
		sequence[a]=i;
		a++;

	}
	console.log(sequence);
}


// Problem 5. Selection sort
// Sorting an array means to arrange its elements in increasing order.
// Write a script to sort an array.
// Use the selection sort algorithm: Find the smallest element, move it at the first position, find the smallest from the rest, move it at the second position, etc.
// Hint: Use a second array
console.log("Problem 5");

var arr=[12,3,5,6,29,1,31,35,15],
	smallest,
	i,
	j,
	len,
	index;

for(i=0, len=arr.length; i<len; i++){
	index=i;
	for(j=i+1, len=arr.length;j<len; j++){
		if(arr[j]<arr[index]){
			index=j;
		}
	}
	smallest=arr[index];
	arr[index]=arr[i];
	arr[i]=smallest;
}
console.log(arr);

// Problem 6. Most frequent number
// Write a script that finds the most frequent number in an array.
console.log("Problem 6");

var arr=[5,67,3,23,6,3,1,6,3],
	sortArr=arr.slice(),
	cnt,
	i,
	j,
	len,
	index,
	smallest,
	bigCnt=0,
	number=0;
for(i=0,len=sortArr.length; i<len; i++){
	index=i;
	for(j=i+1, len=sortArr.length; j<len; j++){
		if(sortArr[j]<sortArr[index]){
			index=j;
		}
	}
	smallest=sortArr[index];
	sortArr[index]=sortArr[i];
	sortArr[i]=smallest;
}

for (i=0,len=sortArr.length; i<len; i++) {
	if(sortArr[i]==sortArr[i+1]){
		cnt++;
		if(bigCnt<cnt){
			bigCnt=cnt;
			number=sortArr[i];
		}
	}
	else{
		cnt=0;
	}
}
console.log(arr);
console.log(number + "("+ (bigCnt+1) + " times)");

// Problem 7. Binary search
// Write a script that finds the index of given element in a sorted array of integers by using the binary search algorithm.
// function sortNumber(a, b) {
//             return a - b;
//         }
console.log("Problem 7");

var arr=[ 1, 3, 3, 4, 5, 5, 6, 6, 7 ],
	i=0,
	len=arr.length-1,
	a,
	index,
	number=4;


do{
	index=parseInt((len+i)/2);
	if(number<arr[index]){
		len=index-1;
	}
	else if(number>arr[index]){
		i=index+1;
	}
}
while(number!=arr[index])

console.log(index);

	