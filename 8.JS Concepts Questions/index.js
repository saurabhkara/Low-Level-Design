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

// Q.37  Print the character to number of times

const charString37 = "abc";
const countCharacter37 = "123";

// Output should be like abbccc

function printCharacterTimes(str, strCount) {
  if (!str | !strCount) {
    return;
  }
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const count = parseInt(strCount[i]);
    for (let j = 0; j < count; j++) {
      result = result + str[i];
    }
  }
  return result;
}

console.log(printCharacterTimes(charString37, countCharacter37));

// this keyword in JS Questions
// this keyword is used to refers currently executing object

// Q .38

this.a38 = 15;
console.log(this);

// Here, this keyword is refering to window object

// Q.39
// In Example1 function this refers to its immediate parent object

function example1() {
  console.log(this.a38);
}
example1();

//Arrow function does not have their own this, it takes this from outer normal function
const example1A = () => {
  console.log(this.a38);
};

example1A();

// Q.40 this keyword inside object

this.name40 = "testing";
const user1 = {
  name40: "Saurabh1",
  getDetail() {
    console.log(this.name40);
  },
  getDetailArrow: () => {
    console.log(this.name40);
  },
};

user1.getDetail();
user1.getDetailArrow();

const user2 = {
  name40: "Saurabh2",
  childObj: {
    newName40: "Saurabh K2",
    getDetail() {
      console.log("Name :", this.name40, "New Name :", this.newName40);
    },
  },
};
user2.childObj.getDetail();

// Q .41  Guess the output
const object = {
  message: "Hello, World!",
  getMessage() {
    const message = "Hello, Earth!";
    return [this.message, message];
  },
};

console.log(object.getMessage());

// Q.42 Guess the output

function example42() {
  return {
    name: "Saurabh",
    ref: this,
  };
}

const user42 = example42();
console.log(user42.ref.name);

// In above question this keyword refers to window object

// Change something in Q.42 to get name as Saurabh

function solution43() {
  return {
    name: "Saurabh 43",
    ref: function () {
      return this;
    },
  };
}

const sol43 = solution43();
console.log(sol43.ref().name);

// Q.43  what will be Output

var length = 4;
function callback() {
  console.log(this.length); // What is logged?
}

const object7 = {
  length: 5,
  method() {
    console.log(arguments);
    arguments[0]();
  },
};

object7.method(callback, 1, 2);
// Answer : 3

// Q.44 What will be output ??
const object8 = {
  name: "Saurabh8",
  getName() {
    console.log(this.name);
  },
};

setTimeout(object8.getName, 1000);

// undefined,
// object.getName reference is passed inside setTimeout independently, so name property will no longer accessiable

// Q.45 Change something in above question Q.44 to get printed Saurabh8

setTimeout(function () {
  object8.getName();
}, 1000);

//Or bind the function

// Q.45 Create a Object calculator

const calculator = {
  read() {
    this.a = +prompt("a=", 0);
    this.b = +prompt("b=", 0);
  },
  multi() {
    return this.a * this.b;
  },
  add() {
    return this.a + this.b;
  },
};

// calculator.read();
// console.log(calculator.multi());
// console.log(calculator.multi());

// Q. 46 Implement Calc ==> Calc.add(5).mul(10).sub(5)

const Calc = {
  a: 0,
  add(num) {
    this.a = this.a + num;
    return this;
  },
  print() {
    console.log(this.a);
    return this;
  },
  mul(num) {
    this.a = this.a * num;
    return this;
  },
};

Calc.add(5).mul(11).print();

//=====================================
// Hoisting Questions

// Q.47 Guess the Output
// console.log(y);
// let y = 10;

// Answer: Reference error
// Trying to access  let or const variable, will get reference error.

// Q.48 Guess the Output

console.log(y2);
var y2 = 10;

// Answer :Undefined, var intialized vairable

// Q.49 Guess the Output

y3 = 12;
console.log(y3);
var y3;

// Output 12, because before accessing value is assigned to variable.

// Q.50 Guess the Output

// var y5 = 10;
// let y5 = 10;
// console.log(y5);

// Uncaught syntax error - variable already declared

// Q.51 Guess the output

function hoistingExample6() {
  console.log("Value of y6 variable", y6);
}

console.log("Value of y6 variable", y6);
var y6 = 52;
hoistingExample6();

// Q.52 Guess the Output

function hoistingExample7() {
  y7 = 2;
}
hoistingExample7();
console.log(y7);

//Output : 2, without var keyword it becames global variable

// Q.53 Guess the Output

function hoistingExample8() {
  var y8 = 8;
}

hoistingExample8();
// console.log(y8);

// Output: reference error
// Var is functional scope variable so it cannot be accesed outside of function

// Q.54 Guess the output

function hoistingExample9() {
  console.log("9A");
}

hoistingExample9();

function hoistingExample9() {
  console.log("9B");
}

hoistingExample9();

//Output : 9B
// Last function will override

// Q.55 Guess the Output

function hoistingExample10() {
  y10 = 12;
  return;
  function y10() {}
}

// hoistingExample10();
// console.log(y10);

// Ans : 10

// Closure

//Q.56 Guess the output

function outer1() {
  var a = 10;
  function inner() {
    console.log(a);
  }
  return inner;
}
outer1()();

// Output: 10

// Q.57 Guess the output

function outer2() {
  var a = 101;
  function inner() {
    console.log(a);
  }
  return inner;
}

var close2 = outer2();
close2();

// Output : 101

// Q.58 Guess the output

function outer3() {
  function inner() {
    console.log(a);
  }
  var a = 1022;
  return inner;
}

var close3 = outer3();
close3();

// Q.59 Guess the Output

function outest4() {
  var c = 12;
  function outer(b) {
    function inner() {
      console.log(a, b, c);
    }
    let a = 1089;
    return inner;
  }
  return outer;
}

var close4 = outest4()("Hello Outer");
close4();

// Q.60  Guess the Output
function example5() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log("#5", i); // What is logged?
    }, 1000);
  }
}

example5();

// Q.61 Guess the output
var num6 = 10;
(function () {
  console.log(num6);
  var num6 = 202;
  console.log(num6);
})();

// Q.62 Create a function that multiply that multiples
// the arguments passed in this manner multiply(5)(6)(7)

function multiply(a) {
  return function (b) {
    return b ? multiply(a * b) : a;
  };
}

console.log(multiply(5)(8)());

// Q.63 Guess the output

let count8 = 0;
(function () {
  if (count8 === 0) {
    let count8 = 1;
    console.log(count8);
  }
  console.log(count8);
})();

// Output: 1 and 0

// Q.64 Guess the Output

(function immediateA(a) {
  return (function (b) {
    console.log(a);
  })(1);
})(0);

//==============================================
//Promises
// Promises are the javascript object that will going to return some value in future either a resolve value or a reason that is not resolved.
// States => Pending, Fulfilled and Rejected

// Q.65 What will be output ?

const promiseInstance = new Promise((resolve, reject) => {
  //   resolve("First instance");
  reject(" First reject");
});

promiseInstance
  .then((res) => {
    console.log(res);
  })
  .then((res) => {
    console.log("Second then", res);
  })
  .catch((err) => {
    console.log(err);
  })
  .then(() => {
    console.log(" Then after catch");
  });

//Output : First reject & The after catch

// all then block will always called after promise resolved
// then block returns resolve promise by default
// catch block also returns resolve promise by default

// Q.66  Promise.resolve()

Promise.resolve("Resolve block").then((res) => {
  console.log("then block", res);
});

//Output: Resolve Block and then block

// Q.67 Promise.reject()

Promise.reject("Reject method")
  .then((res) => {
    console.log("then block", res);
  })
  .catch((err) => {
    console.log("catch block", err);
  });

//Output: catch block reject method

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("P1");
    reject("P1");
  }, 100);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    setTimeout(() => {
      //   resolve("P2");
      reject("P2");
    }, 2000);
  });
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P3");
    // resolve("P3");
  });
});

// Promise combinators => Promise.all([])

Promise.all([p1, p2, p3])
  .then((res) => {
    console.log("Promise all then=>", res);
  })
  .catch((err) => {
    console.log("Promise all catch=>", err);
  });

// Promise.race([])

Promise.race([p1, p2, p3])
  .then((res) => {
    console.log("Promise Race then", res);
  })
  .catch((err) => {
    console.log("promise catch=>", err);
  });

// Promise.any([])

Promise.any([p1, p2, p3])
  .then((res) => {
    console.log("Promise any then=>", res);
  })
  .catch((err) => {
    console.log("Promise Any=>", err);
  });

//Promise.allSettled([])

Promise.allSettled([p1, p2, p3])
  .then((res) => {
    console.log("Promise AllSettled  then=>", res);
  })
  .catch((err) => {
    console.log("Promise all Settled  catch=>", err);
  });

// Promise.allSettled([]) never goes in catch block either all promise instance resolved or rejected

// Q.65 Guess the output

console.log("Start65");
function importantAction65(username) {
  console.log("ImportantMessage65");
  setTimeout(() => {
    return `Send message to ${username}`;
  });
}

const message65 = importantAction65("Saurabh65");
console.log(message65);
console.log("Stop65");

//Output : Start65, ImportantMessage65, undefined and Stop65

// Q.66 Guess the Output
console.log("Start66");

function importAction2(username, cb) {
  console.log("Important Message66");
  setTimeout(() => {
    cb(`Sent message66 to ${username}`);
  }, 0);
  return "ss66";
}

const message2 = importAction2("Saurabh66", function (msg) {
  console.log(msg);
});
console.log(message2);
console.log("Stop66");

//Output : Start66, Important Message66, ss66,Stop66 and Sent message66 to Saurabh66

// Q.67 Guess the Output

console.log("Start67");
const sub = new Promise((resolve, reject) => {
  console.log("Intermediate 67");
  setTimeout(() => {
    const result = true;
    if (result) resolve("Resolved67");
    else reject(new Error("Rejected67"));
  }, 200);
});

sub
  .then((res) => {
    console.log("67 then=>", res);
  })
  .catch((err) => {
    console.log("67 catch=>", err);
  });
console.log("Stop67");

//Output : Start67, Intermediate 67, Resolved67 and 67 then =>Resolved67

// Q.68 Guess the output

console.log("Start68");
Promise.resolve("Resolved68").then((res) => {
  console.log("Resolved68 then=>", res);
});
console.log("Stop68");

//Output: Start68, Stop68 and Resolved68 then=> Resolved68

//Q.69 Guess the output

console.log("Start69");
const pi69 = new Promise((resolve, reject) => {
  console.log("p69 inside");
  resolve("P69 resolved");
});
pi69
  .then((res) => {
    console.log("69 then=>", res);
  })
  .catch((err) => {
    console.log("69 catch=>", err);
  });
console.log("Stop69");

//Output: Start69, p69 inside, Stop69 and 69 then=>P69 resolved

// Q.70 Guess the output

console.log("Start70");
const pi6 = new Promise((resolve, reject) => {
  console.log("P70 inside 1");
  resolve("70 resolved");
  console.log("P70 inside 2");
});

pi6
  .then((res) => {
    console.log("P70 then", res);
  })
  .catch((err) => {
    console.log("P70atch=>", err);
  });

console.log("Stop 70");

//Output: Start70, P70 inside1, P70 inside2, Stop70 and P70 then 70 resolved

// Q.71 Guess the output

console.log("Start71");
const fun = () =>
  new Promise((resolve, reject) => {
    console.log("P71 inside");
    resolve("Success71");
  });

console.log("P71 Middle");
fun().then((res) => {
  console.log("P71 then=>", res);
});

console.log("End71");

//Output: Start71, P71 Middle, P71 inside,  End71 and P71 then Success71

// Q.72 Guess the Output

function job72() {
  return new Promise((resolve, reject) => {
    reject();
  });
}

const pi72 = job72();
pi72
  .then(() => {
    console.log("P72 Success 1");
  })
  .then(() => {
    console.log("P72 Success 2");
  })
  .then(() => {
    console.log(" P72 Sucess 3 ");
  })
  .catch(() => {
    console.log("P72 Error 1");
  })
  .then(() => {
    console.log("P72 Success 4");
  });

//Output: P72 Error 1 and P72 Success 4

// Q.73 Write Polyfll for map method

Array.prototype.myMap = function (cb) {
  if (Array.isArray(!this)) {
    return;
  }
  let result = [];
  for (let i = 0; i < this.length; i++) {
    const item = cb(this[i], i, this);
    result[i] = item;
  }

  return result;
};

const arr73 = [5, 7, 9, 6];

const res73 = arr73.myMap((item) => item + 10);
console.log(res73);

// Q.74 Polyfill for Filter method

Array.prototype.myFilter = function (cb) {
  if (!Array.isArray(this)) {
    return;
  }
  let result = [];
  for (let i = 0; i < this.length; i++) {
    const flag = cb(this[i], i, this);
    if (flag) {
      const len = result.length;
      result[len] = this[i];
    }
  }
  return result;
};

const arr74 = [8, 4, 5, 3, 1];

const res74 = arr74.myFilter((item, index) => item > 5);
console.log("res74", res74);

// Q.75 Polyfill for reduce method

Array.prototype.myReduce = function (cb, acc) {
  if (!Array.isArray(this)) {
    return;
  }

  for (let i = 0; i < this.length; i++) {
    const accV = acc === "undefined" ? this[i] : acc;
    const currentReturnVal = cb(accV, this[i], i, this);
    acc = currentReturnVal;
  }

  return acc;
};

const arr75 = [5, 7, 6, 8];
const res75 = arr75.myReduce((acc, item, index) => acc + item, 0);
console.log("res75", res75);

// Q.76 Polyfill for Once

function myOnce(cb) {
  let calledFlag = false;
  return function (...args) {
    if (calledFlag) {
      return;
    } else {
      cb(...args);
      calledFlag = true;
    }
  };
}

function example76() {
  console.log("Method called");
}
const once = myOnce(example76);
once();
once();
once();

// Q.77 Polyfill for call method

Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== "function") {
    return;
  }

  if (context) {
    context.cb = this;
    context.cb(...args);
  } else {
    let obj = {};
    obj.cb = this;
    obj.cb(...args);
  }
};

function printName77(marks) {
  console.log("Name77", this.name, marks);
}

const obj77 = {
  name: "Saurabh77",
};

printName77.myCall(obj77, 80);
printName77.myCall(null, 77);

// Q.78  Polyfill for Apply method

Function.prototype.myApply = function (context, args = []) {
  if (context) {
    context.cb = this;
    context.cb(...args);
  } else {
    const obj = {};
    obj.cb = this;
    obj.cb(...args);
  }
};

const obj78 = {
  name: "Saurabh78",
};

printName77.myApply(obj78, [96]);
printName77.myApply(obj78);

// Q.79 Polyfill for Bind method

Function.prototype.myBind = function (context, ...args1) {
  const obj = {};
  const localThis = this;
  return function (...args2) {
    if (context) {
      context.cb = localThis;
      context.cb(...args1, ...args2);
    } else {
      obj.cb = localThis;
      obj.cb(...args1, ...args2);
    }
  };
};

const obj79 = {
  name: "Saurabh",
};

function callFunc79(marks, add) {
  console.log("call79", this.name, marks, add);
}

const resBind = callFunc79.myBind(obj79, 80);
resBind("Arrah");

// Q.80 Polyfill for find method

Array.prototype.myFind = function (cb) {
  if (!Array.isArray(this)) {
    return;
  }

  for (let i = 0; i < this.length; i++) {
    const res = cb(this[i], i, this);
    if (res) {
      return this[i];
    }
  }
};

const arr80 = [8, 8, 9, 5, 2];
const res80 = arr80.find((item) => item === 9);
console.log("res80", res80);

// Q.81 Polyfill for some method

Array.prototype.mySome = function (cb) {
  if (!Array.isArray(this)) {
    return;
  }

  for (let i = 0; i < this.length; i++) {
    const returnV = cb(this[i], i, this);
    if (returnV) return returnV;
  }
  return false;
};

const arr81 = [8, 9, 7, 5, 40];
const res81 = arr81.some((item) => item > 30);
console.log(res81);
