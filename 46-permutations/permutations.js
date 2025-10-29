/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const result = [];

    function backtrack(path, used) {
        // Base case: full permutation formed
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue; // Skip already used elements

            // Choose
            path.push(nums[i]);
            used[i] = true;

            // Explore
            backtrack(path, used);

            // Un-choose (backtrack)
            path.pop();
            used[i] = false;
        }
    }

    backtrack([], []);
    return result;
};