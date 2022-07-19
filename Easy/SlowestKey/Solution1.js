/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
    let maxReleaseTime = releaseTimes[0];
    let keyCode = keysPressed.charCodeAt(0);
    for(let i =1;i<releaseTimes.length;i++){
        let releaseTime = releaseTimes[i]-releaseTimes[i-1];
        if(releaseTime>maxReleaseTime){
            maxReleaseTime = releaseTime;
            keyCode = keysPressed.charCodeAt(i);
        }
        else if(releaseTime===maxReleaseTime){
            keyCode = Math.max(keyCode,keysPressed.charCodeAt(i));
        }
    }
    return String.fromCharCode(keyCode);
};
