| No. | Question                                                                                                                                |
| --- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 1.  | [Prototype chaining](#1-prototype-chaining)                                                                                             |
| 2.  | [Call, apply and bind](#2-call-apply-and-bind)                                                                                          |
| 3.  | [Slice and Splice method in JavaScript](#3-slice-and-splice-method)                                                                     |
| 4.  | [Currying function](#4-currying-function)                                                                                               |
| 5.  | [What is Pure function ? ](#5-pure-function-in-javascript)                                                                              |
| 6.  | [Temporal Dead Zone](#6-temporal-dead-zone)                                                                                             |
| 7.  | [IIFE - Immediately Invoked Function Expression](#7-iife-immediately-invoked-function-expression)                                       |
| 8.  | [Memoization in JavaScript](#8-memoization)                                                                                             |
| 9.  | [Hoisting in JavaScript](#9-hoisting)                                                                                                   |
| 10. | [Closure](#10-closure)                                                                                                                  |
| 11. | [Classes in JavaScript](#11-classes-in-javascript)                                                                                      |
| 12. | [Promise in JavaScript](#12-promise-in-javascript)                                                                                      |
| 13. | [Why do we need Promise?](#13-why-do-we-need-promise)                                                                                   |
| 14. | [Callback functions in JavaScript](#14-what-is-callback-functions)                                                                      |
| 15. | [Callback hell](#15-callback-hell)                                                                                                      |
| 16. | [What is Promise chaining ? ](#16-promise-chaining)                                                                                     |
| 17. | [Promise combinators - all(), race(), any(), allSettled()](#17-promise-combinators)                                                     |
| 18. | [Pros and Cons of Promises over callbacks](#18-what-are-pros-and-cons-of-promise-over-callbacks)                                        |
| 19. | [What is PWA (Progressive Web App)?](#19-what-is-pwa)                                                                                   |
| 20. | [How to get number of arguments passed to a function?](#20-how-to-get-the-number-of-arguments-passed-to-function)                       |
| 21. | [How to find number of parameters expected by a function?](#21-what-is-the-way-to-find-the-number-of-parameters-expected-by-a-function) |
| 22. | [What is a polyfill in JavaScript?](#22-what-is-a-polyfill)                                                                             |
| 23. | [How to check if a string contains a substring?](#23-how-do-you-check-whether-a-string-contains-a-substring)                            |
| 24. | [Nested conditional (ternary) operator](#24-nested-conditional-operator)                                                                |
| 25. | [Iterable in Objects using Symbol.iterator](#25-iterable-in-objects)                                                                    |
| 26. | [Deboucing](#26-deboucing)                                                                                                              |
| 27. | [Throatling](#27-throatling)                                                                                                            |
| 28. | [Flattern Array](#28-flattern-array)                                                                                                    |
| 29. | [Flattern object](#28.flattern-object)                                                                                                  |

### 1. Prototype Chaining

### Prototype chaining is used to build new type of objects based on existing one. Every object has prototype property.

```js
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  console.log(this.name);
};

const person = new Person("Saurabh");
person.getName();
console.log(person.__proto__);
console.log(person.__proto__.__proto__);
console.log(person.__proto__.__proto__.__proto__);
```

### 2. Call Apply and Bind

### Call, apply and bind allow you to set the `this` context of a function and control how it's invoked.

```js
const obj1 = { name: "Saurabh" };
const obj2 = { name: "Saurya" };

function printName(language) {
  console.log(this.name, "knows", language);
}

printName.call(obj1, "JavaScript");
printName.call(obj2, "TypeScript");

printName.apply(obj1, ["JavaScript"]);

const bindmethod = printName.bind(obj1);
bindmethod("JavaScript");
```

### 3. Slice and splice method

```js
const arr1 = [5, 4, 6, 8, 7];

const slicedArr = arr1.slice(1, 3); // returns elements at index 1 and 2
console.log(slicedArr); // [4, 6]

const splicedArr = arr1.splice(2, 1, 9, 86); // removes 1 item at index 2 and inserts 9, 86
console.log(splicedArr); // [6]
console.log(arr1); // [5, 4, 9, 86, 8, 7]
```

### 4. Currying function

### Currying is process of converting a function which takes multiple arguments into sequence of functions which takes single argument.

```js
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
```

### 5. Pure function in javascript

### Pure function in JavaScript is function whose return value is only determined by its arguments without any side effect

```js
function pureSum(a, b) {
  return a + b;
}
pureSum(5, 4);
```

### 6. Temporal dead zone

### Temporal dead Zone - It is behaviour in JS that occurs with let and const keyword but not with var. Accessing variables before its declaration cause refeence error

```js
function tdz() {
  console.log(abc, def);
  const abc = "abc";
  let def = "def";
}
```

### 7. IIFE Immediately Invoked Function Expression

### It is function in javascript that invoked as soon as possible as it is defined.

```js
(function () {
  let messsage = "Your are awesome developer";
  console.log(messsage);
})();
console.log(messsage);
```

### 8. Memoization

### Memoization is functional programming technque which is used to increase function's performance by caching its previously computed result. Closures are used for encapulation and memoization.

```js
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
```

### 9. Hoisting

### Hoisting is javascript mechanism where variables, functions declaration are moved to top their scope before execution.

```js
console.log(abcde);
var abcde = "aboced";

//function call before its declaration
message("Good morning");

function message(name) {
  console.log(name);
}
```

### 10. Closure

### A closure is combination of a function and its lexical scope within which it is declared. Inner function that has access to its out or enclosing function

```js
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
```

### 11 Classes in javascript

### Classes in Javascript syntatic sugar over JavaScript existing prototype based inheritance.

### A class is a blueprint for creating objects.

```js
class Example {
  constructor(name) {
    this.name = name;
  }
  printName() {
    console.log(this.name);
  }
}

const example = new Example("Saurabh");
example.printName();
```

### 12. Promise in javascript

### A promise in Javascript is an object that may produce a single in future with either resolved or rejected(a reason that it is not resolved) value. It has three state - 1.Pending 2.Resolve 3.Rejected

```js
const promise1 = new Promise((resolve, reject) => {
  return resolve("resolved");
  return reject("resolved");
});

promise1
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
```

### 13. Why do we need promise

### Promise is use handle asynchronous operation. It provides an alternative approach for callbacks by reducing callback hell and writting cleaner code.

### 14. What is callback functions ?

### Callback function is function that passed into another function as argument. And this function is invoked inside outer function to complete some actions.

### Callbacks are needed because javascript is event driven language. That means instead for waiting for response javascript keep executing while listing other events

```js
function innerCallback() {
  console.log("inner method invoked");
}

function outerCallback(callback) {
  const id = setTimeout(() => {
    callback();
  }, 2000);
}

outerCallback(innerCallback);
```

### 15. Callback hell

### Callback hell is anti pattern with multple nested callbacks.

### 16. Promise-chaining

### The process of executing sequence of asynchronous task one after another using promise is known as promise chaining.

### 17. Promise-combinators

```js
Promise.all([]);
Promise.allSettled([]);
Promise.any();
Promise.race();
```

### 18. What-are-pros-and-cons-of-promise-over-callbacks?

### Promise are easy to write,read than callback hell

### Easy to write sequential asynchronous code with .then()

### Easy to write parallel asynchronous code with Promise.all()

### 19. What is PWA ?

### Progressive Web Applications are a type of mobile app delivered through the web, built using common web technologies including HTML, CSS and JavaScript. These PWAs are deployed to servers, accessible through URLs, and indexed by search engines.

### 20. How to get the number of arguments passed to function ?

### arguments.length

### 21. what is the way to find the number of parameters expected by a function ?

### You can use function.length syntax to find the number of parameters expected by a function

```js
function sum(num1, num2, num3, num4) {
  return num1 + num2 + num3 + num4;
}
sum.length;
```

### 22. What is a Polyfill ?

### A polyfill is a piece of JS code used to provide modern functionality on older browsers that do not natively support it.

### 23. How do you check whether a string contains a substring?

### Multiple ways to search substring - includes(), indexOf(), and using regular expression

```js
const str23 = "checking and testing js methods";

const res1 = str23.includes("testing");
const res2 = str23.indexOf("and");
const res3 = str23.match(/ing/gi);

console.log(res1, res2, res3);
```

### 24. Nested conditional operator

```js
const result4 = false ? 0 : 0 ? 56 : 23;
console.log(result4);
```

### 25. Iterable in objects

### The iterator protocol defines how to produce a sequence of values from an object.

```js
const obj25 = {
  name: "Saurabh",
  profession: "Software developr",
  [Symbol.iterator]: function () {
    const keys = Object.keys(this);
    let currentIndex = 0;
    return {
      next: function () {
        return {
          value: obj25[keys[currentIndex++]],
          done: currentIndex > keys.length,
        };
      },
    };
  },
};

const objIterator = obj25[Symbol.iterator]();
console.log(objIterator.next());
console.log(objIterator.next());
console.log(objIterator.next());
```

### 26. Deboucing

```js
function ConsoleName(name) {
  console.log(name, " is called method");
}

function debounceMethod(func) {
  let setTimeoutId;
  return function (name) {
    if (setTimeoutId) {
      clearTimeout(setTimeoutId);
    }
    setTimeoutId = setTimeout(() => {
      func(name);
    }, 2000);
  };
}

const debouncef = debounceMethod(ConsoleName);
debouncef("Saurabh");
debouncef("Ashwini");
debouncef("kumar");
```

### 27. Throatling

```js
function throatling(func, delay) {
  let timeId = null;
  return function (...args) {
    if (timeId !== null) {
      return;
    }
    timeId = setTimeout(() => {
      func(...args);
      timeId = null;
    }, delay);
  };
}

const throatFunc = throatling(ConsoleName, 500);

console.log(throatFunc("Saurabh is calling throttling"));
console.log(throatFunc("Saurabh is calling throattling"));
console.log(throatFunc("Saurabh is calling"));
```

### 28. Flattern Array

```js
const arr28 = [5, [6, 8, 7], [3, 1, 6, [0, 1]]];

function flatternArray(arr) {
  if (!Array.isArray(arr)) {
    return;
  }
  const result = [];

  for (let item of arr) {
    if (!Array.isArray(item)) {
      let length = result.length;
      result[length] = item;
    } else {
      const subResult = flatternArray(item);
      for (let inItem of subResult) {
        let length = result.length;
        result[length] = inItem;
      }
    }
  }

  return result;
}

console.log(flatternArray(arr28));
```

### 28. flattern object

```js
const obj28 = {
  name: "Saurabh",
  address: {
    street: 456,
    City: "Ara",
    State: "Bihar",
  },
};

function flatternObj(obj, name) {
  if (!obj || typeof obj !== "object" || Array.isArray(obj)) {
    return "invalid";
  }

  const result = {};

  for (let key in obj) {
    if (typeof obj[key] !== "object") {
      result[`${name}${key}`] = obj[key];
    } else {
      const subObj = flatternObj(obj[key], `${key}_`);
      for (let prop in subObj) {
        result[`${name}${prop}`] = subObj[prop];
      }
    }
  }
  return result;
}

console.log(flatternObj(obj28, ""));
```
