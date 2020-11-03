
module.exports = function getSeason(date) {

  if (!date) return 'Unable to determine the time of year!';
  if (!date.getTime()) throw new Error;

  let monthD = date.getMonth();

  if (monthD === 11 || monthD <= 1) return 'winter';
  if (monthD > 1 && monthD < 5) return 'spring';
  if (monthD > 4 && monthD < 8) return 'summer';
  if (monthD > 7 && monthD < 11) return 'autumn';

};
