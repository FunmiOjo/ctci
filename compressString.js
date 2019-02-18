const compressString = str => {
  let startPointer = 0
  let repetitionPointer = 0
  let compressedString = ''
  let numRepetitions

  while (str[repetitionPointer] !== undefined) {
    if (str[repetitionPointer] !== str[startPointer]) {
      numRepetitions = repetitionPointer - startPointer
      compressedString += str[startPointer] + numRepetitions
      startPointer = repetitionPointer
    }
    repetitionPointer++
  }

  numRepetitions = repetitionPointer - startPointer
  compressedString += str[startPointer] + numRepetitions

  if (compressedString.length < str.length) {
    return compressedString
  } else {
    return str
  }
}

console.log('a2b1c5a3 -- ', compressString('aabcccccaaa'))
/*
mistakes
  forgot to add letter to compressedString not just number of repetitions
  what is and isn't in if and while loop is unclear in written code
  put incrementing of repetitionPointer outside while loop
  put bracket in while loop in the wrong place
  forgot about 
*/
