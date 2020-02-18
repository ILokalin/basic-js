module.exports = function repeater(str, options) {
    const {addition = '', additionRepeatTimes = 1, additionSeparator = '|'} = options
    const additionStrSet = [];

    if (addition !== '') {
        for (let i = 0; i < additionRepeatTimes; i++) {
            additionStrSet.push(String(addition))
        }
    }

    let additionStrString = additionStrSet.join(additionSeparator);

    const {repeatTimes = 1, separator = '+'} = options;
    let strSet = [];

    for (let i = 0; i < repeatTimes; i++) {
        strSet.push(String(str) + additionStrString);
    }

    return strSet.join(separator);
};
  