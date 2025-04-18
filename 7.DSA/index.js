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
