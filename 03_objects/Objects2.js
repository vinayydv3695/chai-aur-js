// SIngleton object
const tinuser = new Object();

// Not singleton object
const tindeuser = {};

console.log(tindeuser);

tindeuser.id = "bkaa";
tindeuser.namw = "viviek";
tindeuser.isLoggedin = true;

console.log(tindeuser);

const regualruser = {
  email: "bka@gmail.com",
  fullname: {
    username: {
      userfullaname: "vinay",
      userlastname: "yadav",
    },
  },
};

// Accessing the value of userfullname

console.log(regualruser.fullname.username.userfullaname);

const obj1 = { 1: "a", 2: "b" };
const obj6 = { 1: "a", 2: "b" };

// wrong way to add 2 arrays

const obj3 = { obj1, obj6 };

// correct way to add 2 objects  .

const obj6 = Object.assign({}, obj6, obj1);

console.log(obj3);

// Mostr used method to merge two objects
const obj4 = { ...obj1, ...obj3 };

users[1].email;
console.log(tindeuser);

console.log(Object.keys(tindeuser));
console.log(Object.entries(tindeuser));

console.log(tindeuser.hasOwnProperty("isLoggedin"));
