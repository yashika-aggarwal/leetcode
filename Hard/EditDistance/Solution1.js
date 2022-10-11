/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    if(word1.length === 0 || word2.length === 0){
        return word1.length === 0? word2.length : word1.length;
    }
    let distance = [[0]];
    for (let j = 1; j <= word1.length; j++) {
        distance[j] = ([j]);
        for (let i = 1; i <= word2.length; i++) {
            distance[0][i] = i;
            let insertion = distance[j - 1][i] + 1;
            let deletion = distance[j][i - 1] + 1;
            let match = distance[j - 1][i - 1];
            let mismatch = distance[j - 1][i - 1] + 1;
            if (word1[j - 1] === word2[i - 1]) {
                distance[j][i] = Math.min(insertion, deletion, match);
            }
            else {
                distance[j][i] = Math.min(insertion, deletion, mismatch);
            }
        }
    }
    return distance[word1.length][word2.length];
};
