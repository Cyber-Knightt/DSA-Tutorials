/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let rows = 0;
    while (n >= rows + 1) {
        rows++;
        n -= rows;
    }
    return rows;
};