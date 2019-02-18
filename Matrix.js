class Matrix {
  constructor(arr) {
    this.arr = arr
  }

  // currently written for two-dimensional matrices
  string() {
    return this.arr.map(innerArr => innerArr.join(' ')).join('\n')
  }

  print() {
    this.arr.forEach(innerArr => console.log(innerArr.join(' ')))
  }
}

module.exports = Matrix
