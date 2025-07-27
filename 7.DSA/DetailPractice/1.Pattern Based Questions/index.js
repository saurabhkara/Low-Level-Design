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
