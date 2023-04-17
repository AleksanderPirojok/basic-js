const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {


    let result = 1;
    let counter = 1;

    const unbox = (a) => {

        for (let i = 0; i < a.length; i++) {
            if (Array.isArray(a[i])) {
                counter++;
                unbox(a[i]);
            }
            counter > result ? result = counter : result = result;
        }
    }

    unbox(arr);

    return result;

  }
}

module.exports = {
  DepthCalculator
};
