# DSA Problems and Solution in JS

### Table of Contents

| No. | Question                                                                                                                                                                                                                                                                                          |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.  | [A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters (Leetcode 125)](#a-phrase-is-a-palindrome-if-after-converting-all-uppercase-letters-into-lowercase-letters-and-removing-all-non-alphanumeric-characters) |
| 2.  | [Armstrong number](#armstrong-number)                                                                                                                                                                                                                                                             |
| 3.  | [Remove Duplicate element from array](#remove-duplicate-element-from-array)                                                                                                                                                                                                                       |
| 4.  | [Find minimmum and maximum value of array](#find-minimum-and-maximum-value-of-array)                                                                                                                                                                                                              |
| 5.  | [Two Sum leet Code question](#two-sum-question)                                                                                                                                                                                                                                                   |
| 6.  | [Factorial of given number](#factorial-of-number)                                                                                                                                                                                                                                                 |
| 7.  | [Remove duplicate keys and merge array values of an object in JavaScript](#remove-duplicate-keys-and-merge-array-values)                                                                                                                                                                          |
| 8.  | [Shift zero at end of array](#shift-zero-at-the-end-array)                                                                                                                                                                                                                                        |
| 9.  | [Reverse the given string inplace(without extra space)](#reverse-string-implace)                                                                                                                                                                                                                  |
| 10. | [Print Duplicate characters from string in string](#duplicate-characters-from-string)                                                                                                                                                                                                             |
| 11. | [Check both strings are anagram of each other](#strings-anagram-of-each-other)                                                                                                                                                                                                                    |
| 12. | [Print first non-repeating occurance of character in string](#first-non-repeating-character-in-string)                                                                                                                                                                                            |
| 13. | [Reverse words in given Sentence](#reverse-words-of-given-sentence)                                                                                                                                                                                                                               |
| 14. | [Reverse the character of words in the sentence but words will be at same position](#reverse-the-character-of-words-in-the-sentence-but-words-will-be-at-same-position)                                                                                                                           |
| 15. | [Check strings are rotation of each other](#check-strings-are-rotation-of-each-other)                                                                                                                                                                                                             |

|

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

## Remove Duplicate element from array

```
//Using Brute force method- T(n)= O(n2)

const arr3 = [8, 6, 7, 8, 3, 2, 7, 6, 1, 0];

function removeDuplicateElemBruteForce(arr) {
  const uniqueElemArr = [];

  for (let i = 0; i < arr.length; i++) {
    let duplicate = false;
    let uniqueElemArrLenght = uniqueElemArr.length;
    for (let j = 0; j < uniqueElemArrLenght; j++) {
      if (uniqueElemArr[j] === arr[i]) {
        duplicate = true;
        break;
      }
    }
    if (!duplicate) {
      uniqueElemArr[uniqueElemArrLenght] = arr[i];
    }
  }
  console.log(uniqueElemArr);
}

removeDuplicateElemBruteForce(arr3);

//using Object - T(n)=O(n);

function removeDuplicateElemUsingObject(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = arr[i];
    }
  }
  const values = Object.values(obj);
  console.log(values);
}

removeDuplicateElemUsingObject(arr3);

// Using set - T(n) =O(n)

function removeDuplicateElemUsingSet(arr) {
  const set = new Set(arr);
  console.log([...set]);
  return [...set];
}

removeDuplicateElemUsingSet(arr3);
```

## Find Minimum and Maximum value of array

```
const arr4 = [4, -1, 8, 9, 3, 0, 15];

function minMax(arr) {
  let min = Infinity;
  let max = -Infinity;
  let currentIndex = 0;
  while (currentIndex < arr.length) {
    const currentValue = arr[currentIndex++];
    if (min > currentValue) {
      min = currentValue;
    }
    if (max < currentValue) {
      max = currentValue;
    }
  }

  return { minValue: min, maxValue: max };
}

console.log(minMax(arr4));
```

## Two sum question

```
// Brute force approach -T(n) = O(n2)
function twoSum(arr, sum) {
  if (!Array.isArray(arr)) {
    return;
  }
  const resultIndex = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        resultIndex[0] = i;
        resultIndex[1] = j;
        return resultIndex;
      }
    }
  }
  return [];
}

console.log(twoSum(arr5, sum5));

//Using Object - T(n)= O(n)

function twoSumUsingObj(arr, target) {
  if (!Array.isArray(arr)) {
    return;
  }
  const obj = {};
  for (let index = 0; index < arr.length; index++) {
    obj[arr[index]] = index;
  }

  for (let key in obj) {
    const complement = target - key;
    if (!!obj[complement]) {
      const firstIndex = obj[key];
      const secondIndex = obj[complement];
      return [firstIndex, secondIndex];
    }
  }

  return [];
}

console.log(twoSumUsingObj(arr5, sum5));

```

## Factorial of number

```
//Iterative way  - T(n) = O(n)
function factorialUsingIterative(num) {
  if (!num) {
    return;
  }
  if (num === 0 || num === 1) {
    return num;
  }
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorialUsingIterative(5));

// Recursive way T(n)= O(n)

function factorialRecursive(num) {
  if (!num) {
    return;
  }

  if (num === 1) {
    return 1;
  }

  return num * factorialRecursive(num - 1);
}

console.log(factorialRecursive(6));

```

Remove-duplicate-keys-and-merge-array-values

## Remove duplicate keys and merge array values

```

const originalArr7 = [
  { id: 1, element: [1, 2] },
  { id: 2, element: [3, 4] },
  { id: 2, element: ["a", "b"] },
  { id: 3, element: ["a2b"] },
];

function removeDuplicateAndMerge(arr) {
  const obj = {};

  for (let item of arr) {
    if (obj[item.id]) {
      const arri2 = obj[item.id].element;
      const arrii = [...item.element, ...arri2];
      obj[item.id].element = arrii;
    } else {
      obj[item.id] = item;
    }
  }

  return Object.values(obj);
}

console.log(removeDuplicateAndMerge(originalArr7));

```

## Shift Zero at the end array

```

const arr8 = [10, 0, 230, 7, 9, 0, 10];

//brute force approach T(n)=O(n) Optimal
function shiftZeroToEnd(arr) {
  if (!Array.isArray(arr) | (arr.length === 0)) {
    return;
  }

  let zeroCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroCount++;
    } else {
      arr[i - zeroCount] = arr[i];
    }
  }

  for (let i = arr.length - zeroCount; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
}

console.log(shiftZeroToEnd(arr8));


```

## Reverse string implace

```
function reverseStringRecursively(str) {
  if (str === "") {
    return "";
  }
  const remainingString = str.substring(1);
  return reverseStringRecursively(remainingString) + str[0];
}

console.log(reverseStringRecursively("Saurabh"));
```

## Duplicate characters from string

```
const str10 = "printduplicatecharacter";

//Brute force => T(n)=O(n2)

function printDuplicateCharacterUsingBrute(str) {
  if (!str || typeof str !== "string") {
    return;
  }
  let result = "";
  let count = 0;
  for (let i = 0; i < str.length - 1; i++) {
    count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        count++;
      }
    }

    if (result.indexOf(str[i]) === -1 && count > 1) {
      result = result + str[i];
    }
  }

  console.log(result);
}

printDuplicateCharacterUsingBrute(str10);
// Optimize Way using Object =>  T(n)=O(n)

function duplcateCharacterUsingObj(str) {
  if (str === "") return;

  const obj = {};

  for (let char of str) {
    if (!obj[char]) {
      obj[char] = 1;
    } else {
      obj[char] = obj[char] + 1;
    }
  }
  let result = "";

  for (let key in obj) {
    if (obj[key] > 1) result = result + key;
  }

  return result;
}

console.log(duplcateCharacterUsingObj(str10));

```

## Strings anagram of each other

```
const str11A = "Army";
const str11B = "Mary";

// Brute force method T(n)= O(nlogn)

function isAnagramByBrute(str1, str2) {
  if (
    (str1 === "") |
    (str2 === "") |
    (typeof str1 !== "string") |
    (typeof str2 !== "string")
  ) {
    return;
  }

  const len1 = str1.length;
  const len2 = str2.length;

  if (len1 !== len2) {
    return false;
  }

  const sortedStr1 = str1.toLowerCase().split("").sort().join("");
  const sortedStr2 = str2.toLowerCase().split("").sort().join("");

  if (sortedStr1 === sortedStr2) {
    return true;
  }
  return false;
}

console.log(isAnagramByBrute(str11A, str11B));

// optimized way - T(n)=O(n)

function isAnagramByObject(str1, str2) {
  if (!str1 | !str2 | (typeof str1 !== "string") | (typeof str2 !== "string")) {
    return;
  }

  if (str1.length !== str2.length) {
    return;
  }

  let obj = {};
  const lowrStr1 = str1.toLowerCase();
  const lowrStr2 = str2.toLowerCase();
  for (let char of lowrStr1) {
    if (obj[char]) {
      obj[char] = obj[char] + 1;
    } else {
      obj[char] = 1;
    }
  }

  for (let char of lowrStr2) {
    if (obj[char]) {
      obj[char] = obj[char] - 1;
    } else {
      return false;
    }
  }

  return true;
}

console.log(isAnagramByObject(str11A, str11B));

```

## First Non-repeating character in string

```
const str12 = "counttheoccurance";

function firstNonRepeating(str) {
  if (!str | (typeof str !== "string")) {
    return;
  }
  let obj = {};
  for (let char of str) {
    obj[char] = (obj[char] | 0) + 1;
  }
  for (let char of str) {
    if (obj[char] === 1) {
      return char;
    }
  }
  return -1;
}

console.log(firstNonRepeating(str12));

```

## Reverse words of given sentence

```
let sentence13 = "anyone can achieve anything";

//T(n)=O(n)
function reverseWordSentence(sentence) {
  if (!sentence | (typeof sentence !== "string")) {
    return;
  }

  return sentence.split(" ").reverse().join(" ");
}

console.log(reverseWordSentence(sentence13));

```

## Reverse the character of words in the sentence but words will be at same position

```
let sentence14 = "anyone can achieve anything, try ";

//T(n) = O(n) &  S(n)=O(n)
function revCharacterOfWords(sentence) {
  if (!sentence | (typeof sentence !== "string")) {
    return;
  }

  const reverseSen = sentence.split("").reverse().join("");
  const result = reverseSen.split(" ").reverse().join(" ");
  return result;
}

console.log(revCharacterOfWords(sentence14));

//T(n)= O(n) & S(n)=O(n). Better than above one
function revCharacterOfWordsSecond(sentence) {
  if (!sentence | (typeof sentence !== "string")) {
    return;
  }

  const seprateWord = sentence.split(" ").reverse().join(" ");
  let result = "";
  for (let word of seprateWord) {
    const reverseWord = word.split("").reverse().join("");
    result = result + reverseWord + " ";
  }
  return result;
}

console.log(revCharacterOfWords(sentence14));

//T(n)=O(n) S(n)=O(1)
function reverseWordsInPlace(sentence) {
  if (!sentence || typeof sentence !== "string") return;

  let chars = sentence.split("");
  let start = 0;

  for (let i = 0; i <= chars.length; i++) {
    if (i === chars.length || chars[i] === " ") {
      let left = start,
        right = i - 1;
      while (left < right) {
        [chars[left], chars[right]] = [chars[right], chars[left]];
        left++;
        right--;
      }
      start = i + 1;
    }
  }

  return chars.join("");
}

console.log(reverseWordsInPlace("Anything can achieved by anyone"));

```
