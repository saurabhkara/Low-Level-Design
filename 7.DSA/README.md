# DSA Problems and Solution in JS

### Table of Contents

| No. | Question                                                                                                                                                                                                                                                                                          |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.  | [A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters (Leetcode 125)](#a-phrase-is-a-palindrome-if-after-converting-all-uppercase-letters-into-lowercase-letters-and-removing-all-non-alphanumeric-characters) |
| 2.  | [Armstrong number](#armstrong-number)                                                                                                                                                                                                                                                             |

## A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters

````const str1 = "A man, a plan, a canal: Panama99";

function isValidPalindrom(str) {
    str = str.replaceAll(" ", "");
    str = str.replaceAll(/[^a-z0-9\s]/gi, "");
    str = str.toLowerCase();
    console.log("str", str);
    //Multiple ways to check palindrome like using loops, predefined methods
    const reversedStr = str.split("").reverse().join("");
    return reversedStr === str;
}

console.log(isValidPalindrom(str1))```
````

## Armstrong number

A number is armstrong number, the sum of its own digits and each digits raised to power of number of its digit is equal to given number itself.

````function armstrongNumber(number) {
  let temp = number;
  const power = number.toString().length;
  let sum = 0;
  while (temp > 0) {
    let lastDigit = temp % 10;
    temp = parseInt(temp / 10);
    sum = sum + lastDigit ** 3;
  }
  return number === sum;
}
console.log(armstrongNumber(153))```
````
