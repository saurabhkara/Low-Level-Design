//1. Prototype chaining
// Prototype chaining is used to build new type of objects based on existing one. Every object has prototype property.

function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  console.log(this.name);
};
// const person = new Person("Saurabh");
// person.getName();
// console.log(person.__proto__);
// console.log(person.__proto__.__proto__);
// console.log(person.__proto__.__proto__.__proto__);

//2. Call, apply and bind

const obj1 = { name: "Saurabh" };
const obj2 = { name: "Saurya" };

function printName(language) {
  console.log(this.name, "knows", language);
}

// printName.call(obj1, "JavaScript");
// printName.call(obj2, "TypeScript");
// printName.apply(obj1, ["javascript"]);
// const bindmethod = printName.bind(obj1);
// bindmethod("JavaScript");

//3. Slice and Splice method

const arr1 = [5, 4, 6, 8, 7];

const slicedArr = arr1.slice(1, 3);
console.log(slicedArr);

const splicedArr = arr1.splice(2, 1, 9, 86);
console.log(splicedArr, arr1);

//4. Currying function
//Currying is process of converting a function which takes multiple arguments into sequence of functions which takes single argument.

function sum(a, b, c, d) {
  return a + b + c + d;
}

function curryingSum(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d;
      };
    };
  };
}

// 5. Pure function in JavaScript is function whose return value is only determined by its arguments without any side effect.

function pureSum(a, b) {
  return a + b;
}
pureSum(5, 4);

// 6. Temporal dead Zone - It is behaviour in JS that occurs with let and const keyword but not with var. Accessing variables before its declaration cause refeence error

function tdz() {
  console.log(abc, def);
  const abc = "abc";
  let def = "def";
}

// tdz();

// 7. IIFE - Immediately Invoked function expression
//It is function in javascript that invoked as soon as possible as it is defined.

(function () {
  let messsage = "Your are awesome developer";
  console.log(messsage);
})();
// console.log(messsage);

//8. Memoization
//Memoization is functional programming technque which is used to increase function's performance by caching its previously computed result.
//Closures are used for encapulation and memoization

function calculateTotalAmout() {
  const obj = {};
  return function (principal) {
    if (obj[principal]) {
      console.log("Getting data from cache");
      return obj[principal];
    } else {
      let total = principal * 1.5;
      obj[principal] = total;
      return total;
    }
  };
}

const calcTotal = calculateTotalAmout();
console.log(calcTotal(1000));
console.log(calcTotal(1000));

//9. Hoisting
//Hoisting is javascript mechanism where variables, functions declaration are moved to top their scope before execution.

console.log(abcde);
var abcde = "aboced";

//function call before its declaration
message("Good morning");

function message(name) {
  console.log(name);
}

//10. Closure
// A closure is combination of a function and its lexical scope within which it is declared. Inner function that has access to its out or enclosing function

function outerFun() {
  let a = 5;
  let b = 8;
  function innerFunc() {
    let c = 10;
    console.log(a, b, c);
  }
  innerFunc();
}

outerFun();

//11. Classes in JavaScript
// Classes in Javascript syntatic sugar over JavaScript existing prototype based inheritance.

//12. Promise in Javascript
// A promise in Javascript is an object that may produce a single in future with either resolved or  rejected(a reason that it is not resolved) value.
// It has three state - 1.Pending  2.Resolve  3.Rejected

const promise1 = new Promise((resolve, reject) => {
  return resolve("resolved");
  return reject("resolved");
});

//13. Why do we need Promise?
// Promise is use handle asynchronous operation. It provides an alternative approach for callbacks by reducing callback hell and writting cleaner code.

//14. What is Callback functions ?
// Callback function is function that passed into another function as argument. And this function is invoked inside outer function to complete some actions.

function innerCallback() {
  console.log("inner method invoked");
}

function outerCallback(callback) {
  const id = setTimeout(() => {
    callback();
  }, 2000);
}

outerCallback(innerCallback);

// Callbacks are needed because javascript is event driven language. That means instead for waiting for response javascript keep executing while listing other events

// 15.Callback hell
// Callback hell is anti pattern with multple nested callbacks.

//16.Promise chaining
// The process of executing sequence of asynchronous task one after another using promise is known as promise chaining

//17.Promise combinators
//Promise.all([])
//Promise.allSettled([])
//Promise.any()
//Promise.race()

//18. What are pros and cons of Promise over callbacks
// Promise are easy to write,read than callback hell
// Easy to write sequential asynchronous code with .then()
// Easy to write parallel asynchronous code with Promise.all()

//19. What is PWA?
//Progressive Web Applications are a type of mobile app delivered through the web, built using common web technologies including HTML, CSS and JavaScript. These PWAs are deployed to servers, accessible through URLs, and indexed by search engines.

//20. How to get the number of arguments passed to function?
// arguments.length

//21. What is the way to find the number of parameters expected by a function
// You can use function.length syntax to find the number of parameters expected by a function
function sum(num1, num2, num3, num4) {
  return num1 + num2 + num3 + num4;
}
sum.length;

//22. What is a polyfill ?
// A polyfill is a piece of JS code used to provide modern functionality on older browsers that do not natively support it.

//23. How do you check whether a string contains a substring?
// Multiple ways to search substring - includes(), indexOf(), and using regular expression

const str23 = "checking and testing js methods";

const res1 = str23.includes("testing");
const res2 = str23.indexOf("and");
const res3 = str23.match(/ing/gi);

console.log(res1, res2, res3);

//24. Nested conditional operator

const result4 = false ? 0 : 0 ? 56 : 23;
console.log(result4);

//25 .
