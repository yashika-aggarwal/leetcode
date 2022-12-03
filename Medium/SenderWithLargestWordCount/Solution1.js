/**
 * @param {string[]} messages
 * @param {string[]} senders
 * @return {string}
 */
function isLarger(a,b){
    for(let i = 0; i < a.length; i++){
        if(b[i] === undefined){
            return true;
        }
        if(a[i] == b[i]){
            continue;
        }
        if(a[i].toUpperCase === a[i] && b[i].toLowerCase === b[i]){
            return true;
        }
        else if(a[i].toLowerCase === a[i] && b[i].toUpperCase === b[i]){
            return false;
        }
        if(a.charCodeAt(i) > b.charCodeAt(i)){
            return true;
        }
        else{
            return false;
        }
    }
    if(a.length > b.length){
        return true;
    }
    return false;
}
var largestWordCount = function(messages, senders) {
    const wordCounts = new Map();
    let sender = null;
    for(let i = 0; i < messages.length; i++){
        const word = messages[i].split(' ');
        if(wordCounts.has(senders[i])){
            wordCounts.set(senders[i],wordCounts.get(senders[i]) + word.length);
        }else{
            wordCounts.set(senders[i],word.length);
        }
        if(!sender || wordCounts.get(senders[i]) > wordCounts.get(sender)){
            sender = senders[i];
        }
        else if(wordCounts.get(senders[i]) === wordCounts.get(sender)){
            if(isLarger(senders[i],sender)){
                sender = senders[i];
            }
        }
    }
    return sender;
};
