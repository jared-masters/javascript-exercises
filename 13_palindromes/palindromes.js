function isPunctuation(char) {
    return char == "!" || char == "," || char == "." || char == "?";
}

const palindromes = function (line) {
    line = line.trim().toLowerCase();
    let regular = "";
    let reversed = "";
    for (let i = 0; i < line.length; ++i) {
        const cRegular = line.at(i);
        const cReversed = line.at(line.length - 1 - i);

        if (!isPunctuation(cRegular) && cRegular != " ") {
            regular += cRegular;
        }
        
        if (!isPunctuation(cReversed) && cReversed != " ") {
            reversed += cReversed;
        }
    }
    return regular == reversed;
};

console.log(palindromes("racecar"));

// Do not edit below this line
module.exports = palindromes;
