/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    if (n <= 0) return false;
    while (n % 3 === 0) {     // keep dividing by 3
        n = n / 3;
    }
    return (n == 1);
};