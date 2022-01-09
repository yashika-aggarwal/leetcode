var twoSum = function(nums, target) {
    for (let i=0; i < nums.length; i++) {
        first_integer = nums[i];
        for (let j=i+1; j < nums.length; j++) {
            seconds_integer = nums[j];
            if (first_integer + seconds_integer == target) {
                return [i,j];
            } 
        }
    }  
};
