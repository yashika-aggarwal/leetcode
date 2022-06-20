/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
    let lines =1;
    let pixels = 100;
    let lastline = 0;
    let i=0;
    while(i<s.length){
        let width = widths[s.charCodeAt(i)-97];
        if(pixels>width){
            pixels-= width;
            lastline +=width;
            i++;
        }
        else if(pixels===width){
            if(i===s.length-1){
                lastline=100;
            }
            else{
                lines++;
                pixels=100;
                lastline = 0;
            }
            i++;
        }
        else{
            lines++;
            pixels = 100;
            lastline = 0;
        }
    }
    return [lines,lastline];
};
