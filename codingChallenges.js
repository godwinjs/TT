
const { lowestOccurringChar1, lowestOccurringChar2 } = require('./algorithms/lowestOccuringCharacter.js');

console.time('lowestCharacter1')
console.log(lowestOccurringChar1('jyjtthhjjeerrdddjjff'))
console.timeEnd('lowestCharacter1')

console.time('lowestOccurringChar2')
console.log(lowestOccurringChar2('jyjtthhjjeerrdddjjff'))
console.timeEnd('lowestOccurringChar2')