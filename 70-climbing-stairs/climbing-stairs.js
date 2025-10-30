/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 2) return n;

    let first = 1;  // ways(1)
    let second = 2; // ways(2)

    for (let i = 3; i <= n; i++) {
        const current = first + second; // ways(n) = ways(n-1) + ways(n-2)
        first = second;  // move window forward
        second = current;
    }

    return second; // final answer
};