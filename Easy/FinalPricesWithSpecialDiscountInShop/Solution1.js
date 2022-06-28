/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    let indx = 0;
    while(indx<prices.length){
        let currPrice = prices[indx];
        let minIndx = indx+1;
        let discount = 0;
        while(minIndx<prices.length){
            if(prices[minIndx]<=currPrice){
                discount = prices[minIndx];
                break;
            }
            minIndx++;
        }
        prices[indx]= currPrice-discount;
        indx++;
    }
    return prices;
};
