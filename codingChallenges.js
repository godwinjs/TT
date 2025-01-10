console.log('Baseball String rules coding challenge start...')
/*
    You're keeping score for a baseball game with string rules. The  game consists of several rounds, where the score of past rounds may affect future rouns' scores.
    At the begining of the game, you start with an empty record. You're given a list of strings ops, where ops[i] is the ith operation you must apply to the record and is one of the following;

        0. An integer x records the new score of x.
        0. "+" - Record a new score that is the sum of the sum of the previous two scores, it is guranteed there will always be two previous scores.
        0. "D" - Record a new score that is double the previous score, It is guaranteed there will always be a previous score.
        0. "C" - Invalidate the prvious score, removing it from the record. It is guranteed there will always be a previous score.

    Return the sum of all the scores in the record.

    Example 1:
        Input ops = ["5", "2", "C", "D", "+"]
        Output: 10
        "5" - adds 5 to the record, record is now [5].
        "2" - adds 2 to the record, record is now [2].
        "C" - Invaldates and removes the previous score, record is now [5].
        "D" - Add 2 * 5 = 10 to the record, record is now, [5, 10].
        "+" - Add 5 + 10 = 15 to the record. record is now, [5, 10, 15]

        the total number to be returned is 5+10+15 = 30;
        
    Example 2:
        Input ops = ["5", "-2", "4", "C", "D", "9", "+", "+"]
        Output: 27

    Example 3:
        Input ops = ["1"]
        Output: 1
*/

function stringRules(ops){
    var result = null;
    result = [];

    ops.map( item => {
        if(+item){
            result.push(+item)
        }
        if(item === "C"){
            c()
        }
        if(item === "D"){
            d();
        }
        if(item === "+"){
            plus()
        }
        
    })
    
    function c(){
        result.pop()
    }
    function d(){   
        result.push(2 * result[result.length -1])
    }
    function plus(){
        result.push([ ...result].splice(-2, 2).reduce((a, b) => a + b, 0))
    }
    
    result = result.reduce((a, b) => a + b, 0);
    return result;
}
console.log(`Example 1: ["5", "2", "C", "D", "+"] = `, stringRules(["5", "2", "C", "D", "+"]))
console.log(`Example 2: ["5", "-2", "4", "C", "D", "9", "+", "+"] = `, stringRules(["5", "-2", "4", "C", "D", "9", "+", "+"]))
console.log(`Example 3: ["1"] = `, stringRules(["1"]))
console.log('Baseball String rules coding challenge end...')


/*
    Numbers are represented by seven symbols: @, #, $, %, &, +, and ~
    Symbol Value
    @       1
    #       5                    
    $       10
    %       50
    &       100
    +       500
    ~       1000

    For example, 15 is written as $#, which is simply $ + #. The number 
*/

console.log('Smallest prime addition algorithm rules coding challenge start...')
/*
    Think of a positive number n as a puzzle. Your challenge is to keep breaking down this number into its prime 
    pieces and adding them up. You'll do this repeatedly until n can't be broken down anymore. What you're looking 
    for is the smallest number that n can become after all these additions.
    Example 1:
        Input n = 9
        Output: 5
    Explanation: Initially, n=9.
        9-3 3, so replace n with 3+3=6.
        6-2 3, so replace n with 2+3=5.
        So 5 is the smallest value that can't be further broken down.
    Example 2:
        Input: n=2
        Output: 2
    Explanation: Initially, n = 2.
        So 2 is the smallest value that can't be further broken down.
        Constraints:
            2<n<=4*10e6
        is¿Instructions

⚫ #Plan: Write a plan explaining your thought process for solving the problem. Mark this section with "#Plan". 
        You can add multi-line comments using We want to see how you plan your solution, clearly describing the 
        thought process for solving the problem. You can iteratively update the initial plan as you work through 
        the solution.
    Code Comments:
        When starting a new code section or fixing a bug, add a comment explaining your thought process. Avoid skipping 
            steps and provide more detail when in doubt.
        When modifying existing code after execution, document the new approach in a comment above the edited code block. 
            Explain the reasoning behind the changes and how the new approach aims to improve or fix the
        previous solution.
    Test Cases:
        Devise test cases covering base, average, and edge cases t Something wrong with the question or blank content? Use 
            the "Add custom test case" feature to test your code. Reload question Report a problem Running Tests: Use the 
            "Run Tests" button to test your code. If tes uvas your is a city
*/
/*
Plan
    Understand the problem: We need to break down the number into its prime factors, sum them, and repeat the process until we cannot break down the number further.
    Prime factorization: Implement a function to get the prime factors of a number.
    Iteration: Continuously replace the number with the sum of its prime factors until the number cannot be broken down further.
    Base cases: Handle the cases where the input number is already prime.
    Edge cases: Ensure the function works within the given constraints.
    Implementation
*/

/**
 * Helper function to get prime factors of a number
 * @param {number} num - The input number
 * @returns {number[]} - An array of prime factors
 */
function getPrimeFactors(num) {
    let factors = [];
    let divisor = 2;
    
    while (num >= 2) {
        if (num % divisor === 0) {
            factors.push(divisor);
            num = num / divisor;
        } else {
            divisor++;
        }
    }
    return factors;
}

/**
 * Function to find the smallest number n can become
 * @param {number} n - The input number
 * @returns {number} - The smallest number after breaking down repeatedly
 */

function smallestValue(n) {
    while (true) {
        let factors = getPrimeFactors(n);
        let sum = factors.reduce((acc, val) => acc + val, 0);
        
        if (sum === n) {
            return n;
        } else {
            n = sum;
        }
    }
}

// Example usage:
console.log(`Example 1: smallestValue(9) = `, smallestValue(9) ) // Output: 5
console.log(`Example 2: smallestValue(2) = `, smallestValue(2) ); // Output: 2

/*
Explanation
    Prime Factors Calculation: The getPrimeFactors function calculates the prime factors of a given number by dividing the number by the smallest possible divisor (starting from 2) and collecting the factors.
    Iteration to Find Smallest Value: The smallestValue function uses a loop to continuously replace the number 𝑛
    n with the sum of its prime factors until the sum remains unchanged (indicating it cannot be broken down further).
    This implementation ensures that we follow the process described in the problem statement and handle all potential edge cases effectively.
*/

console.log('Smallest prime addition algorithm rules coding challenge end...')



console.log('Shortest character algorithm coding challenge start...')

console.log('Shortest character algorithm coding challenge end...')