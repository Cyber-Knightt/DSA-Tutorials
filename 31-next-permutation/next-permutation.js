/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    // Step 1: Find first decreasing element from right
    let i = nums.length - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    
    // Step 2: If found, find next greater element and swap
    if (i >= 0) {
        let j = nums.length - 1;
        while (nums[j] <= nums[i]) {
            j--;
        }
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    // Step 3: Reverse the part after index i
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
};