/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let totalTank = 0;    // total net gas for the whole circuit
    let currTank = 0;     // gas in tank for the current start
    let startStation = 0; // candidate starting index

    for (let i = 0; i < gas.length; i++) {
        const diff = gas[i] - cost[i];
        totalTank += diff;
        currTank += diff;

        // If we can’t reach the next station, reset start
        if (currTank < 0) {
            startStation = i + 1; // try next station
            currTank = 0;         // reset current tank
        }
    }return totalTank >= 0 ? startStation : -1;
};