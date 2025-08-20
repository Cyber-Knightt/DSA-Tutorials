/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function (n) {
    let binaryNum = n.toString(2).padStart(32, '0');
    let reverseBinary = binaryNum.split('').reverse();
    let num = parseInt(reverseBinary.join(''), 2) >>> 0;
    return num;
};