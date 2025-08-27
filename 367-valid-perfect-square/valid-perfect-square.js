/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    if (num < 2) return true; // 0 and 1 are perfect squares

    let left = 2;
    let right = Math.floor(num / 2);

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let sq = mid * mid;

        if (sq === num) return true;
        if (sq < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
};