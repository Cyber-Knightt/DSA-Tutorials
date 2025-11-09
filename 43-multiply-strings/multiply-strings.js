/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    if (num1 === "0" || num2 === "0") return "0";

    const m = num1.length;
    const n = num2.length;
    const res = new Array(m + n).fill(0);

    // Reverse both strings to make multiplication easier
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            const mul = (num1[i] - '0') * (num2[j] - '0');
            const sum = mul + res[i + j + 1]; // current pos + carry

            res[i + j + 1] = sum % 10; // current digit
            res[i + j] += Math.floor(sum / 10); // carry to next left
        }
    }

    // remove leading zeros
    while (res[0] === 0) res.shift();

    return res.join('');
};