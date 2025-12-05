/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        // If mid element > right element, min must be in right half
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            // Otherwise, min is in left half INCLUDING mid
            right = mid;
        }
    }

    // left == right → minimum index
    return nums[left];
};