const diagonalMatch = (i, j, str1, str2) => {
  return (
    str1[i] === str2[j - 1] ||
    str1[i] === str2[j + 1] ||
    str2[j] == str1[i - 1] ||
    str2[j] === str1[i + 1]
  )
}

const nextCharMatch = (i, j, str1, str2) => {
  return str1[i + 1] === str2[j + 1]
}

const oneAway = (str1, str2) => {
  let i = 0,
    j = 0,
    numDifferences = 0
  while (str1[i] !== undefined && str2[j] !== undefined) {
    if (str1[i] !== str2[j]) {
      numDifferences++
      if (numDifferences > 1) {
        return false
      }

      if (nextCharMatch(i, j, str1, str2)) {
        i += 2
        j += 2
      } else if (diagonalMatch(i, j, str1, str2)) {
        i++
      } else {
        return false
      }
    } else {
      i++
      j++
    }
  }
  return true
}

console.log('true?', oneAway('pale', 'ple'))
console.log('true?', oneAway('pales', 'pale'))
console.log('true?', oneAway('pale', 'bale'))
console.log('false?', oneAway('pale', 'bake'))
/* mistakes
  did not consider empty strings
  should have considered diagonal and next match cases separately
  PALE
  PLE
*/
