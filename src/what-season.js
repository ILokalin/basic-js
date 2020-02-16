module.exports = function getSeason(checkDate) {
  if (typeof checkDate === 'undefined') {
    return 'Unable to determine the time of year!'
  }

  if (Object.prototype.toString.call(checkDate) !== '[object Date]' || typeof checkDate.getMonth !== 'function' ) {
    throw 'Error';
  }


  return true;

};
