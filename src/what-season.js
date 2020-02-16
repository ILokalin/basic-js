const SEASONS = ['winter', 'spring', 'summer', 'fall'];

module.exports = function getSeason(checkDate) {
  if (typeof checkDate === 'undefined') {
    return 'Unable to determine the time of year!'
  }

  if (Object.prototype.toString.call(checkDate) !== '[object Date]' || typeof checkDate.getMonth !== 'function' ) {
    throw 'Error';
  }

  let month = checkDate.getMonth() + 1;
  
  if (month === 12) {
    month = 0;
  }

  return SEASONS[Math.floor(month / 3)];
};
