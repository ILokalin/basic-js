module.exports = class DepthCalculator {
    upSort(a, b) {
        return a - b;
    }

    calculateDepth(checkArray, stage = 0) {
        if (stage === 0) {
            this.deepCountersSet = [];
            stage = 1;
        }
       
        if (checkArray.length === 0) {
            this.deepCountersSet.push(stage);
        }

        checkArray.forEach(item => {
            if (Array.isArray(item)) {
                this.calculateDepth(item, stage + 1);
            } else {
                this.deepCountersSet.push(stage);
            }
        })

        return this.deepCountersSet.sort(this.upSort)[ this.deepCountersSet.length - 1 ];
    }
};