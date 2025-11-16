/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = [];

    for (let token of tokens) {
        if (token === "+" || token === "-" || token === "*" || token === "/") {
            let b = stack.pop();
            let a = stack.pop();

            if (token === "+") stack.push(a + b);
            else if (token === "-") stack.push(a - b);
            else if (token === "*") stack.push(a * b);
            else if (token === "/") stack.push(Math.trunc(a / b)); // truncate toward zero
        } else {
            stack.push(Number(token)); // convert string → number
        }
    }

    return stack.pop();
};