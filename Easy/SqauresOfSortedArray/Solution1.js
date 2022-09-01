/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let p1 = nums.length-1;
    while(nums[p1] >= 0){
        p1--;
    }
    let p2 = p1+1;
    let squares = [];
    if(nums[p2] === 0){
       squares.push(nums[p2]);
        p2++;
    }
    while(squares.length < nums.length){
        if(p1 >= 0 && p2 < nums.length){
            let s1 = Math.pow(nums[p1],2);
            let s2 = Math.pow(nums[p2],2);
            if(s1 < s2){
                squares.push(s1);
                p1--;
            }
            else{
                squares.push(s2);
                p2++;
            }
        }
        else if(p1 >= 0){
            squares.push(Math.pow(nums[p1],2));
                p1--; 
        }
        else if(p2 < nums.length){
            squares.push(Math.pow(nums[p2],2));
            p2++;
        }
    }
    return squares;
};
