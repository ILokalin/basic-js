const SEASONS = ['winter', 'spring', 'summer', 'fall'],
      ERROR_RETURN = 'Unable to determine the time of year!',
      ERROR_THROW  = 'Error',
      OBJECT_DATE_TYPE = '[object Date]',
      UNDEFINED_TYPE  = 'undefined',
      DECEMBER_REGEXP = /12/;

module.exports = function getSeason(checkDate) {
  if (typeof checkDate === UNDEFINED_TYPE) {
    return ERROR_RETURN;
  }

  if (Object.prototype.toString.call(checkDate) !== OBJECT_DATE_TYPE) {
    throw ERROR_THROW;
  }

  let month = Number((checkDate.getMonth() + 1 + '').replace(DECEMBER_REGEXP,'0'));
  
  return SEASONS[Math.floor(month / 3)];
};
