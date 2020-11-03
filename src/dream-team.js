const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

    let dreamTeamName = '';
    if (members && members.length > 0 || Array.isArray(members) && typeof(members) === "object") {

      for (let i = 0; i < members.length; i++) {

        if (typeof(members[i]) === "string") {
          let name = members[i].trim();
          dreamTeamName += name[0];
        }
      } return dreamTeamName.toUpperCase().split('').sort().join('');

    } else {
      return false;
    }
};
