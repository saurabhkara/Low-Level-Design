// Pascal triangle
// https://leetcode.com/problems/pascals-triangle/

function pascalTriangle(num) {
  if (typeof num !== "number" || num <= 0) {
    return;
  }

  const result = [];
  for (let i = 0; i < num; i++) {
    let tempArr = [];

    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        tempArr.push(1);
      } else {
        const row = i - 1;
        const col1 = j - 1;
        const value = result[row][col1] + result[row][j];
        tempArr.push(value);
      }
    }
    result.push(tempArr);
  }
  console.log(result);
}

// console.log(pascalTriangle(5));

function pascalTriangleRecursson(numOfRows) {
  if (numOfRows === 0) {
    return [];
  }
  if (numOfRows === 1) {
    return [[1]];
  }

  const generatedArr = pascalTriangleRecursson(numOfRows - 1);

  const tempArr = [];

  for (let i = 0; i < numOfRows; i++) {
    if ((i === 0) | (i === numOfRows)) {
      tempArr[i] = 1;
    } else {
      tempArr[i] =
        generatedArr[numOfRows - 1][i - 1] + generatedArr[numOfRows - 1][i];
    }
  }
  generatedArr.push(tempArr);
}

console.log(pascalTriangleRecursson(2));

//Find Tringular sum of an array

//Recursive way

var triangularSum = function (nums) {
  if (!Array.isArray(nums)) {
    return;
  }

  if (nums.length === 1) {
    return nums[0];
  }

  const midElementArr = [];

  for (let i = 0; i < nums.length - 1; i++) {
    const element = nums[i] + nums[i + 1];
    const final = element % 10;
    midElementArr[i] = final;
  }
  return triangularSum(midElementArr);
};

//T(n) = O(n2);
//S(n)= O(n)

//Optimize way using loop

var triangularSum = function (nums) {
  while (nums.length > 1) {
    for (let i = 0; i < nums.length - 1; i++) {
      const element = (nums[i] + nums[i + 1]) % 10;
      nums[i] = element;
    }
    nums.pop();
  }
  return nums[0];
};

//T(n) =O(n2)
//S(n) = O(1)
