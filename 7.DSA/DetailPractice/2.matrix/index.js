// Transpose of matrix

var transpose = function (matrix) {
  const row = matrix.length;
  const col = matrix[0].length;

  const result = [];

  for (let i = 0; i < col; i++) {
    let rowArr = [];

    for (let j = 0; j < row; j++) {
      rowArr[j] = matrix[j][i];
    }
    result[i] = rowArr;
  }
  return result;
};

//T(n) = O(n2)

// Spiral Matrix

const n = 4;
const resArr = Array.from({ length: n }, () =>
  Array.from({ length: n }).fill(0)
);

let left = 0;
let right = n - 1;
let top = 0;
let bottom = n - 1;
let count = 1;

while (left <= right && top <= bottom) {
  for (let i = left; i <= right; i++) {
    resArr[top][i] = count++;
  }

  top++;
  for (let i = top; i <= bottom; i++) {
    resArr[i][right] = count++;
  }
  right--;
  for (let i = right; i >= left; i--) {
    resArr[bottom][i] = count++;
  }
  bottom--;
  for (let i = bottom; i >= top; i--) {
    resArr[i][left] = count++;
  }
  left++;
}

console.log(resArr);

//T(n) = O(n2)
