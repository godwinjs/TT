/*
    You're keeping score for a baseball game with string rules. The  game consists of several rounds, where the score of past rounds may affect future rouns' scores.
    At the begining of the game, you start with an empty record. You're given a list of strings ops, where ops[i] is the ith operation you must apply to the record and is one of the following;

    0. An integer x records the new score of x.
    0. "+" - Record a new score that is the sum of the sum of the previous two scores, it is guranteed there will always be two previous scores.
    0. "D" - Record a new score that is double the previous score, It is guaranteed there will always be a previous score.
    0. "C" - Invalidate the prvious score, removing it from the record. It is guranteed there will always be a previous score
*/