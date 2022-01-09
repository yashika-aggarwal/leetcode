/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var dict = Object();
    for (let idx=0; idx < nums.length; idx++) {
        remainder = target - nums[idx];
        if(dict[nums[idx]]){
            dict[nums[idx]][dict[nums[idx]].length] = [remainder, idx];
        } else {
            dict[nums[idx]] = [[remainder, idx]];
        }
        
    }
    for(var key in dict){
        var values = dict[key];
        for (let ele1=0; ele1 < values.length; ele1++) {
            value = values[ele1];
            remainder = value[0];
            index1 = value[1];
            if(dict[remainder]){
                values = dict[remainder];
                for (let ele2=0; ele2 < values.length; ele2++) {
                    value = values[ele2];
                    index2 = value[1];
                    if (index1!=index2) {
                        return [index1, index2];
                    }
                }
            }

        }
    }
};
