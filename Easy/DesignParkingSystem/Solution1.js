/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    this.big =big;
    this.medium = medium;
    this.small = small;
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    switch(carType){
        case 1:
            this.big-=1;
            return this.big>=0? true:false;
        case 2: 
            this.medium-=1;
            return this.medium>=0? true:false;
        case 3 :
            this.small-=1;
            return this.small>=0? true:false;
    }
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
