/**
 * Function to find the smallest number n can become
 * @param {Number[]} arr - is the list of numbers to get the max number of its sub arrays
 * @param {number} size - The number size is the length of the sub array to sum
 * @returns { { maxCombination: Number[], maxSum: Number } } maxCombination maxSum - an object containing The max combination that gives the highest sum, and the output sum
 * 
 */

export function maxNumberSum(arr, size ) {
    // let result: (string | number)[] = [];
    let maxSum = 0;
    let currentSum = 0;
    let maxCombination = [];

    if(size > arr.length){
        throw new Error('The size of the combination cannot be greater than the numbers provided')
    }
    
    const combination = (current, remaining) => {
        if (remaining.length === 0) {
            if (current.length > 0 && current.length === size) {
                // result.push(current);

                currentSum = current.reduce((a, b) => a + b, 0)
                // maxSum = Math.max(maxSum, currentSum);
                
                if(currentSum > maxSum ) {
                    maxSum = currentSum;
                    maxCombination = current
                }
            }

            return;
        }
        
        combination(current.concat(remaining[0]), remaining.slice(1));
        combination(current, remaining.slice(1));
    };
    
    combination([], arr);
    return {maxCombination, maxSum};

}

import { getCombinations3 } from "./utils/getCombinations.js";

function maxNumberSum2(arr, size) {
    if (size <= 0 || size > arr.length) {
        throw new Error("Invalid size: must be a positive integer less than or equal to the array length.");
    }

    // Generate all unique combinations of the given size
    const combinations = getCombinations3(arr, size);

    // Find the combination with the highest sum
    let maxSum = -Infinity;
    let result = [];

    combinations.forEach(combination => {
        const currentSum = combination.reduce((sum, num) => sum + num, 0);
        if (currentSum > maxSum) {
            maxSum = currentSum;
            result = combination;
        }
    });
    console.log(combinations)

    return result;
}