// Numbers
const score = 400;
console.log(score);

const age = new Number(100);
console.log(age);

console.log(age.toString().length);
console.log(age.toFixed(1));

const number = 23.35;
console.log(number.toPrecision(3));

const hundreads = 1000;
console.log(hundreads.toLocaleString("en-IN"));

//  Maths

console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.99));
console.log(Math.SQRT2(56));
console.log(Math.max(1, 3, 3, 4));
console.log(Math.min(2, 34, 6));

// Math.random is imp
// it's value ranges from 0 to 1
//
//
//
console.log(Math.random() * 20 + 1);

const min = 20;
const max = 50;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
