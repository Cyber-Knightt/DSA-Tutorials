/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const result = [];

    function backtrack(start, current, total) {
        if (total === target) {
            result.push([...current]); // found a valid combination
            return;
        }
        if (total > target) return; // stop exploring
        for (let i = start; i < candidates.length; i++) {
            current.push(candidates[i]);
            backtrack(i, current, total + candidates[i]); // reuse allowed
            current.pop(); // backtrack
        }
    }
    backtrack(0, [], 0);return result;
};