/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let min = prices[0];
    let maxProfit = 0;

    for (var i = 1; i < prices.length; i++) {
        min = min < prices[i] ? min : prices[i];
        let profit = prices[i] - min;
        maxProfit = maxProfit < profit ? profit : maxProfit;
    }
    return maxProfit;
};