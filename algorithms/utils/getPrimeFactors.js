/**
 * Helper function to get prime factors of a number
 * @param {number} num - The input number
 * @returns {number[]} - An array of prime factors
 */
export function getPrimeFactors(num) {
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