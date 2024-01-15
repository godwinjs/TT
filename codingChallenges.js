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
console.log("Example 1", stringRules(["5", "2", "C", "D", "+"]))
console.log("Example 2", stringRules(["5", "-2", "4", "C", "D", "9", "+", "+"]))
console.log("Example 3", stringRules(["1"]))
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
