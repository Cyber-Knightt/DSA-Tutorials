/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => a - b); // Step 1: Sort to handle duplicates
    const result = [];

    function backtrack(start, path, target) {
        if (target === 0) {
            result.push([...path]); // found valid combination
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            // Skip duplicates
            if (i > start && candidates[i] === candidates[i - 1]) continue;

            if (candidates[i] > target) break; // optimization

            path.push(candidates[i]);
            backtrack(i + 1, path, target - candidates[i]);
            path.pop(); // backtrack
        }
    }

    backtrack(0, [], target);
    return result;
};