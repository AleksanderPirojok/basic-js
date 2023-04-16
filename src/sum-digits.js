const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
    const sumOfSum = (number) => {
        let str = String(number);
        let result = number;
        if (str.length > 1) {
            const sum = str.split('')
                .reduce((acc, currentNum) => acc + Number(currentNum), 0);
            result = sumOfSum(sum);
        }
        return result;
    }

    return sumOfSum(n);
}

module.exports = {
  getSumOfDigits
};
