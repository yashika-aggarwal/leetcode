/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    if (arr.length === 1) {
        return arr[0];
    }
    let elements = new Map();
    for (let i = 0; i < arr.length; i++) {
        let currEle = arr[i];
        if (elements.has(currEle)) {
            elements.set(currEle, elements.get(currEle) + 1);
            if (elements.get(currEle) > arr.length / 4) {
                return currEle;
            }
        }
        else {
            elements.set(currEle, 1);
        }
    }
};
