// Dates

let date = new Date();
console.log(date);

console.log(date.toString());
console.log(date.toISOString());
console.log(date.getDay());
console.log(date.toLocaleString());
console.log(typeof date);

let currentdate = new Date(2024, 5, 12);

console.log(currentdate.toDateString());

let currentsdate = new Date(2024, 5, 4, 12);

let currentdates = new Date("2023-00-14");
console.log(currentdates.toLocaleString());

let mytimestamp = Date.now();
console.log(mytimestamp);
console.log(currentdates.getTime());
console.log(date.now() / 1000);

let NewDate = new Date();

console.log(NewDate);

console.log(NewDate.getMonth());
