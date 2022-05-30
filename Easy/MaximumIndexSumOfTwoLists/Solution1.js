/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let indx = 0;
    let res = new Map();
    let min =2000;
    let fav=[];
   //  let fav1, fav2;
    while(indx<list1.length || indx<list2.length){
        if(indx<list1.length){
           let  fav1 = list1[indx];
            if(res.has(fav1)){
            let indxSum = res.get(fav1)+indx;
            if(indxSum<min){
                fav=[];
                fav.push(fav1);
                min = Math.min(min,indxSum);
            }
            else if(indxSum ===min){
                fav.push(fav1);
            }
        }
        if(!res.has(fav1)){
            res.set(fav1,indx);
        }
        }
        if(indx<list2.length){
           let  fav2 = list2[indx];
             if(res.has(fav2)){
            let indxSum = res.get(fav2)+indx;
            if(indxSum<min){
                fav =[];       
                fav.push(fav2);
                min= Math.min(min,indxSum);
            }
            else if(indxSum ===min){
                fav.push(fav2);
            }
        }
        if(!res.has(fav2)){
            res.set(fav2,indx);
        }
        }
      //  console.log(fav2,res,min); 
        indx++
    }
    return fav;
};
