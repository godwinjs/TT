console.log('Shortest character algorithm coding challenge start...')

/* create a function thet returns the Lowest character in a string */

function lowestOccurringChar1 (str) {
  if (!str) {
    return ""; // Handle empty string case
  }
  
    let charArr = []
    let countArr = []

    for (let i in str ){

        if( charArr.includes(str[i]) ) {
            countArr[charArr.indexOf(str[i])] += 1;
        }else{
            charArr.push(str[i])
            countArr[charArr.indexOf(str[i])] = 1;
        }
    }

    return charArr[countArr.indexOf(Math.min(...countArr))]
}

function lowestOccurringChar2(str) {
    if (!str) {
      return ""; // Handle empty string case
    }
  
    const charCounts = {};
  
    // Count occurrences of each character
    for (let char of str) {
      charCounts[char] = (charCounts[char] || 0) + 1;
    }
  
    let lowestChar = str[0]; // Initialize with the first character
    let lowestCount = charCounts[lowestChar];
  
    // Find the character with the lowest count
    for (let char in charCounts) {
      if (charCounts[char] < lowestCount) {
        lowestCount = charCounts[char];
        lowestChar = char;
      }
    }
  
    return lowestChar;
}

// console.time('lowestCharacter')
// console.log(lowestCharacter('jyjtthhjjeerrdddjjff'))
// console.timeEnd('lowestCharacter')

// console.time('lowestOccurringChar')
// console.log(lowestOccurringChar('jyjtthhjjeerrdddjjff'))
// console.timeEnd('lowestOccurringChar')

console.log('Shortest character algorithm coding challenge end...')

module.exports = {
  lowestOccurringChar1,
  lowestOccurringChar2
}