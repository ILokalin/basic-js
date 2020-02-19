const CAT = '^^';

module.exports = function countCats(room) {
  
  return room.reduce((sum, current, index) => {
    return sum + room[ index ].filter(item => item === CAT).length;
  }, 0);
};
