/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let p1 = 0;
    let p2 = height.length-1;
    let maxArea=0;
    while(p1<p2){
        let area = Math.min(height[p1],height[p2])*(p2-p1);
        maxArea = Math.max(area,maxArea);
        if(height[p1+1]-height[p1]>1){
            p1++; 
        }
        else if(height[p2-1]-height[p2]>1){
            p2--;
        }
        else if(height[p2]<height[p1]){
            p2--;
        }
        else{
            p1++;
        }
    }
    return maxArea;
};
