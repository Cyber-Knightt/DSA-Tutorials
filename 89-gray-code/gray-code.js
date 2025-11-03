/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
    let result = [0];

    for (let i = 0; i < n; i++) {
        let addOn = 1 << i; // 2^i
        // mirror and add addOn to reversed numbers
        for (let j = result.length - 1; j >= 0; j--) {
            result.push(result[j] + addOn);
        }
    }

    return result;
};