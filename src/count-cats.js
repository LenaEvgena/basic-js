const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    let count = 0;
    for (let i = 0; i < matrix.length; i++) {
      let element = matrix[i];
      for (let j = 0; j < element.length; j++) {
        if (element[j] === '^^') {
          count += 1;
        }
      }
    }
    return count;
};
