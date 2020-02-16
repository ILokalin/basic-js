module.exports = function countCats(room) {
  
  return room.reduce((summ, current, index, array) => {
    return summ + array[index].filter(item => item === '^^').length;
  }, 0);
};
