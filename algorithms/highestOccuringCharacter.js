/**
 * Function that returns the highest occuring character in a string
 * @param { string } str - string of characters to evaluate.
 * @returns { string } char - returns the highest occuring character
 */

export function highestOccuringCharacter(str) {
    const map = {}
    let char;

    for(let i in str ) {
        map[str[i]] = (map[str[i]] || 0 ) + 1
        if(!char){
            char = str[i]
        }

        if(map[str[i]] > map[char] ){
            char = str[i]
        }
    }

    return char
}