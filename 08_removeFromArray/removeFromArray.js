const removeFromArray = function(array, ...args) {
    return array.filter(element => !Array.from(args).includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
