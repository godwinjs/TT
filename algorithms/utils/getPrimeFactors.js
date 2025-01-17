/**
 * Helper function to get prime factors of a number
 * @param {number} num - The input number
 * @returns {number[]} - An array of prime factors
 */
export function getPrimeFactors(num) {
    //num will go through a lot in this fuction... lol
    //he will be judged, used, and never returned...
    let factors = [];
    let divisor = 2;
    
    while (num >= 2) { //once divisor is greater than num... the factors gets returned
        if (num % divisor === 0) {
            factors.push(divisor);
            num = num / divisor; // num reduces to the value of dividing num by the divisor
        } else {
            divisor++;
        }
    }
    return factors;
}
