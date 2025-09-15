/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
    const result = [];
    
    for (let h = 0; h < 12; h++) {
        for (let m = 0; m < 60; m++) {
            let bits = countBits(h) + countBits(m);
            if (bits === turnedOn) {
                result.push(`${h}:${m.toString().padStart(2, '0')}`);
            }
        }
    }
    return result;
};

function countBits(n) {
    let count = 0;
    while (n > 0) {
        count += n & 1;
        n = n >> 1;
    }
    return count;
}
