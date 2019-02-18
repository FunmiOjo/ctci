const palindromePermutation = str => {
  const letterCounts = {}

  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[A - Za - z]/)) {
      const currentLetter = str[i].toLowerCase()
      if (!letterCounts[currentLetter]) {
        letterCounts[currentLetter] = 1
      } else {
        letterCounts[currentLetter] += 1
      }
    }
  }

  let unevenCount = 0

  for (let key in letterCounts) {
    if (letterCounts[key] % 2 !== 0) {
      unevenCount++
    }
  }

  if (unevenCount > 1) {
    //console.log('letterCounts', letterCounts)
    return false
  }

  return true
}

console.log('true?:  ', palindromePermutation('redivider'))
console.log('true?:  ', palindromePermutation('radar'))
console.log('true?:  ', palindromePermutation('civic'))
console.log('true?:  ', palindromePermutation('Able was I ere I saw Elba'))
console.log(
  'true?:  ',
  palindromePermutation('A man, a plan, a canal – Panama')
)

/* mistakes
  forgot to think about white spaces
  forgot to think about case
  forgot to think about diacritical marks
  made unevenCount a const even though I meant to change the variable
  tested for wrong condition in if statement checking whether a letter is already in letterCounts
*/
