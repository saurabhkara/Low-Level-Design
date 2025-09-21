// Odd even

function isEven(num) {
  if (typeof num !== "number") {
    throw new Error("Input must be an integer");
  }

  return num % 2 === 0;
}

console.log(isEven(1));
console.log(isEven(0));
console.log(isEven(15));
console.log(isEven(12));

// Prime number : A positive number which is divisible by either 1 or itself.

function isPrimeNumber(num) {
  if (typeof num !== "number") {
    throw new Error("Input must be integer");
  }

  if (num < 2) {
    return false;
  }
  let temp = 2;
  let flag = true;
  while (temp <= Math.sqrt(num)) {
    if (num % temp === 0) {
      flag = false;
      break;
    }
    temp = temp + 1;
  }
  return flag;
}

console.log(isPrimeNumber(5));
console.log(isPrimeNumber(3));
console.log(isPrimeNumber(4));

//Composite number : A composite number is simply a positive integer greater than 1 that is not prime.

function isCompositeNumber(num) {
  if (typeof num !== "number") {
    throw new Error("Input must be integer");
  }

  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      console.log("tr==>");
      return true;
    }
  }
  return false;
}

console.log(isCompositeNumber(4));
console.log(isCompositeNumber(23));

// Factorials of a number

function factorial(num) {
  if (typeof num !== "number") {
    throw new Error("Input must be a number");
  }

  if (num < 1) {
    return 0;
  }

  let result = 1;
  let temp = num;
  while (temp >= 1) {
    result = result * temp;
    temp--;
  }
  return `Factorial of ${num} is ${result}`;
}

console.log(factorial(5));

// Factors of a given number

function factors(num) {
  if (typeof num !== "number") {
    throw new Error("Input must be a number");
  }
  const result = [];

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      result.push(i);
    }
  }
  return result;
}

console.log(factors(15));
//T(n)= O(n)

function factorsOptimized(n) {
  if (typeof n !== "number" || n <= 0 || !Number.isInteger(n)) {
    throw new Error("Input must be a positive integer");
  }

  const result = new Set(); // avoid duplicates (for perfect squares)
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      result.add(i);
      result.add(n / i);
    }
  }
  return Array.from(result).sort((a, b) => a - b);
}
console.log(factorsOptimized(15));

//T(n)= (O(√n))

//Mutiples of a number
// First 5 multiple of given number

function multiplesOfNumber(num) {
  if (typeof num !== "number") {
    throw new Error("Input must be number");
  }

  if (!Number.isInteger(num) || num <= 0) {
    throw new Error("number must be Positive Integer");
  }
  const result = [num];
  for (let i = 2; i <= 5; i++) {
    result.push(i * num);
  }
  return result;
}

console.log(multiplesOfNumber(5));
// console.log(multiplesOfNumber(-5));
// console.log(multiplesOfNumber(4.5));

// Armstrong number
// number that is equal to the sum of its own digits each raised to the power of the number of digits.

function isArmstrongNumber(num) {
  if (typeof num !== "number") {
    throw new Error("Input must be number");
  }
  const length = num.toString().length;
  let temp = num;
  let result = 0;
  while (temp > 0) {
    let lastDigit = temp % 10;
    temp = parseInt(temp / 10);

    result = result + lastDigit ** length;
  }
  return result === num;
}

console.log(isArmstrongNumber(123));
console.log(isArmstrongNumber(153));
// T(n)= O(d ) : d = number of digits

//Palindrome number

function isPalindrome(num) {
  if (typeof num !== "number") {
    throw new Error("Input must be number");
  }

  const numArr = num.toString().split("");
  const length = numArr.length;
  const mid = Math.ceil(length / 2);
  for (let i = 0; i < mid; i++) {
    if (numArr[i] !== numArr[length - i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome(121));
console.log(isPalindrome(1221));

function isAnagram(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new Error("Input must be number");
  }

  const obj = {};
  let temp = num1;

  while (temp > 0) {
    const lastD = temp % 10;
    temp = parseInt(temp / 10);
    if (obj[lastD]) {
      obj[lastD] = obj[lastD] + 1;
    } else {
      obj[lastD] = 1;
    }
  }

  temp = num2;

  while (temp > 0) {
    let lastD = temp % 10;
    temp = parseInt(temp / 10);
    if (obj[lastD] <= 0) {
      return false;
    } else {
      obj[lastD] = obj[lastD] - 1;
    }
  }
  console.log(obj);
  return true;
}

console.log(isAnagram(123, 123));
console.log(isAnagram(123, 1213));

//T(n) = O(d) // number of digits

//Repeated Digit Number

function repeatedDigitNumber(num) {
  if (typeof num !== "number" || num < 0) {
    throw new Error("Input must be a positive number");
  }

  let result = num;

  while (result >= 10) {
    let sum = 0;

    while (result > 0) {
      const lastDigit = result % 10;
      sum = sum + lastDigit;
      result = parseInt(result / 10);
    }

    result = sum;
  }

  return result;
}

console.log(repeatedDigitNumber(598));

//Fibonacci series

function fibonacciBruteForce(num) {
  if (typeof num !== "number" || !num) {
    throw new Error("Input must be number");
  }
  if (num < 1) {
    return 1;
  }

  let result = [1, 1];

  for (let i = 2; i < num; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }
  return result;
}

console.log(fibonacciBruteForce(5));

//T(n) = O(n)

function fibonacciRecursive(num) {
  if (num <= 0) {
    throw new Error("Input must be positive");
  }

  if (num == 1 || num == 2) {
    return 1;
  }

  return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
}

console.log(fibonacciRecursive(5));

//T(n)= O(2ⁿ)
//S(n) = O(n)
//Memoize to reduce time complexity to O(n)

// Base conversion

// Decimal to Binary

function decimalToBinary(num) {
  if (typeof num !== "number") {
    throw new Error("Input must be Number");
  }
  if (num === 0) {
    return 0;
  }
  let result = "";
  let temp = num;
  let rem;
  while (temp > 0) {
    rem = temp % 2;
    temp = parseInt(temp / 2);
    result = rem + result;
  }
  return result;
}

console.log(decimalToBinary(5));
console.log(decimalToBinary(6));
