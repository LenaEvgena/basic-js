const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    let countCat = 0;

    for (let i = 0; i < matrix.length; i++) {

      let element = matrix[i];
      for (let j = 0; j < element.length; j++) {

        if (element[j] === '^^') {
          countCat += 1;
        }
      }

    }
    return countCat;
};
