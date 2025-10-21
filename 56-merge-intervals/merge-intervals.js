/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (!intervals.length) return [];

    // Step 1: Sort intervals by their start time
    intervals.sort((a, b) => a[0] - b[0]);

    const merged = [intervals[0]]; // initialize with first interval

    // Step 2: Traverse and merge overlapping intervals
    for (let i = 1; i < intervals.length; i++) {
        const last = merged[merged.length - 1]; // last merged interval
        const current = intervals[i];

        if (current[0] <= last[1]) {
            // Overlap found → merge intervals
            last[1] = Math.max(last[1], current[1]);
        } else {
            // No overlap → push new interval
            merged.push(current);
        }
    }

    return merged;
};