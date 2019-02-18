const checkPermutations = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false
  }

  const str1Letters = {}
  const str2Letters = {}

  for (let i = 0; i < str1.length; i++) {
    if (!str1Letters[str1[i]]) {
      str1Letters[str1[i]] = 1
    } else {
      str1Letters[str1[i]] += 1
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (!str2Letters[str2[i]]) {
      str2Letters[str2[i]] = 1
    } else {
      str2Letters[str2[i]] += 1
    }
  }

  for (let key in str1Letters) {
    if (str1Letters[key] !== str2Letters[key]) {
      return false
    }
  }

  return true
}

/* mistakes
  put str1Letters.length in for loop instead of str1.length
  forgot to consider whitespaces
  forgot to consider case
*/

console.log('false?', checkPermutations('abba', 'bab'))
console.log('true?', checkPermutations('abba', 'baba'))
