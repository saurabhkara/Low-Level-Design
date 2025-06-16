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
| 16. | [Maximum occuring character in given string](#maximum-occuring-character-in-given-string)                                                                                                                                                                                                         |
| 17. | [Max and min element of array](#max-and-min-element-of-array)                                                                                                                                                                                                                                     |
| 18. | [Peak element in array](#peak-element-in-array)                                                                                                                                                                                                                                                   |
| 19. | [Second largest element in array](#second-largest-element-in-array)                                                                                                                                                                                                                               |
| 20. | [Find max element from nested array](#find-max-element-from-nested-array)                                                                                                                                                                                                                         |
| 21. | [Implement a function that takes two sorted arrays and merges them into single sorted array without using inbuilt methods](#merge-sorted-arrays)                                                                                                                                                  |
| 22. | [Find count of maximum consecutive 1's in array](#count-maximum-consecutive-one-in-array)                                                                                                                                                                                                         |
| 23. | [Write a program to print Hallow Rectangle in JS](#hallow-rectangle)                                                                                                                                                                                                                              |
| 24. | [Inverted Half Pyramid for N=5](#inverted-pyramid)                                                                                                                                                                                                                                                |
| 25. | [Half Pyramid for N=5](#half-pyramid)                                                                                                                                                                                                                                                             |
| 26. | [Half Pyramid using Numbers](#half-pyramid-using-number)                                                                                                                                                                                                                                          |
| 27. | [Flyod's Triangle](#flyods-triangle)                                                                                                                                                                                                                                                              |
| 28. | [Butterfly pattern](#butterfly-pattern)                                                                                                                                                                                                                                                           |
| 29. | [Print Inverted Pattern](#print-inverted-pattern)                                                                                                                                                                                                                                                 |
| 30. | [Print 0-1 Pattern for N=5](#print-0-1-pattern)                                                                                                                                                                                                                                                   |
| 31. | [Print Rhombus](#print-rhombus)                                                                                                                                                                                                                                                                   |
| 32. | [Print Number Pyramid](#print-pyramid)                                                                                                                                                                                                                                                            |
| 33. | [Print Palindromic Pattern](#print-palindromic-pattern)                                                                                                                                                                                                                                           |
| 34. | [Print star pattern](#print-star-pattern)                                                                                                                                                                                                                                                         |
| 35. | [How do you check if an element exist in array?](#how-do-you-check-if-an-element-exist-in-array)                                                                                                                                                                                                  |
| 36. | [Check element exist and return array index?](#check-element-exist-and-return-array-index)                                                                                                                                                                                                        |
| 37. | [Shallow copy and Deep Copy of array](#shallow-copy-and-deep-copy-of-array)                                                                                                                                                                                                                       |
| 38. | [Find pivot element in array](#find-pivot-element-in-array)                                                                                                                                                                                                                                       |
| 39. | [Find the index of first occurrence of given character in a string](#find-the-index-of-first-occurrence-of-given-character-in-a-string)                                                                                                                                                           |
| 40. | [Find the index of first occurrence of a given word in a sentence](#find-the-index-of-first-occurrence-of-a-given-word-in-a-sentence)                                                                                                                                                             |
| 41. | [Longest common prefix in array of string](#longest-common-prefix-in-array-of-string)                                                                                                                                                                                                             |
| 42. | [Length of last word in string](#length-of-last-word-in-string)                                                                                                                                                                                                                                   |
| 43. | [Reverse the string without using inbuilt method](#reverse-the-string-without-using-inbuilt-method)                                                                                                                                                                                               |
| 44. | [Valid Palindrome, After converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters](#valid-palindrome-after-converting-all-uppercase-letters-into-lowercase-letters-and-removing-all-non-alphanumeric-characters)                                      |
| 45. | [Reverse the words of string](#reverse-the-words-of-string)                                                                                                                                                                                                                                       |
| 46. | [Reverse the vowel of string](#reverse-the-vowel-of-string)                                                                                                                                                                                                                                       |
| 47. | [Check both strings are rotation each other](#check-both-strings-are-rotation-each-other)                                                                                                                                                                                                         |
| 48. | [Check two arrays are equal](#check-two-arrays-are-equal)                                                                                                                                                                                                                                         |
| 49. | [Sort array in Ascending and Descending order using sort method](#sort-array-in-ascending-and-descending-order-using-sort-method)                                                                                                                                                                 |
| 50. | [Find pivot index of given array](#find-pivot-index-of-array)                                                                                                                                                                                                                                     |

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

## Check strings are rotation of each other

```
const str15A = "saurabh";
const str15B = "urabhsa";

//Brute force method
//T(n)=O(n2) ; S(n)=O(n)

function isRotationByBruteForce(str1, str2) {
  if (!str1 | !str2 | (typeof str1 !== "string") | (typeof str2 !== "string")) {
    return;
  }
  const len1 = str1.length;
  const len2 = str2.length;

  if (len1 !== len2) {
    return false;
  }
  let temp = str1;
  for (let i = 0; i < len1; i++) {
    const firstchar = temp[0];
    const remainingString = temp.substring(1);
    const newWord = remainingString + firstchar;
    if (newWord === str2) {
      return true;
    }
    temp = newWord;
  }
  return false;
}

console.log(isRotationByBruteForce(str15A, str15B));

//KMP algorithm
//T(n)= O(n), S(n)=O(n)
function kmpAlgorithm(str1, str2) {
  const doubleStr = str1 + str1;
  return doubleStr.includes(str2);
}

console.log(kmpAlgorithm(str15A, str15B));

```

## Maximum occuring character in given string

```
function maxOcuringCharacterBruteForce(str) {
  if (!str | (typeof str !== "string")) {
    return;
  }

  let maxOccurNum = 0;
  let maxOccurChar = "";

  for (let i = 0; i < str.length; i++) {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        count++;
      }
    }

    if (maxOccurNum < count) {
      maxOccurChar = str[i];
      maxOccurNum = count;
    }
  }
  return {
    maxOccurChar,
    maxOccurNum,
  };
}

console.log(maxOcuringCharacterBruteForce("saurabh"));

// Optimize way using object
// T(n)= O(n)

function maxOccuringUsingObject(str) {
  if (!str | (typeof str !== "string")) {
    return;
  }

  const obj = {};

  for (let char of str) {
    obj[char] = (obj[char] | 0) + 1;
  }
  let count = 0;
  let maxOccurChar = "";
  for (let key in obj) {
    if (obj[key] > count) {
      count = obj[key];
      maxOccurChar = key;
    }
  }
  return {
    maxOccurChar,
    count,
  };
}
console.log(maxOccuringUsingObject("saurabh"));

```

## Max and min element of array

```
//T(n)=O(n)
function maxMinElement(arr) {
  if (!arr | !Array.isArray(arr)) {
    return;
  }

  let max = -Infinity;
  let min = Infinity;

  for (let item of arr) {
    if (item > max) {
      max = item;
    }

    if (item < min) {
      min = item;
    }
  }
  return { max, min };
}
console.log(maxMinElement([5, 8, 7, 9, 3, 7, -5, 3, 2, -2, 86]));
```

## Peak element in array

```
const arr18 = [2, 4, 6, 75, 5, 96, 5];
//T(n)=O(n)
function peakElement(arr) {
  if (!arr | !Array.isArray(arr)) {
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (i == 0 && arr[i] > arr[i + 1]) {
      return i;
    }

    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      return i;
    }

    if (i === arr.length - 1 && arr[i] > arr[i - 1]) {
      return i;
    }
  }
  return -1;
}

console.log(peakElement(arr18));

```

## Second largest element in array

```
const arr19 = [8, 9, 6, 7, 5, 2, 3, 4, 1];

function secondLargestElement(arr) {
  if (!arr | !Array.isArray(arr)) {
    return;
  }

  let max = -Infinity;
  let secondLargest = -Infinity;

  for (let item of arr) {
    if (item > max) {
      secondLargest = max;
      max = item;
    } else if (item > secondLargest && item < secondLargest) {
      secondLargest = item;
    }
  }
  return secondLargest;
}

console.log(secondLargestElement(arr19));
```

## Find max element from nested array

```
const arr20 = [7, [8, 5], [89, 65, [36]], 9, 5];

function getMaxElementFromNestArr(arr) {
  if (!arr) {
    return;
  }
  let max = -Infinity;
  for (let item of arr) {
    if (Array.isArray(item)) {
      const tempMax = getMaxElementFromNestArr(item, max);
      if (tempMax > max) {
        max = tempMax;
      }
    } else if (item > max) {
      max = item;
    }
  }
  return max;
}

console.log(getMaxElementFromNestArr(arr20));
```

## Merge sorted arrays

```
const sortedArr21A = [2, 5, 8, 16, 96];
const sortedArr21B = [8, 62, 72, 75];

function mergeSortedArr(arr1, arr2) {
  if (!arr1 | !arr2 | !Array.isArray(arr1) | !Array.isArray(arr2)) {
    return;
  }

  let final = [];
  let i1 = 0;
  let j1 = 0;
  let f1 = 0;

  while (i1 < arr1.length && j1 < arr2.length) {
    if (arr1[i1] <= arr2[j1]) {
      final[f1++] = arr1[i1++];
    } else {
      final[f1++] = arr2[j1++];
    }
  }

  while (i1 < arr1.length) {
    final[f1++] = arr1[i1++];
  }
  while (j1 < arr2.length) {
    final[f1++] = arr1[j1++];
  }
  return final;
}
console.log(mergeSortedArr(sortedArr21A, sortedArr21B));
```

## Count maximum consecutive one in array

```
function maximumConsecutiveOne(arr) {
  if (!arr | !Array.isArray(arr)) {
    return;
  }
  let count = 0;
  let max = 0;
  for (let item of arr) {
    if (item !== 1) {
      max = count > max ? count : max;
      count = 0;
    }
    count++;
  }
  return max;
}

console.log(maximumConsecutiveOne(arr22));

```

## Hallow Rectangle

```
function hallowRectangle(height, width) {
  if (!height | !width) {
    return;
  }
  let str = "";
  for (let j = 0; j < height; j++) {
    for (let i = 0; i < width; i++) {
      if ((i === 0) | (j === 0) | (j === height - 1) | (i === width - 1)) {
        str = str + "* ";
      } else {
        str = str + "  ";
      }
    }
    str = str + "\n";
  }
  console.log(str);
}

hallowRectangle(5, 4);

```

## Inverted pyramid

```
function halfInvertedPyramid() {
  let str = "";

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5 - i; j++) {
      str = str + "* ";
    }
    str += "\n";
  }
  console.log(str);
}

halfInvertedPyramid(5);

```

## Half Pyramid

```
function halfPyramidUsingNumber(num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      result += i + " ";
    }
    result += "\n";
  }
  return result;
}
console.log(halfPyramidUsingNumber(5));

```

## Half pyramid using number

```

1
22
333
4444
55555



function halfPyramidUsingNumber() {
  let result = "";
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
      result = result + i + " ";
    }
    result += "\n";
  }
  return result;
}

console.log(halfPyramidUsingNumber());

```

## Flyods triangle

```
function flyodsTriangle(row) {
  if (!row) {
    return;
  }

  let count = 1;
  let result = "";
  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= i; j++) {
      result = result + count + " ";

      count++;
    }
    result += "\n";
  }
  console.log(result);
}

flyodsTriangle(5);

```

## Butterfly pattern

```
function butterFlyPattern(num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      result = result + "*" + " ";
    }
    for (let j = 1; j <= 2 * (num - i); j++) {
      result = result + "  ";
    }
    for (let j = 1; j <= i; j++) {
      result = result + "*" + " ";
    }
    result = result + "\n";
  }
  for (let i = num; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      result = result + "*" + " ";
    }
    for (let j = 1; j <= 2 * (num - i); j++) {
      result = result + "  ";
    }
    for (let j = 1; j <= i; j++) {
      result = result + "*" + " ";
    }
    result = result + "\n";
  }
  console.log(result);
}

butterFlyPattern(5);

```

## Print Inverted Pattern

```

1 2 3 4 5
1 2 3 4
1 2 3
1 2
1


function invertedPattern(num) {
  if (!num) {
    return;
  }

  let result = "";

  for (let i = num; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      result += j + " ";
    }
    result = result + "\n";
  }
  return result;
}

console.log(invertedPattern(5));

```

## Print 0-1 Pattern

```
1
0 1
1 0 1
0 1 0 1
1 0 1 0 1


function zeroOnePaterrn(num) {
  let result = "";

  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      if ((i + j) % 2 == 0) {
        result += 0 + " ";
      } else {
        result = result + 1 + " ";
      }
    }
    result = result + "\n";
  }

  return result;
}

console.log(zeroOnePaterrn(5));

```

## Print Rhombus

```
          * * * * *
        * * * * *
      * * * * *
    * * * * *
  * * * * *


  function printRhombus(num) {
  let result = "";

  for (let i = num; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      result += "  ";
    }
    for (let j = 1; j <= num; j++) {
      result += "* ";
    }

    result += "\n";
  }
  return result;
}

```

## Print Pyramid

```
//    1
//   1 2
//  1 2 3
// 1 2 3 4
//1 2 3 4 5

function printPyramid(num) {
  if (!num) {
    return;
  }

  let result = "";

  for (let i = 1; i <= num; i++) {
    for (let j = num; j >= i; j--) {
      result = result + " ";
    }
    for (let j = 1; j <= i; j++) {
      result = result + j + " ";
    }
    result = result + "\n";
  }
  return result;
}

console.log(printPyramid(5));

```

## Print Palindromic Pattern

```
//   1
//  212
// 32123
//4321234

function palindromicPattern(num) {
  if (!num) {
    return;
  }

  let result = "";
  for (let i = 1; i <= num; i++) {
    for (let j = i; j <= num; j++) {
      result = result + " ";
    }
    for (let j = i; j > 1; j--) {
      result = result + j;
    }
    for (j = 1; j <= i; j++) {
      result = result + j;
    }
    result = result + "\n";
  }
  return result;
}

console.log(palindromicPattern(5));

```

## Print star pattern

```
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *
 * * * * *
  * * * *
   * * *
    * *
     *
function starPattern(num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num - i; j++) {
      result = result + " ";
    }
    for (let j = 0; j <= i; j++) {
      result = result + "* ";
    }
    result = result + "\n";
  }
  for (let i = num; i >= 0; i--) {
    for (let j = 0; j < num - i; j++) {
      result = result + " ";
    }
    for (let j = 0; j <= i; j++) {
      result = result + "* ";
    }
    result = result + "\n";
  }
  console.log(result);
}

starPattern(5);

```

## How do you check if an element exist in array?

```
const arr35 = [8, 5, 6, 7, 6, 4, 3, 12];
function checkElementExist(arr, element) {
  if (!Array.isArray(arr) | !element) {
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return true;
    }
  }
  return false;
}

console.log(checkElementExist(arr35, 8));

T(n)=O(n)
Javascript includes() inbuilt method can be used to find element exist in array
inclusdes() returns true if element is present in array else false, it works for string too.

```

## Check element exist and return array index?

```
const arr36 = [8, 86, 63, 88, 56, 35, 85];
function returnIndex(arr, element) {
  if (!Array.isArray(arr) | (typeof element !== "number")) {
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return i;
    }
  }
  return -1;
}

console.log(returnIndex(arr36, 85));
```

## Shallow copy and Deep Copy of array

```

const arr37 = [87, 65, 25, 20, 21, 10, 32];
const shallowCopyArr = arr37;
const deepCopyArr = [...arr37];
Shallow Copy stores the references of objects to the original memory address.
Deep copy stores the copy of the original object to the new memory address.

```

## Find pivot element in array

```
const arr38 = [1, 7, 3, 6, 5, 6];

function pivotElement(arr) {
  if (!Array.isArray(arr)) {
    return;
  }
  const arrLen = arr.length;
  for (i = 0; i < arr.length; i++) {
    if (arr[0] > arr[i] && i == 0) {
      return i;
    } else if (arr[arrLen - 1] > arr[arrLen - 2] && i === arrLen - 1) {
      return i;
    } else if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      return i;
    }
  }
  return -1;
}

console.log(pivotElement(arr38));

```

## Find the index of first occurrence of given character in a string

```
const str39 = "saurabhkumar";
```

```
function firstOccurance(str, char) {
  if (!str | !char | (typeof str !== "string") | (typeof char !== "string")) {
    return;
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      return i;
    }
  }
  return -1;
}

console.log(firstOccurance(str39, "a"));
```

```
console.log(str39.indexOf("a"));
```

## Find the index of first occurrence of a given word in a sentence

```
const str40 = "Yes you can do it. saurabh you are best saurabh";
function firstOccuranceOfWord(str, word) {
  const len1 = str1.length;
  const len2 = word.length;

  for (let i = 0; i < len1 - len2 + 1; i++) {
    const subStr = str.substring(i, i + len2);
    if (subStr === word) {
      return i;
    }
  }
  return -1;
}

console.log(firstOccuranceOfWord(str40, "saurabh"));

```

## Longest common prefix in array of string

```
const arr42 = ["RamaRama", "Rama", "Ram"];

function longestCommonPrefix(arr) {
  if (!Array.isArray(arr)) {
    return;
  }

  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    result = findCommonPrefix(arr[i], result);
  }

  return result;
}

function findCommonPrefix(str1, str2) {
  let commonSubSring = "";
  const length1 = str1.length;
  const length2 = str2.length;

  for (let i = 0; i < length1; i++) {
    if (str1[i] !== str2[i]) {
      break;
    }
    commonSubSring += str1[i];
  }
  return commonSubSring;
}
console.log(longestCommonPrefix(arr42));

```

## Length of last word in string

```
const str43 =
  "Saurabh is best javascript developer, i can do hell alot of things";

function lastWordLength(str) {
  if (!str | (typeof str !== "string")) {
    return;
  }
  const arrStr = str.split(" ");
  const lastPosition = arrStr.length;
  const lastWordLength = arrStr[lastPosition - 1];
  return lastWordLength.length;
}

console.log(lastWordLength(str43));

```

```
// without using inbuilt method

function lastWordLengthWithoutInBuiltMethod(str) {
  if (!str | (typeof str !== "string")) {
    return -1;
  }

  let lastSpaceIndex = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      lastSpaceIndex = i;
    }
  }
  const lastWord = str.substring(lastSpaceIndex + 1);
  return lastWord.length;
}

console.log(lastWordLengthWithoutInBuiltMethod(str43));

```

## Reverse the string without using inbuilt method

```
const str43 = "saurabh";

function reverseStringWithoutInbuild(str) {
  if (!str | (typeof str !== "string")) {
    return -1;
  }

  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result = result + str[i];
  }
  return result;
}

console.log(reverseStringWithoutInbuild(str43));

```

## Valid Palindrome, After converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters

```
let str44 = "ramram2marmar2*7";

function checkValidPalindrome(str) {
  if (!str | (typeof str !== "string")) {
    return;
  }

  let validStr = "";
  for (let char of str) {
    if (
      char.charCodeAt() >= "a".charCodeAt() &&
      char.charCodeAt() <= char.charCodeAt()
    ) {
      validStr = validStr + char;
    }
  }

  const validStrLen = validStr.length - 1;

  for (let i = 0; i <= parseInt(validStrLen / 2); i++) {
    if (validStr[i] !== validStr[validStrLen - i]) {
      return false;
    }
  }
  return true;
}

console.log(checkValidPalindrome(str44));

```

## Reverse the words of string

```
function revereeWords(str) {
  if (!str | (typeof str !== "string")) {
    return;
  }

  const arrStr = str.split(" ");
  let final = "";
  for (let i = 0; i < arrStr.length; i++) {
    console.log(arrStr[i]);
    final = arrStr[i] + " " + final;
  }
  return final;
}

console.log(revereeWords("Saurabh you are doing well"));
```

## Reverse the vowel of string

```
const str46 = "SaurabhKumari";

function isVowel(char) {
  if (!char | (typeof char !== "string")) {
    returm;
  }

  if (
    (char === "a") |
    (char === "e") |
    (char === "i") |
    (char === "o") |
    (char === "u")
  ) {
    return true;
  }
  return false;
}

function reverseVowelOfString(str) {
  if (!str | (typeof str !== "string")) {
    return;
  }
  let vowelSeq = "";
  for (let char of str) {
    if (isVowel(char)) {
      vowelSeq = vowelSeq + char;
    }
  }
  let final = "";
  let index = vowelSeq.length - 1;
  for (let char of str) {
    if (isVowel(char)) {
      final = final + vowelSeq[index--];
    } else {
      final = final + char;
    }
  }
  console.log(final);
}
console.log(reverseVowelOfString(str46));


```

## Check both strings are rotation each other

```
const str47A = "abcde";
const str47B = "bcdea";

function isRotaionOfEachOther(str1, str2) {
  if (!str1 | !str2 | (typeof str1 !== "string") | (typeof str2 !== "string")) {
    return;
  }

  const leng1 = str1.length;
  const leng2 = str2.length;
  if (leng1 !== leng2) {
    return false;
  }
  let temp = str1;
  for (let i = 0; i < temp.length; i++) {
    const firstChar = temp[0];
    const remainingStr = temp.substring(1);
    temp = remainingStr + firstChar;
    if (temp === str2) {
      return true;
    }
  }
  return false;
}

console.log(isRotaionOfEachOther(str47A, str47B));

// KMP algorithm
// T(n) = O(n)
function checkStrRotationUsingKMP(str1, str2) {
  if (!str1 | !str2 | (typeof str1 !== "string") | (typeof str2 !== "string")) {
    return;
  }

  const leng1 = str1.length;
  const leng2 = str2.length;
  if (leng1 !== leng2) {
    return false;
  }

  const concatedStr = str1 + str1;
  return concatedStr.includes(str2);
}

console.log(checkStrRotationUsingKMP(str47A, str47B));

```

## Check two arrays are equal

```
let arr48A = [5, 8, 9, 7, 3, 5];
let arr48B = [5, 8, 9, 7, 3, 5];

function isBothArraysEqual(arr1, arr2) {
  if (!Array.isArray(arr1) && !Array.isArray(arr2)) {
    return;
  }
  const arrLen1 = arr1.length;
  const arrLen2 = arr2.length;
  if (arrLen1 !== arrLen2) {
    return false;
  }

  for (let i = 0; i < arrLen1; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

console.log(isBothArraysEqual(arr48A, arr48B));

//T(n)=O(n)
```

## Sort array in Ascending and Descending order using sort method

```
const arr49 = [5, 8, 9, 4, 6, 7];
//Ascending order
arr49.sort((a, b) => a - b);
console.log(arr49);
// Descending Order
arr49.sort((a, b) => b - a);
console.log(arr49);

```

## Find pivot index of array

```
const arr50 = [1, 7, 3, 6, 5, 6];

function findPivotElementBruteForce(arr) {
  if (!Array.isArray(arr)) {
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    let leftSum = 0;
    let rightSum = 0;
    for (let k = 0; k < i; k++) {
      leftSum = leftSum + arr[k];
    }

    for (let j = i + 1; j < arr.length; j++) {
      rightSum = rightSum + arr[j];
    }

    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
}

console.log(findPivotElementBruteForce(arr50));
//T(n)= O(n2)

function findPivotElememtOptimalWay(arr) {
  if (!Array.isArray(arr)) {
    return;
  }
  let totalSum = 0;
  for (let i = 0; i < arr.length; i++) {
    totalSum = totalSum + arr[i];
  }

  let leftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let rightSum = totalSum - leftSum - arr[i];
    console.log(rightSum, leftSum);
    if (leftSum === rightSum) {
      return i;
    }
    leftSum = leftSum + arr[i];
  }
  return -1;
}

console.log(findPivotElememtOptimalWay(arr50));

// T(n) = O(n)


```

//https://docs.google.com/document/d/1hI4D_1CaxDWgf_mNHH0-5A7FBwFaFimJITEK-ggFimo/mobilebasic
