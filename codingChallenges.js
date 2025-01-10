
import { lowestOccurringChar1, lowestOccurringChar2 } from './algorithms/lowestOccuringCharacter.js';
import { getCombinations1, getCombinations2 } from './algorithms/utils/getCombinations.js';
import { getPermutations } from './algorithms/utils/getPermutation.js';
import { maxNumberSum } from './algorithms/maxNumberSum.js';
import { highestOccuringCharacter } from './algorithms/highestOccuringCharacter.js';

console.time('lowestCharacter1')
console.log(lowestOccurringChar1('jyjtthhjjeerrdddjjff'))
console.timeEnd('lowestCharacter1')

console.time('lowestOccurringChar2')
console.log(lowestOccurringChar2('jyjtthjjeerrdddjjff'))
console.timeEnd('lowestOccurringChar2')

console.log(highestOccuringCharacter('jyjtthhjjeerrdddjjff'))