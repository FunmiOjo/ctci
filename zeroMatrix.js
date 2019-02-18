const Matrix = require('./Matrix')

const zeroMatrix = matrix => {
  let row
  let column
  const rows = {}
  const columns = {}
  let height = matrix.length
  let width = matrix[0].length
  let zeroFound = false

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (matrix[i][j] === 0) {
        zeroFound = true
        row = i
        column = j
        if (!rows[row]) {
          rows[row] = true
        }
        if (!columns[column]) {
          columns[column] = true
        }
      }
    }
  }

  if (!zeroFound) {
    return matrix
  }

  for (let k = 0; k < height; k++) {
    for (let key in columns) {
      matrix[k][key] = 0
    }
  }

  for (let m = 0; m < width; m++) {
    for (let key in rows) {
      matrix[key][m] = 0
    }
  }
  return matrix
}

const matrix = new Matrix([[1, 2, 3, 4, 0], [6, 1, 7, 8, 9], [2, 1, 2, 3, 4]])
console.log(matrix.string())
const zeroedMatrix = new Matrix(zeroMatrix(matrix.arr))
console.log(zeroedMatrix.string())
/*
forgot to write code to store location of columns with zeros in them
used wrong variable in for loop for row object keys
*/
