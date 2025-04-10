function textToNumberBinary(str) {
  let words = str
    .split(' ')
    .filter(
      (word) => word.toLowerCase() === 'zero' || word.toLowerCase() === 'one'
    )

  let binaryString = words
    .map((word) => {
      return word.toLowerCase() === 'zero' ? '0' : '1'
    })
    .join('')

  const excessLength = binaryString.length % 8
  if (excessLength !== 0) {
    binaryString = binaryString.slice(0, 0)
  }
  return binaryString
  console.log(binaryString)
}

console.log(textToNumberBinary('Zero one zero ONE zero one zero one'))
