const COMMAND_DISCARD_NEXT = '--discard-next',
      COMMAND_DISCARD_PREV = '--discard-prev',
      COMMAND_DUBLE_NEXT = '--double-next',
      COMMAND_DUBLE_PREV = '--double-prev',
      COMMAND_REGEXP = /^--/;


module.exports = function transform(workArray) {
    if (!Array.isArray(workArray)) {
        throw 'Error';
    }

    const result = [];

    workArray.forEach((item, index) => {
            if (!COMMAND_REGEXP.test(item) && workArray[ index - 1 ] !== COMMAND_DISCARD_NEXT ) {
                result.push(item);
            } 

            if (item === COMMAND_DUBLE_NEXT && !COMMAND_REGEXP.test(workArray[ index + 1 ]) && index < workArray.length - 1) {
                result.push(workArray[index + 1]);
            }

            if (item === COMMAND_DUBLE_PREV && !COMMAND_REGEXP.test(workArray[ index - 1 ]) && index > 0) {
                result.push(workArray[index - 1]);
            }

            if (item === COMMAND_DISCARD_PREV) {
                result.pop();
            }
    });

    return result;
};
