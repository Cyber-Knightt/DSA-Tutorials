/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let branckets = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for(let char of s){
        if(char === '(' || char === '{' || char === '['){
            stack.push(char)
        } else {
            if(stack.pop() !== branckets[char]){
                return false;
            }
        }
    }
    return stack.length === 0;
};