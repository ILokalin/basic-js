module.exports = class DepthCalculator {

    calculateDepth(checkArray) {
        let deepCount = [];
        

        const checkStage = (array, stage) => {
            if (array.length === 0) {
                deepCount.push(stage);
            }

            array.forEach(item => {
                if (Array.isArray(item)) {
                    checkStage(item, stage + 1);
                } else {
                    deepCount.push(stage);
                }
            })
  
        }

        checkStage(checkArray, 1);

        return deepCount.sort((a, b) => a - b)[deepCount.length - 1];

    }
};