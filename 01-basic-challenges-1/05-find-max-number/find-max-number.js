function findMaxNumber(numbers) {
  let maxNumber = [0]
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i]
    }
  }
  return maxNumber
}

module.exports = findMaxNumber;
