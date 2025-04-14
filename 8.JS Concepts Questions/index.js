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

//
