/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        if(n===1){
            return n;
        }
        let left = 1;
        let right = n;
        while(left<=right){
            let middle = Math.floor(left + (right-left)/2);
           // console.log(middle);
            if(isBadVersion(middle)){
                if(!isBadVersion(middle-1)){
                    return middle;
                }
                else{
                    right =middle-1;
                }
            }
            else{
                left =middle+1;
            }
        }
    };
};
