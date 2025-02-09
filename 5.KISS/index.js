function isPrime(number) {
  if (number < 2) return false;

  // Very complex and unnecessary loop
  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      return false;
    } else {
      for (let j = 0; j < 1000; j++) {
        // This extra loop does nothing, it's just here to add complexity
      }
    }
  }

  return true;
}

console.log(isPrime(29)); // Output: true

// Good Example (Following KISS):

function isPrime(number) {
  if (number < 2) return false;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }

  return true;
}

console.log(isPrime(29)); // Output: true
