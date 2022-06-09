/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    for(let i=0; i<numbers.length;i++){
        let remainder = target - numbers[i];
        let left, right;
        if(remainder<numbers[i]){
            left = 0;
            right = i-1;
        }
        else{
            left = i+1;
            right = numbers.length-1;
        }
        while(left<=right){
            let middle = left + Math.floor((right-left)/2);
            if(numbers[middle]===remainder){
                return [i+1,middle+1];
            }
            else if(numbers[middle]<remainder){
                left = middle+1;
            }
            else{
                right = middle-1;
            }
        }
    }
};
