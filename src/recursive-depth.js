module.exports = class DepthCalculator {
    constructor () {
        let deepCount = [];
    }

    calculateDepth(checkArray, stage = 0) {
            if (stage === 0) {
                this.deepCount = [];
                stage = 1;
            }
       
            if (checkArray.length === 0) {
                this.deepCount.push(stage);
            }

            checkArray.forEach(item => {
                if (Array.isArray(item)) {
                    this.calculateDepth(item, stage + 1);
                } else {
                    this.deepCount.push(stage);
                }
            })

        return this.deepCount.sort((a, b) => a - b)[this.deepCount.length - 1];
    }
};