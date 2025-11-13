/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    if (!s || s[0] === '0') return 0;  // can't start with 0

    const n = s.length;
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        const oneDigit = Number(s.slice(i - 1, i));
        const twoDigits = Number(s.slice(i - 2, i));

        // Single digit valid (1–9)
        if (oneDigit >= 1 && oneDigit <= 9) {
            dp[i] += dp[i - 1];
        }

        // Two digits valid (10–26)
        if (twoDigits >= 10 && twoDigits <= 26) {
            dp[i] += dp[i - 2];
        }
    }

    return dp[n];
};