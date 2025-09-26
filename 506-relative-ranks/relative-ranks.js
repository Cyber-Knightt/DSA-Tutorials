/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
    let arr = score.map((s, i) => [s, i]);

    arr.sort((a, b) => b[0] - a[0]);

    let result = new Array(score.length);

    // Step 4: assign ranks
    for (let i = 0; i < arr.length; i++) {
        let rank;
        if (i === 0) rank = "Gold Medal";
        else if (i === 1) rank = "Silver Medal";
        else if (i === 2) rank = "Bronze Medal";
        else rank = (i + 1).toString();
        result[arr[i][1]] = rank; // place in original position
    }
    return result;
};