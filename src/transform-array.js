module.exports = function transform(workArray) {
    
    const result = [];

    if (!Array.isArray(workArray)) {
        throw 'Error';
    }
    
    workArray.forEach((item, index, array) => {
            if (!/^--/.test(item) && workArray[index - 1] !== '--discard-next') {
                result.push(item);
            } 

            if (item === '--double-next' && !/^--/.test(workArray[index + 1]) && index < workArray.length - 1) {
                result.push(workArray[index + 1]);
            }

            if (item === '--double-prev' && !/^--/.test(workArray[index - 1]) && index > 0) {
                result.push(workArray[index - 1]);
            }

            if (item === '--discard-prev') {
                result.pop();
            }
    });

    return result;
};
