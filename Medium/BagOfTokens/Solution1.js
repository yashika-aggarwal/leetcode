/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
    tokens.sort(function(a,b){return a-b});
    let p1 = 0;
    let p2 = tokens.length -1;
    let score = 0;
    while(p1 <= p2){
        if(power >= tokens[p1]){
            score++;
            power -= tokens[p1];
            p1++;
        }
        else if(p1 < p2 && score >= 1){
            score --;
            power += tokens[p2];
            p2--;
        }
        else{
            p1++;
        }
    }
    return score;
};
