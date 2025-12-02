/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let matrix = Array.from({ length: n }, () => Array(n).fill(0));

    let top = 0, bottom = n - 1;
    let left = 0, right = n - 1;
    let num = 1;

    while (top <= bottom && left <= right) {

        // left → right
        for (let i = left; i <= right; i++) {
            matrix[top][i] = num++;
        }
        top++;

        // top → bottom
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = num++;
        }
        right--

        // right → left
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                matrix[bottom][i] = num++;
            }
            bottom--
        }

        // bottom → top
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                matrix[i][left] = num++;
            }
            left++;
        }
    }return matrix
};