const sumAll = function(firstNumber, secondNumber) {
    if (!Number.isInteger(firstNumber) || (!Number.isInteger(secondNumber))) return "ERROR";
    if (secondNumber < 0 || firstNumber < 0) return "ERROR";
    if (firstNumber > secondNumber) {
        const temp = firstNumber;
        firstNumber = secondNumber;
        secondNumber = temp;
    }
    let sumOfAll = 0;
    for (let i = firstNumber; i <= secondNumber; i++) {
        sumOfAll += i;
    }
    return sumOfAll;
};
// Do not edit below this line
module.exports = sumAll;
