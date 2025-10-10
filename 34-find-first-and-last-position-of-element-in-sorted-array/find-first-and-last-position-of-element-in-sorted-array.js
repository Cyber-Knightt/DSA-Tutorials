/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    const findFirst = (nums, target) => {
        let left = 0, right = nums.length - 1;
        let first = -1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                first = mid;          // potential first occurrence
                right = mid - 1;      // keep searching left
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return first;
    };

    const findLast = (nums, target) => {
        let left = 0, right = nums.length - 1;
        let last = -1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                last = mid;
                left = mid + 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return last;
    };

    const first = findFirst(nums, target);
    const last = findLast(nums, target);
    return [first, last];
};