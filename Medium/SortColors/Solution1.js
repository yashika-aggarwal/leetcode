/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let zeroes = 0;
    let ones = zeroes;
    let twos = ones;
    let p1 =0;
    let p2 = 0;
    while(p1<nums.length){
        switch(nums[p1]){
           case 0: zeroes++;
            break;
           case 1: ones++;
             break;
            case 2: twos++;
             break;     
        }
        p1++;
    }
    while(p2<nums.length){
        if(zeroes>0){
            nums[p2]=0;
            zeroes--;
        }
        else if(ones>0){
            nums[p2]=1;
            ones--;
        }
        else{
            nums[p2] =2;
            twos--;
        }
        p2++;
    }
};

