const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!arr.length) return [];
  if (arr.length === 0) return arr;
  if (!Array.isArray(arr)) throw new Error;

  let newArray = Array.from(arr);

  let dn = "--discard-next";
  let dp = "--discard-prev";
  let dbn = "--double-next";
  let dbp = "--double-prev";

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] === dn) {
      if (i !== newArray.length - 1) {
        newArray.splice(i, 2);
        // i = i + 2;
      } else if (i === (newArray.length - 1)) {
        newArray.splice(i, 1);
        // i++;
      }
    }

    if (newArray[i] === dp) {
      if (i !== 0) {
        newArray.splice((i - 1), 2);
        // i = i + 2;
      } else if (i === 0) {
        newArray.splice(i, 1);
        // i++;
      }
    }

    if (newArray[i] === dbn) {
      if (i !== newArray.length - 1) {
        newArray.splice(i, 1, newArray[i + 1]);
      } else if (i === (newArray.length - 1)) {
        newArray.splice(i, 1);
      }
    }

    if (newArray[i] === dbp) {
      if (i !== 0) {
        newArray.splice(i, 1, newArray[i - 1]);
      } else if (i === 0) {
        newArray.splice(i, 1);
      }
    }
  }
    return newArray;

};
