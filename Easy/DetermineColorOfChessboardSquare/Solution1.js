/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    let code = (coordinates.charCodeAt(0)-96) + parseInt(coordinates[1]);
    return code%2===0?false:true;
};
