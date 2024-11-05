// Array

// Storing a  collection of multiple  items under a signle varaible

const myArr = [1, 2, 3, 4, 5];

// The first element will be obtain by 0 isntead of 1
console.log(myArr[0]);

const Trio = ["luffy", "zoro", "sanji"];
const array = new Array(1, 2, 3, 4);

// Array Methods

// push the value at the end of the array

myArr.push(3);
myArr.push(7);

//remove the last value
myArr.pop();

//Adds new value in the first place of the array

myArr.unshift(9);

console.log(myArr);
myArr.shift(8);

console.log(myArr.includes(6));
console.log(myArr.indexOf(6));

const newarr = myArr.join();

console.log(myArr);
console.log(newarr);

// Slice and Splice

// it doesn't manipulate the original array .
const myn1 = myArr.slice((1, 3));

console.log(myn1);
console.log("B", myArr);

// SPlice changes the original array.

const myn2 = myArr.splice((1, 3));

console.log(myn1);
console.log("B", myArr);
