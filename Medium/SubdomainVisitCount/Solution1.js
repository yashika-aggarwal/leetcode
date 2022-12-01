/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    const counts = new Map();
    for(let cpdomain of cpdomains){
        let [count,domain] = cpdomain.split(' ');
        if(counts.has(domain)){
            counts.set(domain,parseInt(count)+counts.get(domain));
        }
        else{
            counts.set(domain,parseInt(count));
        }
        for(let i = 0; i < domain.length; i++){
            if(domain[i] === '.'){
                let cur = domain.slice(i+1);
                if(counts.has(cur)){
                    counts.set(cur,parseInt(count)+counts.get(cur));
                }
                else{
                    counts.set(cur,parseInt(count));
                }
            }
        }
    }
    const arry = [];
    for(let key of counts.keys()){
        arry.push(counts.get(key) +' ' + key);
    }
    return arry;
};
