/**
 * @param {number[][]} transactions
 * @return {number}
 */
function EvaluateDeal(deal,money,start){
    let [cost,cashback] = deal;
    if(money >= cost){
        money = money - cost + cashback;
    }
    else{
        start += (cost - money);
        money = 0;
        money += cashback;
    }
    return [start,money];
}

var minimumMoney = function(transactions) {
    const goodDeals = [];
    const badDeals = [];
    for(let transaction of transactions){
        let [cost,cashback] = transaction;
        if(cashback >= cost){
            goodDeals.push(transaction);
        }
        else{
            badDeals.push(transaction);
        }
    }
    goodDeals.sort(function(a,b){return b[0] - a[0]});
    badDeals.sort(function(a,b){return a[1] - b[1]});
    let money = 0;
    let start = money;
    for(let badDeal of badDeals){
        [start,money] = EvaluateDeal(badDeal,money,start);
    }
    for(let goodDeal of goodDeals){
        [start,money] = EvaluateDeal(goodDeal,money,start);
    }
    return start;
};
