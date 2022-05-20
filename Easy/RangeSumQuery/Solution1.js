/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.items = nums;
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    if(left ===right){
        return this.items[left];
    }
    let sum =0; 
    for(let indx=left; indx<=right; indx++){
        let ele = this.items[indx];
        sum+=ele;
    }
    return sum;
    
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
