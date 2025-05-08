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

//25 .Iterable in Objects

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

//26. Deboucing

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

//27. Throatling

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

// 28. Flattern Array

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

//28. flattern object

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

// 29. Difference between Shallow and Deep copy
// A shallow copy copies only the first level of the object or array. If the original contains nested objects or arrays, the references to those nested values are shared between the original and the copy.
//A deep copy duplicates all levels, meaning nested objects/arrays are also cloned. The new copy is completely independent.

const obj29A = {
  name: "Saurabh",
};

//shallow copy
const obj29B = obj29A;

//Deep copy for first level obj
const obj29C = { ...obj29A };

obj29C.name = "Deepak";

console.log(obj29C, obj29A);

//30. 2:0 => 2 is element of arr30B and 0 is how many times 2 is repeating in arr30A;

//T(n)=O(n2)

let arr30A = [3, 4, 5, 6, 5, 4, 5];
let arr30B = [2, 3, 4, 5, 6];

function repeatingElements(arr1, arr2) {
  const result = arr1.map((item1) => {
    const count = arr2.reduce((acc, item2) => {
      if (item1 === item2) {
        acc = acc + 1;
      }

      return acc;
    }, 0);

    return `${item1}: ${count}`;
  });

  return result;
}

console.log(repeatingElements(arr30B, arr30A));

// 31. Program to sort only positive number
const arr31 = [-1, 40, 20, -4, 10, 2, 70, -2, 6, 9];

function sortOnlyPositive(arr) {
  if (!Array.isArray(arr)) {
    return;
  }

  const sortedArr = arr.filter((item) => item > 0).sort((a, b) => a - b);
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arr[i] = sortedArr[index++];
    }
  }
  return arr;
}

console.log(sortOnlyPositive(arr31));

// 32. Program to fetch student Object whose average marks is grether than other students

const students32 = [
  { name: "Ram", marks: [70, 80, 65, 90, 65] },
  { name: "Shyam", marks: [80, 62, 70, 75, 81] },
  { name: "M Sharan", marks: [74, 67, 72, 69, 84] },
];

function averrageMarks(students) {
  if (!Array.isArray(students)) {
    return;
  }

  const result = students.reduce((acc, studentItem) => {
    let totalMarks = 0;
    studentItem.marks.forEach((singleEntityMarks) => {
      totalMarks = singleEntityMarks + totalMarks;
    });
    const averageMarks = totalMarks / 5;

    if (acc.topperAverageMarks < averageMarks || !acc.topperAverageMarks) {
      acc.topperAverageMarks = averageMarks;
      acc.item = studentItem;
    }

    return acc;
  }, {});

  return result;
}

console.log(averrageMarks(students32));

// 33. Program to return odd repeating value of an array with count
const countOriginalArr = ["a", "a", "b", "d", "e", "d", "a", "b"];
// output format :['a:3','e:1'];

function calculateOddRepeating(originalArr) {
  if (!Array.isArray(originalArr)) {
    return;
  }

  const obj = {};

  originalArr.forEach((item) => {
    if (obj[item]) {
      obj[item] = obj[item] + 1;
    } else {
      obj[item] = 1;
    }
  });

  const result = [];
  for (let item in obj) {
    const stringItem = `${item}:${obj[item]}`;
    result.push(stringItem);
  }

  return result;
}

console.log(calculateOddRepeating(countOriginalArr));

// 34. Write the function that takes an array of objects and keys.
// And returns a new array sorted based on the name

const arr34 = [
  { id: 4, name: "Saurabh" },
  { id: 3, name: "Ram" },
  { id: 1, name: "Shyam" },
  { id: 2, name: "Radha" },
  { id: 5, name: "Aarti" },
];

function sortArrofObj(arr) {
  if (!arr | !Array.isArray(arr)) {
    return;
  }

  return arr.sort((a, b) => a.name.localeCompare(b.name));
}

console.log(sortArrofObj(arr34));

// 35. Toggle function arguments

function toggleArgument(...args) {
  let index = 0;
  return function () {
    if (index <= args.length) {
      index = index % args.length;
    }
    return args[index++];
  };
}

const tfunct = toggleArgument(5, 8, 9, 7, 6);
console.log(tfunct());
console.log(tfunct());
console.log(tfunct());
console.log(tfunct());
console.log(tfunct());
console.log(tfunct());
console.log(tfunct());

// Q. 36 Longest word ot given sentence

const exampleSentence36 = "Hello my name is saurabh kumar";

function maxLengthWord(sentence) {
  if (!sentence) {
    return;
  }

  let maxWord = "";
  let temp = "";
  for (let char of sentence) {
    if (char === " ") {
      maxWord = maxWord.length < temp.length ? temp : maxWord;
      temp = "";
    } else {
      temp = temp + char;
    }
  }
  return maxWord;
}

console.log(maxLengthWord(exampleSentence36));
