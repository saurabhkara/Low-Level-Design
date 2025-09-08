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

//7654963001

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

// Armstrong number

//Mutiples of a number
