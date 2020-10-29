const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample() {
  if (typeof sampleActivity === 'string') {
    let num = parseFloat(sampleActivity);
    if (num < MODERN_ACTIVITY && num > 0) {
        let age = Math.log(MODERN_ACTIVITY / num) / (0.693 / HALF_LIFE_PERIOD);
        return Math.ceil(age);
    } else return false;
} else return false;
};
