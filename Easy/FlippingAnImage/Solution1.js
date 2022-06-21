/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    let rows = image.length;
    let cols = image[0].length;
    for(let r = 0; r<rows;r++){
        let row = image[r];
        let p1 = 0;
        let p2 = cols-1;
        while(p1<p2){
            let bit = image[r][p2];
            image[r][p2]=image[r][p1];
            image[r][p1]=bit;
            p1++;
            p2--;
        }
        for(let c=0;c<cols;c++){
            let cell = image[r][c];
            if(cell===0){
                image[r][c]=1;
            }
            else{
                image[r][c]=0;
            }
        }
    }
    return image;
};
