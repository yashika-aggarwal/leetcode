/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function(n, k) {
   const nums = [];
    if(n === 2){
        for(let uDig = 0; uDig < 10; uDig++){
            let d = uDig + k;
            if(d < 10 && d > 0){
                let num = d*10 + uDig;
                nums.push(num);
            }
            if(k > 0){
                d = uDig - k;
                if(d > 0){
                    let num =  d*10 + uDig;
                    nums.push(num);
                }
            }
        }
    }
    else{
        let prevNums = numsSameConsecDiff(n-1,k);
        if(k > 0){
            let num = (k*100) + k;  
            if(n === 3){
                nums.push(num);
            }
            else{
                let prevNumk = numsSameConsecDiff(n-2,k);
                for(let prev of prevNumk){
                    let lpd = parseInt(prev/Math.pow(10,n-3));
                    if(lpd === k){
                        let currNum = (num * Math.pow(10,n-3)) + (prev % Math.pow(10,n-3));
                        nums.push(currNum)
                    }
                }
            }
        }
        for(let prevNum of prevNums){
            let lastPlaceDigit = parseInt(prevNum/(Math.pow(10,n-2)));
            let d = lastPlaceDigit + k;
            if(d < 10){
               let num = (d * (Math.pow(10,n-1))) + prevNum;
                nums.push(num); 
            }
            if(k > 0){
                d = lastPlaceDigit - k;
                if(d > 0){
                    let num =  (d * (Math.pow(10,n-1))) + prevNum;
                    nums.push(num);
                }
            }
        }
    }
    return nums.sort((a,b)=>a-b);
};
