const SEASONS = ['winter', 'spring', 'summer', 'fall'];

module.exports = function getSeason(checkDate) {
  if (typeof checkDate === 'undefined') {
    return 'Unable to determine the time of year!'
  }

  if (Object.prototype.toString.call(checkDate) !== '[object Date]' || typeof checkDate.getMonth !== 'function' ) {
    throw 'Error';
  }

  let month = Number((checkDate.getMonth() + 1 + '').replace(/12/,'0'));
  
  return SEASONS[Math.floor(month / 3)];
};
