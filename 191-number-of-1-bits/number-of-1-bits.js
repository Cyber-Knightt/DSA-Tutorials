/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
    let binary = 0;
    while (n > 0) {
        binary += (n & 1);  // take last bit
        n = n >> 1;// shift right by 1 (divide by 2, floor)
    }
    return binary;
};