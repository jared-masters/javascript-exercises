const sumAll = function(a, b) {
    if ((typeof(a) !== "number" && typeof(a) !== "bigint") ||
        (typeof(b) !== "number" && typeof(b) !== "bigint") ||
        a < 0 || b < 0 ||
        Math.floor(a) !== a || Math.floor(b) !== b) {
        return "ERROR";
    }

    let lower = a < b ? a : b;
    let upper = a > b ? a : b;
    let sum = 0;
    for (let i = lower; i <= upper; ++i) {
        sum += i;
    }
    return sum;
};

console.log(sumAll(123, 1));

// Do not edit below this line
module.exports = sumAll;
