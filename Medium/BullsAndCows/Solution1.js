/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let bulls = 0;
    const nonBulls = new Map();
    const guessed = new Map();
    let cows = 0;
    for(let i = 0; i < secret.length; i++){
        if(secret[i] === guess[i]){
            bulls++;
        }
        else{
            if(guessed.has(secret[i])){
                guessed.set(secret[i],guessed.get(secret[i])-1);
                if(guessed.get(secret[i]) === 0){
                    guessed.delete(secret[i]);
                }
                cows++;
            }
            else{
                if(nonBulls.has(secret[i])){
                    nonBulls.set(secret[i],nonBulls.get(secret[i])+1);
                }
                else{
                    nonBulls.set(secret[i],1);
                }
            }
            if(nonBulls.has(guess[i])){
                nonBulls.set(guess[i],nonBulls.get(guess[i])-1);
                if(nonBulls.get(guess[i]) === 0){
                    nonBulls.delete(guess[i]);
                }
                cows++;
            }
            else{
                if(guessed.has(guess[i])){
                    guessed.set(guess[i],guessed.get(guess[i]) + 1);
                }
                else{
                    guessed.set(guess[i],1);
                }
            }
        }
    }
    for(let key of nonBulls.keys()){
        if(guessed.has(key)){
            cows += Math.min(guessed.get(key),nonBulls.get(key));
        }
    }
    return bulls + 'A' + cows + 'B'
};
