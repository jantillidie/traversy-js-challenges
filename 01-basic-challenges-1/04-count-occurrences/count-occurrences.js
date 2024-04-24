// function countOccurrences(str, char) {
//   let occurrences = 0

//   for (let i = 0; i < str.length; i++) {
//     if (char === str[i]) {
//       occurrences++
//     }
//   }

//   return occurrences
// }

const countOccurrences = (str, char) => str.split(char).length -1

module.exports = countOccurrences;
