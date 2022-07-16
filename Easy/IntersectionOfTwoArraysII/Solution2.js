/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    nums1.sort(function (a,b){
        return a-b;
    });
    nums2.sort(function (a,b){
        return a-b;
    });
    console.log(nums1,nums2);
    let common = [];
    let largerArray = nums1;
    let smallerArray = nums2;
    if(nums2.length>nums1.length){
        largerArray = nums2;
        smallerArray = nums1;
    }
    let p1 = 0;
    let p2 = 0;
    while(p1<smallerArray.length && p2<largerArray.length){
            if(smallerArray[p1]===largerArray[p2]){
                common.push(smallerArray[p1]);
                p1++;
                p2++;
            }
            else if(smallerArray[p1]<largerArray[p2]){
                p1++;
            }
            else{
                p2++;
            }
    }
    for(let i = p2;i<largerArray.length;i++){
      //  console.log(largerArray)
        if(smallerArray[p1]<largerArray[i]){
            break;
        }
        else if(smallerArray[p1]===largerArray[i]){
            common.push(smallerArray[p1]);
            break;
        }
    }
    return common;
};
