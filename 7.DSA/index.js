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

//3. Remove duplicate element from array

//using Brute force method- T(n)= O(n2)

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

// using Object - T(n)=O(n);

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

// 4. Min and Max element of given array

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

// 5. Two Sum (Leet code question)
//https://leetcode.com/problems/two-sum/description/

const arr5 = [2, 11, 15, 7];
const sum5 = 9;

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

// 6. Factorial of number

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

// 7. Remove duplicate keys and merge array values of an object in JavaScript

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

// you can use Reduce method instead of seprate object and forloop

// 8. Shift zero at the end of array
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

// 9. Reverse the given string  inplace(without extra space)
// T(n)= O(n)
const str9 = "Manmohan";

function reverseStringRecursively(str) {
  if (str === "") {
    return "";
  }
  const remainingString = str.substring(1);
  return reverseStringRecursively(remainingString) + str[0];
}

console.log(reverseStringRecursively("Saurabh"));

// 10. Print Duplicate characters from string in string

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

// 11. Check given strings are anagram of each other

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

// Q.12 Print first non-repeating occurance of character in string

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

// Q.13 Reverse words in given Sentence
let sentence13 = "anyone can achieve anything";

//T(n)=O(n)
function reverseWordSentence(sentence) {
  if (!sentence | (typeof sentence !== "string")) {
    return;
  }

  return sentence.split(" ").reverse().join(" ");
}

console.log(reverseWordSentence(sentence13));

// Q.14 Reverse the character of words in the sentence but words will be at same position;

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

// Q.15 Check strings are rotation of each other
//  Two strings are rotations of each other if they contain the same characters in the same order,
//just shifted by some number of positions.

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

// Q. 16 Maximum occuring character in given string
// Brute force method - T(n)=O(n2)

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

// Q. 17 Max and min element of array
// T(n)=O(n)
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

// Q.18 Peak element in array
// A peak element in an array is an element that is greater than both of its adjacent elements.
//T(n)= O(n)
const arr18 = [2, 4, 6, 75, 5, 96, 5];

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

// Q .19 Second largest element in array
//T(n)=O(n)
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

// Q.20 Find max element from nested array

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

// Q.21 Implement a function that takes two sorted arrays and merges them into single sorted array without using
// inbuilt methods

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

// Q.22 Find count of maximum consecutive 1's in array

let arr22 = [
  1, 1, 1, 1, 5, 6, 8, 9, 6, 3, 2, 1, 1, 1, 1, 8, 9, 7, 3, 2, 1, 1, 1, 1, 1,
];

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

// Q.23 Write a program to print Hallow Rectangle in JS

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

// Q.24 Inverted Half Pyramid for N=5

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

// Q.25 Half Pyramid for N=5

function halfPyramid() {
  let result = "";

  for (let i = 1; i <= 5; i++) {
    for (let j = 5; j > 0; j--) {
      if (j <= i) {
        result = result + "* ";
      } else {
        result = result + "  ";
      }
    }
    result = result + "\n";
  }
  return result;
}

console.log(halfPyramid());

// Q.26 Half Pyramid using Numbers
// 1
// 22
// 333
// 4444
// 55555

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

// Q.27 Flyod's triangle
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

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

// Q.28 Butterfly Pattern

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

// Q.29 Print Inverted Pattern

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

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

// Q.30 Print 0-1 Pattern for N=5

// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1

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

// Q.31 Print the Rhombus

//         * * * * *
//       * * * * *
//     * * * * *
//   * * * * *
// * * * * *
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

console.log(printRhombus(5));

// Q.32 Print this number pattern
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

// Q.33 Print Palindromic Pattern

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

// Q.34 Print star pattern

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

//------------------------------
// Array Questions

// Q.35 How do you check if an element exist in array?

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

// T(n)=O(n)
// Javascript includes() inbuilt method can be used to find element exist in array
// inclusdes() returns true if element is present in array else false, it works for string too.

// Q.36 Check element exist and return array index

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

// Q.37 Shallow copy and Deep Copy of array

const arr37 = [87, 65, 25, 20, 21, 10, 32];
const shallowCopyArr = arr37;
const deepCopyArr = [...arr37];
//Shallow Copy stores the references of objects to the original memory address.
//Deep copy stores the copy of the original object to the new memory address.

// Q.38 Find pivot element in array

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

// Q.39 Find the index of first occurance in string

const str39 = "saurabhkumar";

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

console.log(str39.indexOf("a"));

// Q.40 Find the index of first occurance of given word in a string

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

// Q.41 Reverse the string without using inbuilt method

const str41 = "saurabh";

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

console.log(reverseStringWithoutInbuild(str41));

// Q.42 Longest common prefix in array of string

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
