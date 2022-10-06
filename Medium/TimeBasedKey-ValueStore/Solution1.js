
var TimeMap = function() {
    this.timeMap = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if(!this.timeMap.has(key)){
        this.timeMap.set(key,[[timestamp,value]]);
    }
    else{
        let timeStamps = this.timeMap.get(key);
        timeStamps.push([timestamp,value]);
        this.timeMap.set(key,timeStamps); 
    }
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
   if(this.timeMap.has(key)){
       let timeStamps = this.timeMap.get(key);
       let low = 0;
       let high = timeStamps.length - 1;
       while(low <= high){
           let mid = low + Math.floor((high-low)/2);
           let timeStampPrev = timeStamps[mid][0];
           if(timeStampPrev === timestamp){
               return timeStamps[mid][1];
           }
           else if(timeStampPrev > timestamp){
               high = mid - 1;
           }
           else{
               if(mid >= timeStamps.length - 1){
                    return timeStamps[mid][1]; 
               }
               else{
                    if(timeStamps[mid + 1][0] > timestamp){
                        return timeStamps[mid][1]; 
                    }
                   else{
                        low = mid + 1;
                    }
               }
           }
       }
   }
    return ""
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
