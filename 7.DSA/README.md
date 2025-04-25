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

| 8. | [Shift zero at end of array](#shift-zero-at-the-end-array)

|

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
