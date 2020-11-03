const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let counts = Math.pow(2, disksNumber) - 1;
    let seconds = Math.floor(counts / (turnsSpeed / (60*60)));

    return {turns: counts, seconds: seconds};
};
