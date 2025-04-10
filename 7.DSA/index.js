//1. Leet Question 125

const str1 = "A man, a plan, a canal: Panama99";

function isValidPalindrom(str) {
  str = str.replaceAll(" ", "");
  str = str.replaceAll(/[^a-z0-9\s]/gi, "");
  str = str.toLowerCase();
  console.log("str", str);
  //Multiple ways to check palindrome like using loops, predefined methods
  const reversedStr = str.split("").reverse().join("");
  return reversedStr === str;
}

console.log(isValidPalindrom(str1));

//2. Armstrong number

function armstrongNumber(number) {
  let temp = number;
  let sum = 0;
  const power = number.toString().length;
  while (temp > 0) {
    let lastDigit = temp % 10;
    temp = parseInt(temp / 10);
    sum = sum + lastDigit ** 3;
  }
  console.log("Sum for finding armstrong number", sum);
  return number === sum;
}
console.log(armstrongNumber(153));
