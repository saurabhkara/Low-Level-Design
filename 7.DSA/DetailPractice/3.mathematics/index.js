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

console.log(isCompositeNumber(2));
console.log(isCompositeNumber(23));

// Factorials of a number

// Factors of a given number

// Armstrong number

//Mutiples of a number
