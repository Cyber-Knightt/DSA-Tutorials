/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let xor = x ^ y;
    let count = 0;

    while (xor > 0) {
        count += xor & 1; // check last bit
        xor >>= 1;        // right shift
    }
    return count;
};