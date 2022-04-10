/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var dict = {};
    var maxSubstr_len=0;
    var indx=0;
   while(!(s[indx] in dict)&& indx<s.length) {       
           dict[s[indx]]=indx;
            indx++;
    }
    var subStr_len =indx;
    maxSubstr_len = subStr_len;
    var last_matched_indx =dict[s[indx]];
    while(indx<s.length){
        if(!(s[indx] in dict)){
            dict[s[indx]]=indx;
             subStr_len = indx-last_matched_indx;
            if(subStr_len>maxSubstr_len)    {
                 maxSubstr_len = subStr_len;
            }
        }
        else {
            if(last_matched_indx>dict[s[indx]]){
                subStr_len = indx - last_matched_indx;
                 dict[s[indx]]=indx;
            }
            else{
                subStr_len = indx- dict[s[indx]];
                last_matched_indx=dict[s[indx]];
                 dict[s[indx]]=indx;
            }
            if(subStr_len>maxSubstr_len)    {
                 maxSubstr_len = subStr_len;
            }
        }
        indx++;
    }
    return maxSubstr_len;    
};
