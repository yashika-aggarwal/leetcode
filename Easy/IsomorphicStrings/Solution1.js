/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    // if s.length is 1 return true
    if(s.length===1){
        return true;
    }
    // if s.length  is not equal t.length return false
    if(s.length !== t.length){
        return false;
    }
    let map ={};    // intilize dict 
    // if char doesn't exits in dict , add (s[i],t[i]) as (key,value)
    for(let index = 0; index<s.length; index++){
        if(!map[s[index]]){
            for(let key in map){
                if(map[key]===t[index]){
                    return false;
                }
            }
            map[s[index]]=t[index];
        }
        else{
            // elseif char's value is not equal to  t char return false
           if(map[s[index]]!==t[index]){
                return false;
            } 
        } 
    }
    return true;        // else return true
};
