
var StockSpanner = function() {
    this.prices = [];
    this.spans = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let i = this.prices.length - 1;
    let span = 0;
    while(price >= this.prices[i]){
        span++;
        i--;
    }
    if(i >= 0 && price >= this.prices[i]){
        this.prices.push(price);
        this.spans.push(this.spans[i] + 1 + span);   
    }
    else{
        this.prices.push(price);
        this.spans.push(1 + span);
    }
    return this.spans[this.spans.length - 1];
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
