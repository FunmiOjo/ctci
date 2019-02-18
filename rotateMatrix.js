const Matrix = require('./Matrix')

const rotateMatrix = matrix => {
  const numRows = matrix.length
  const halfNumRows = Math.floor(numRows / 2)
  const oneLessThanNumRows = numRows - 1
  let temp

  for (let i = 0; i < halfNumRows; i++) {
    for (let j = i; j < oneLessThanNumRows - i; j++) {
      temp = matrix[i][j]
      matrix[i][j] = matrix[oneLessThanNumRows - j][i]
      matrix[oneLessThanNumRows - j][i] =
        matrix[oneLessThanNumRows - i][oneLessThanNumRows - j]
      matrix[oneLessThanNumRows - i][oneLessThanNumRows - j] =
        matrix[j][oneLessThanNumRows - i]
      matrix[j][oneLessThanNumRows - i] = temp
    }
  }
  return matrix
}

const initialMatrix = new Matrix([
  ['A', 'B', 'C', 'D'],
  ['E', 'F', 'G', 'H'],
  ['I', 'J', 'K', 'L'],
  ['M', 'N', 'O', 'P'],
])

const rotatedMatrix = new Matrix(rotateMatrix(initialMatrix.arr))

const rotatedMatrixExample = new Matrix([
  ['M', 'I', 'E', 'A'],
  ['N', 'J', 'F', 'B'],
  ['O', 'K', 'G', 'C'],
  ['P', 'L', 'H', 'D'],
])

//rotateMatrix(initialMatrix)
console.log(
  'CORRECTLY ROTATED: ',
  rotatedMatrix.string() === rotatedMatrixExample.string()
)
console.log('ROTATED MATRIX')
console.log(rotatedMatrix.string())

/*
one off mistake in second for loop
 */
