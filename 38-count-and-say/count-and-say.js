/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    if (n === 1) return "1";
    let result = "1";
    for (let i = 2; i <= n; i++) {
        let prev = result;
        let current = "";
        let count = 1;

        // Read the previous term
        for (let j = 1; j < prev.length; j++) {
            if (prev[j] === prev[j - 1]) {
                count++;
            } else {
                current += count + prev[j - 1];
                count = 1;
            }
        }
        // Add the last counted digit
        current += count + prev[prev.length - 1];
        result = current;
    }
    return result;
};