/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function(changed) {
    if(changed.length % 2 !== 0){
        return [];
    }
    changed.sort(function(a,b){return a-b});
    const original = [];
    const nums = new Map();
    for(let num of changed){
        if(nums.has(num/2)){
            let count = nums.get(num/2);
            count--;
            if(count === 0){
                nums.delete(num/2); 
            }
            else{
                nums.set(num/2,count);
            }
            original.push(num/2);
        }
        else if(nums.has(num*2)){
            let count = nums.get(num*2);
            count--;
            if(count === 0){
                nums.delete(num*2); 
            }
            else{
                nums.set(num*2,count);
            }
            original.push(num);  
        }
        else{
            if(nums.has(num)){
                nums.set(num,nums.get(num)+1);
            }
            else{
                nums.set(num,1);
            }
        }
    }
    return (original.length === changed.length/2)? original : [];
};
