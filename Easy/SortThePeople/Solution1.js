/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    const people = new Map();
    for(let i = 0; i < names.length; i++){
        people.set(heights[i],names[i]);
    }
    heights.sort(function(a,b){return b-a;});
    let j = 0;
    for(let height of heights){
        names[j] = people.get(height);
        j++;
    }
    return names;
};
