const   DEFAULT_SEPARATOR     = '+',
        DEFAULT_REPEATE_TIMES = 1,
        DEFAULT_ADDITIONAL_SEPARATOR = '|',
        DEFAULT_ADDITIONAL_STRING    = '',
        DEFAULT_ADDITIONAL_REPEATE_TIMES = 1;

module.exports = function repeater(reciveString, options) {
    const {
        repeatTimes = DEFAULT_REPEATE_TIMES, 
        separator   = DEFAULT_SEPARATOR,
        addition    = DEFAULT_ADDITIONAL_STRING, 
        additionRepeatTimes = DEFAULT_ADDITIONAL_REPEATE_TIMES, 
        additionSeparator   = DEFAULT_ADDITIONAL_SEPARATOR } = options;

    const additionStringSet = [],
          reciveStringSet = [];

    for (let i = 0; i < additionRepeatTimes; i++) {
        additionStringSet.push(String(addition))
    }

    let compliteAdditionString = additionStringSet.join(additionSeparator);

    for (let i = 0; i < repeatTimes; i++) {
        reciveStringSet.push(String(reciveString) + compliteAdditionString);
    }

    return reciveStringSet.join(separator);
};
  