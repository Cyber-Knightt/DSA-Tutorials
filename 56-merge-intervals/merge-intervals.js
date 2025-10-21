/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (!intervals.length) return [];

    intervals.sort((a, b) => a[0] - b[0]);

    const merged = [intervals[0]]; // initialize with first interval

    for (let i = 1; i < intervals.length; i++) {
        const last = merged[merged.length - 1]; // last merged interval
        const current = intervals[i];

        if (current[0] <= last[1]) {
            last[1] = Math.max(last[1], current[1]);
        } else {
            merged.push(current);
        }
    }
    return merged;
};