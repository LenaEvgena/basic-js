const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

    let dreamTeam = '';
    if (members && members.length > 0 || Array.isArray(members) && typeof(members) === "object") {

      for (let i = 0; i < members.length; i++) {
        if (typeof(members[i]) === "string") {
          let name = members[i].trim();
          dreamTeam+=name[0];
        }
      }
      return dreamTeam.toUpperCase().split('').sort().join('');
    } else {
      return false;
    }
};
