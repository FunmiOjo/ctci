const urlify = str => {
  const charArray = str.split('')
  return charArray
    .map(elem => {
      if (elem === ' ') {
        return '%20'
      } else {
        return elem
      }
    })
    .join('')
}

console.log(urlify('fullstack academy') === 'fullstack%20academy')
console.log(
  urlify('fullstack academy  grace hopper ') ===
    'fullstack%20academy%20%20grace%20hopper%20'
)

const urlifyAlt = (str, length) => {
  // have a pointer to check from start to end
  const strArr = str.split('')
  const pointer = 0
  while (pointer < str.length)
}
/*
mistakes
  forgot to return in map when element is not a space 
*/
