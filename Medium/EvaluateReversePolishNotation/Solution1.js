/**
 * @param {string[]} tokens
 * @return {number}
 */
const operations = new Set('+-*/');
var evalRPN = function(tokens) {
    const operands_stack = [];
    for(let next of tokens){
        if(operations.has(next)){
            const b = operands_stack.pop();
            const a = operands_stack.pop();
            let result;
            switch(next){
                case '+':
                    result = a + b;
                    break;
                case '-':
                    result = a - b;
                    break;
                case '*':
                    result = a * b;
                    break
                case '/':
                    const r = a % b;
                    result = (a - r)/b;
                    break;
            }
            operands_stack.push(result);
        }
        else{
            operands_stack.push(parseInt(next));
        }
    }
    return operands_stack.pop();
};
